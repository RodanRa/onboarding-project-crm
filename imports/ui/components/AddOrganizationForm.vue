<template>
  <div class="controls">
    <button @click="show" class="addOrganization">Add Organization</button>
    <modal name="addOrganizationModal">
      <div class="addOrganizationModal">
        <form class="login-form" @submit.prevent="handleSubmit">
          <div class="input-field">
            <label for="organizationName">Organization Name</label>
            <input
              id="organizationName"
              name="organizationName"
              type="text"
              placeholder="Organization Name"
              required
              v-model="organizationName"
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
import { MeteorData } from "vue-meteor-tracker";

export default {
  name: "AddOrganizationForm",
  data() {
    return {
      organizationName: "",
      address: "",
      phone: "",
    };
  },
  methods: {
    show() {
      this.$modal.show("addOrganizationModal");
    },
    hide() {
      this.$modal.hide("addOrganizationModal");
    },
    handleSubmit(event) {
      Meteor.call("organizations.insert", {
        name: this.organizationName,
        address: this.address,
        phone: this.phone,
      });
      this.hide();
    },
  },
};
</script>

<style scoped>
.addOrganizationModal,
.input-field {
  padding: 10px;
}
button {
  margin: 10px;
}
</style>
