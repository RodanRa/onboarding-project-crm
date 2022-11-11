<template>
  <div class="contacts-tab">
    <h1>Contacts Tab</h1>
    <h3>Contacts List</h3>
    <ul>
      <li v-for="contact in contacts" v-bind:key="contact._id">
        {{ contact.username }}
      </li>
    </ul>
    <AddContactsForm v-if="this.currentUser.profile.role === 'Admin'" />
  </div>
</template>
<script>
import { ContactsCollection } from "../../db/ContactsCollection";
import AddContactsForm from "./AddContactsForm.vue";
export default {
  name: "ContactsTab",
  components: {
    AddContactsForm,
  },
  meteor: {
    $subscribe: {
      contacts: [],
    },
    currentUser() {
      return Meteor.user();
    },
    contacts() {
      return ContactsCollection.find(
        { organizationId: this.currentUser.profile.organizationId },
        { sort: { createdAt: -1 } }
      ).fetch();
    },
  },
};
</script>
