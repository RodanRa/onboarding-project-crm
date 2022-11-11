<template>
  <div class="controls">
    <button @click="show" class="addTags">Add Tags</button>
    <modal name="addTagsModal">
      <div class="addTagsModal">
        <form class="login-form" @submit.prevent="handleSubmit">
          <div class="input-field">
            <label for="tagname">Tagname</label>
            <input
              id="tagname"
              name="tagname"
              type="text"
              placeholder="Tagname"
              required
              v-model="tagname"
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
          <button @click="hide" class="close-modal-button">Close</button>
        </form>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  name: "AddTagsForm",
  data() {
    return {
      tagname: "",
    };
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    },
  },
  methods: {
    show() {
      this.$modal.show("addTagsModal");
    },
    hide() {
      this.$modal.hide("addTagsModal");
    },
    handleSubmit(event) {
      Meteor.call("tags.insert", {
        tagname: this.tagname,
        organizationId: this.currentUser.profile.organizationId,
      });
      this.hide();
    },
  },
};
</script>

<style scoped>
.addTagsModal,
.input-field {
  padding: 10px;
}
button {
  margin: 10px;
}
</style>
