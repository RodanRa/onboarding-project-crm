<template>
  <div class="heading">
    <div class="tab-title">
      <h1>
        Organizations {{ this.$store.getters.getOrganization.name }}
        {{ myOrganizationName }}
      </h1>
    </div>
    <div class="content-body org-user-mngmnt">
      <div
        v-if="currentUser.profile.role == 'keelaAdmin'"
        class="keela-admin-section"
      >
        <AddOrganizationForm />
        <ul class="organizations-list">
          <h3>Select Organization</h3>
          <li
            v-for="organization in organizations"
            v-bind:key="organization._id"
          >
            <button @click="setOrganization(organization)">
              {{ organization.name }}
            </button>
          </li>
        </ul>
      </div>
      <h3>Users list</h3>
      <ul class="users-list">
        <li v-for="user in users" v-bind:key="user._id">
          <div @click="updateUser(user._id)" class="user-selection">
            <button>{{ user.username }}</button>
          </div>
          Role: {{ user.profile.role }}
          <button
            v-if="currentUser.profile.role == 'Admin'"
            @click="deleteUser(user._id)"
          >
            ❌
          </button>
        </li>
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
  name: "OrganizationsManagementView",
  components: {
    AddOrganizationForm,
    AddUserForm,
  },
  data() {
    return { organizationId: "" };
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
      if (this.currentUser.profile.role === "Admin") {
        const org = OrganizationsCollection.find({
          _id: this.currentUser.profile.organizationId,
        }).fetch()[0];
        // if (
        //   org !== undefined &&
        //   this.$store.getters.getOrganization.name === ""
        // ) {
        //   this.$store.dispatch("setOrganization", org);
        //   //console.log(this.$store.getters.getOrganization);
        // }
        return OrganizationsCollection.find({
          _id: this.currentUser.profile.organizationId,
        }).fetch();
      } else {
        return OrganizationsCollection.find(
          { userId: this.currentUser._id },
          { sort: { createdAt: -1 } }
        ).fetch();
      }
    },
    myOrganizationName() {
      if (this.currentUser.profile.role !== "keelaAdmin") {
        return OrganizationsCollection.findOne({
          _id: this.currentUser.profile.organizationId,
        }).name;
      } else {
        return "";
      }
    },
    users() {
      if (this.currentUser.profile.role !== "keelaAdmin") {
        return Meteor.users
          .find({
            "profile.organizationId": this.currentUser.profile.organizationId,
            // "profile.role": { $ne: "keelaAdmin" },
            _id: { $ne: this.currentUser._id }, //hiding self
          })
          .fetch();
      } else {
        return Meteor.users
          .find({
            "profile.organizationId": this.$store.getters.getOrganization._id,
            // "profile.role": { $ne: "keelaAdmin" },
            _id: { $ne: this.currentUser._id }, //hiding self
          })
          .fetch();
      }
    },
  },
  methods: {
    setOrganization(organization) {
      this.$store.dispatch("setOrganization", organization);
      //console.table(this.$store.getters.getOrganization);
    },
    deleteUser(userId) {
      //console.log(`user ${userId} deleted`);
      Meteor.call("accounts.remove", userId);
    },
    updateUser(userId) {
      this.$router.push({
        name: "UpdateUserForm",
        params: { id: userId },
      });
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
/* .user-selection:hover {
  cursor: pointer;
} */
</style>
