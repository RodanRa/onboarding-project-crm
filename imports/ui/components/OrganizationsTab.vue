<template>
  <div class="heading">
    <div class="tab-title">
      <h1>Organizations {{ this.$store.getters.getOrganization.name }}</h1>
    </div>
    <div class="content-body">
      <AddOrganizationForm />
      <ul class="organizations-list">
        <h3>Select Organization</h3>
        <li v-for="organization in organizations" v-bind:key="organization._id">
          <button @click="setOrganization(organization)">
            {{ organization.name }}
          </button>
        </li>
      </ul>
      <h3>Users list</h3>
      <ul class="users-list">
        <li v-for="user in users" v-bind:key="user._id">{{ user.username }}</li>
      </ul>
      <div class="addUserSection">
        <AddUserForm />
      </div>
    </div>
  </div>
</template>
<script>
import AddOrganizationForm from "./AddOrganizationForm.vue";
import { OrganizationsCollection } from "../../db/OrganizationsCollection";
import AddUserForm from "./AddUserForm.vue";
import { Meteor } from "meteor/meteor";
export default {
  name: "OrganizationsTab",
  components: {
    AddOrganizationForm,
    AddUserForm,
  },
  meteor: {
    $subscribe: {
      organizations: [],
      users: [],
    },
    currentUser() {
      return Meteor.user();
    },
    organizations() {
      return OrganizationsCollection.find(
        { userId: this.currentUser._id },
        { sort: { createdAt: -1 } }
      ).fetch();
    },
    users() {
      return Meteor.users
        .find({
          "profile.organizationId": this.$store.getters.getOrganization._id,
        })
        .fetch();
    },
  },
  methods: {
    setOrganization(organization) {
      this.$store.dispatch("setOrganization", organization);
      //console.table(this.$store.getters.getOrganization);
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
