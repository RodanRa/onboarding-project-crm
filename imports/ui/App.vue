<template>
  <div class="app">
    <div class="body">
      <LoginForm v-if="!currentUser" />
      <div v-else class="main">
        <div class="side-bar">
          <SideBar />
          <div class="content">
            <div class="user-logout" v-on:click="logout">
              <button>{{ currentUser.username }} logout</button> 🚪
            </div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import SideBar from "./components/SideBar.vue";
import { Meteor } from "meteor/meteor";

export default {
  components: {
    LoginForm,
    SideBar,
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    },
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      Meteor.logout();
      this.$store.dispatch("setOrganization", {
        name: "",
        address: "",
        phone: "",
        _id: "",
      });
    },
  },
};
</script>

<style>
.user-logout {
  display: block;
  position: absolute;
  right: 10px;
}
</style>
