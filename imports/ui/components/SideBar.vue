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
export default {
  name: "SideBar",
  meteor: {
    currentUser() {
      return Meteor.user();
    },
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
