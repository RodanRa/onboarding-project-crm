<template>
  <h1>Welcome {{ currentUser.username }} to the CRM</h1>
</template>
<script>
import { Meteor } from "meteor/meteor";
export default {
  name: "WelcomeTab",
  meteor: {
    currentUser() {
      return Meteor.user();
    },
  },
};
</script>
