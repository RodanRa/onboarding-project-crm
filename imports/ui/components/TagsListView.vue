<template>
  <div class="tags-view">
    <AddTagsForm />
    <ul>
      <li v-for="tag in tags" v-bind:key="tag._id">
        <button @click="singleTagView(tag._id, tag.tagname)">
          {{ tag.tagname }}</button
        ><button @click="deleteTag(tag._id, tag.tagname)">❌</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import { TagsCollection } from "../../db/TagsCollection";
import AddTagsForm from "./AddTagsForm.vue";
export default {
  name: "TagsListView",
  components: {
    AddTagsForm,
  },
  methods: {
    singleTagView(tagId, tagName) {
      this.$store.state.currentTagView = tagName;
      this.$router.push({
        name: "TagsView",
        params: { id: tagId },
      });
    },
    deleteTag(tagId, tagName) {
      Meteor.call("tags.remove", { tagId, tagName });
    },
  },
  meteor: {
    $subscribe: {
      tags: [],
    },
    currentUser() {
      return Meteor.user();
    },
    tags() {
      return TagsCollection.find(
        { organizationId: this.currentUser.profile.organizationId },
        { sort: { createdAt: -1 } }
      ).fetch();
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
button:hover {
  cursor: pointer;
}
</style>
