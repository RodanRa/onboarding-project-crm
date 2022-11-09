<template>
  <div class="sidenav">
    <ul>
      <li class="nav-head"><h3>CRM</h3></li>
      <li>
        <button
          @click="
            $emit('toggle-tab', 1);
            setTabNo(1);
          "
          v-bind:style="[tabNo === 1 ? { color: 'white' } : {}]"
        >
          Organizations
        </button>
      </li>
      <li>
        <button
          @click="
            $emit('toggle-tab', 2);
            setTabNo(2);
          "
          v-bind:style="[tabNo === 2 ? { color: 'white' } : {}]"
        >
          Contacts
        </button>
      </li>
      <li>
        <button
          @click="
            $emit('toggle-tab', 3);
            setTabNo(3);
          "
          v-bind:style="[tabNo === 3 ? { color: 'white' } : {}]"
        >
          Tags
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      tabNo: undefined,
    };
  },
  methods: {
    setTabNo(n) {
      this.tabNo = n;
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
