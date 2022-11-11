<template>
  <div class="controls">
    <button @click="show" class="addContact">Add Contact</button>
    <modal name="addContactModal">
      <div class="addContactModal">
        <form class="login-form" @submit.prevent="handleSubmit">
          <div class="input-field">
            <label for="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              required
              v-model="username"
            />
          </div>

          <div class="input-field">
            <label for="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone"
              required
              v-model="phone"
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
  name: "AddContactForm",
  data() {
    return {
      username: "",
      phone: "",
    };
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    },
  },
  methods: {
    show() {
      this.$modal.show("addContactModal");
    },
    hide() {
      this.$modal.hide("addContactModal");
    },
    handleSubmit(event) {
      Meteor.call("contacts.insert", {
        username: this.username,
        phone: this.phone,
        organizationId: this.currentUser.profile.organizationId,
      });
      this.hide();
    },
  },
};
</script>

<style scoped>
.addContactsModal,
.input-field {
  padding: 10px;
}
button {
  margin: 10px;
}
</style>
