<template>
  <div class="tags-view">
    <h1>Tag: {{ this.$store.state.currentTagView }}</h1>
    <form class="addTagsToContactsForm" @submit.prevent="handleSubmit">
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
    <ul class="tags-contacts-list">
      <li v-for="contact in contacts" v-bind:key="contact._id">
        <div class="username-display">{{ contact.username }}</div>
        <p v-for="(tag, index) in contact.tags" v-bind:key="index">
          {{ tag }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ContactsCollection } from "../../db/ContactsCollection";
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
      Meteor.call(
        "contacts.addTags",
        this.$store.state.currentTagView,
        this.username
      );
    },
  },
  meteor: {
    $subscribe: {
      contacts: [],
    },
    contacts() {
      return ContactsCollection.find({
        organizationId: this.$store.getters.getOrganization._id,
        tags: {
          $elemMatch: { $eq: this.$store.state.currentTagView },
        },
      }).fetch();
    },
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
.tags-contacts-list > li > .username-display {
  text-decoration: underline;
}
</style>
