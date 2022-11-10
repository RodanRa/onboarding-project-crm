<template>
  <div class="tags-view">
    <AddTagsForm />
    <ul>
      <li
        v-for="tag in tags"
        v-bind:key="tag._id"
        @click="singleTagView(tag._id, tag.tagname)"
      >
        {{ tag.tagname }}
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
  },
  meteor: {
    $subscribe: {
      tags: [],
    },
    tags() {
      return TagsCollection.find(
        { organizationId: this.$store.getters.getOrganization._id },
        { sort: { createdAt: -1 } }
      ).fetch();
    },
  },
};
</script>
