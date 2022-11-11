<template>
  <div class="sidenav">
    <ul>
      <li class="nav-head"><h3>CRM</h3></li>
      <router-link
        v-if="this.currentUser.profile.role !== 'coordinator'"
        to="/organizations"
        class="link"
        >Organizations</router-link
      >
      <div v-if="this.currentUser.profile.role !== 'keelaAdmin'">
        <router-link to="/contacts" class="link">Contacts</router-link>
        <router-link to="/Tags" class="link">Tags</router-link>
      </div>
    </ul>
  </div>
</template>
<script>
import { OrganizationsCollection } from "../../db/OrganizationsCollection";
export default {
  name: "SideBar",
  meteor: {
    $subscribe: {
      organizations: [],
    },
    currentUser() {
      return Meteor.user();
    },
    // organizations() {
    //   return OrganizationsCollection.find({}).fetch();
    // },
  },
  created() {
    //console.log(OrganizationsCollection.find({}).fetch());
    // this.$store.state.user = this.currentUser;
    // console.log(this.organizations);
    // console.log(this.organizations);
    // this.$store.dispatch("setOrganization", org);
    // console.log(this.$store.getters.getOrganization.name);
    // if (org !== undefined && this.$store.getters.getOrganization.name === "") {
    // }
    // to reset the route at each login
    // this.$router.push("/");
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
.router-link-exact-active {
  color: #f1f1f1;
}
</style>
