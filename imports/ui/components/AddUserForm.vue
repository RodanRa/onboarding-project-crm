<template>
  <div class="controls">
    <button @click="show" class="addUser">Add User</button>
    <modal name="addUserModal">
      <div class="addUserModal">
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
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="password"
              required
              v-model="password"
            />
          </div>

          <div class="input-field">
            <label for="role">Password</label>
            <input
              id="role"
              name="role"
              type="text"
              placeholder="role"
              required
              v-model="role"
            />
          </div>

          <div class="input-field">
            <label for="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              required
              v-model="address"
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
  name: "AddUserForm",
  data() {
    return {
      username: "",
      password: "",
      role: "",
      address: "",
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
      this.$modal.show("addUserModal");
    },
    hide() {
      this.$modal.hide("addUserModal");
    },
    handleSubmit(event) {
      Meteor.call("accounts.insert", {
        username: this.username,
        password: this.password,
        profile: {
          role: this.role,
          address: this.address,
          phone: this.phone,
          organizationId: this.$store.getters.getOrganization._id,
        },
      });
      this.hide();
    },
  },
};
</script>

<style scoped>
.addUserModal,
.input-field {
  padding: 10px;
}
button {
  margin: 10px;
}
</style>
