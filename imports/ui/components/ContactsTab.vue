<template>
  <div class="contacts-tab">
    <h1>Contacts Tab</h1>
    <h3>Contacts List</h3>
    <ul>
      <li v-for="contact in contacts" v-bind:key="contact._id">
        {{ contact.username
        }}<button
          v-if="currentUser.profile.role == 'Admin'"
          @click="deleteContact(contact._id)"
        >
          ❌
        </button>
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
  methods: {
    deleteContact(contactId) {
      Meteor.call("contacts.remove", contactId);
    },
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
