<template>
  <div class="sidenav">
    <ul>
      <li class="nav-head"><h3>CRM</h3></li>
      <router-link to="/organizations" class="link">Organizations</router-link>
      <router-link to="/contacts" class="link">Contacts</router-link>
      <router-link to="/Tags" class="link">Tags</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data() {},
  methods: {},
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
