<template>
  <div class="tags-view">
    <h1>Tag: {{ this.$store.state.currentTagView }}</h1>
    <form class="addTagsToUserForm" @submit.prevent="handleSubmit">
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        required
        v-model="username"
      />
      <button type="submit">Add</button>
    </form>
    <ul class="users-list">
      <li v-for="user in users" v-bind:key="user._id">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TagsView",
  data() {
    return {
      username: "", //note: username is unique
    };
  },
  beforeDestroy() {
    //this.$route.params.id -> tagId
    this.$store.state.currentTagView = "";
  },
  methods: {
    handleSubmit() {
      console.log("submitted");
      Meteor.call(
        "account.addTags",
        this.$store.state.currentTagView,
        this.username
      );
    },
  },
  meteor: {
    $subscribe: {
      users: [],
    },
    users() {
      return Meteor.users
        .find({
          "profile.organizationId": this.$store.getters.getOrganization._id,
          "profile.tags": {
            $elemMatch: { $eq: this.$store.state.currentTagView },
          },
        })
        .fetch();
    },
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
</style>
