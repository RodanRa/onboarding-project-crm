<template>
  <div class="app">
    <div class="body">
      <LoginForm v-if="!currentUser" />
      <div v-else class="main">
        <div class="side-bar">
          <SideBar @toggle-tab="toggleTab" />
          <div class="content">
            <div v-if="organizationsTab" class="organizationsTab container">
              Organizations
            </div>
            <div v-else-if="contactsTab" class="contactsTab container">
              Contacts
            </div>
            <div v-else-if="tagsTab" class="tagsTab container">Tags</div>
            <div v-else class="noTab container">Welcome</div>
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
      organizationsTab: false,
      contactsTab: false,
      tagsTab: false,
    };
  },
  methods: {
    toggleTab(tabNo) {
      if (tabNo === 1) {
        this.organizationsTab = true;
        this.contactsTab = false;
        this.tagsTab = false;
      } else if (tabNo === 2) {
        this.organizationsTab = false;
        this.contactsTab = true;
        this.tagsTab = false;
      } else if (tabNo === 3) {
        this.organizationsTab = false;
        this.contactsTab = false;
        this.tagsTab = true;
      }
    },
  },
  created() {},
  emits: ["toggle-tab"],
};
</script>

<style></style>
