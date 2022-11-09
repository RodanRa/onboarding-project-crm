<template>
  <div class="app">
    <div class="body">
      <LoginForm v-if="!currentUser" />
      <div v-else class="main">
        <div class="side-bar">
          <SideBar />
          <div class="content">
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

export default {
  components: {
    LoginForm,
    SideBar,
  },
  data() {
    return {
      currentUser: true,
    };
  },
  methods: {},
  created() {},
};
</script>

<style></style>
