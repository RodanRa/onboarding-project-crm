<template>
  <div class="heading">
    <div class="tab-title">
      <h1>Organizations</h1>
    </div>
    <div class="content-body">
      <AddOrganizationForm />
      <ul class="organizations-list">
        <li v-for="organization in organizations" v-bind:key="organization._id">
          {{ organization.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import AddOrganizationForm from "./AddOrganizationForm.vue";
import { OrganizationsCollection } from "../../db/OrganizationsCollection";
export default {
  name: "OrganizationsTab",
  components: {
    AddOrganizationForm,
  },
  meteor: {
    $subscribe: {
      organizations: [],
    },
    organizations() {
      return OrganizationsCollection.find(
        {},
        { sort: { createdAt: -1 } }
      ).fetch();
    },
  },
};
</script>
<style scoped></style>
