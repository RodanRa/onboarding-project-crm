<template>
  <div class="controls">
    <h3>Update User</h3>
    <div class="addUserModal">
      <form class="login-form" @submit.prevent="handleSubmit">
        <div class="input-field">
          <label for="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
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
            v-model="password"
          />
        </div>

        <div class="input-field">
          <label for="role">Role</label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="role (keelaAdmin/Admin/coordinator)"
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
            v-model="phone"
          />
        </div>

        <div>
          <button type="submit">Update</button>
        </div>
        <button @click="hide" class="close-modal-button">Close</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateUserPage",
  data() {
    return {
      username: "",
      password: "",
      role: "",
      address: "",
      phone: "",
      organizationId: "",
    };
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    },
  },
  async created() {
    //setting v-model data with actual values
    const user = await Meteor.callAsync(
      "accounts.getUserById",
      this.$route.params.id
    );
    //console.log(user);
    this.username = user.username;
    this.address = user.profile.address;
    this.role = user.profile.role;
    this.phone = user.profile.phone;
    this.organizationId = user.profile.organizationId;
  },
  methods: {
    hide() {
      this.$router.go(-1);
    },
    handleSubmit(event) {
      Meteor.call("accounts.update", this.$route.params.id, {
        username: this.username,
        password: this.password,
        profile: {
          role: this.role,
          address: this.address,
          phone: this.phone,
          organizationId: this.organizationId,
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
#role {
  width: 230px;
}
</style>
