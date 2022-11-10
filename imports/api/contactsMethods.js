import { ContactsCollection } from "../db/ContactsCollection.js";

Meteor.methods({
  "contacts.insert"(contactDetails) {
    ContactsCollection.insert({
      ...contactDetails,
      createdAt: new Date(),
    });
  },
  "contacts.remove"(organizationId) {
    // const organization = OrganizationsCollection.findOne({
    //   _id: organizationId,
    // });
    // OrganizationsCollection.remove(organizationId);
  },
  "contacts.update"(organizationId, newOrganizationDetails) {
    //OrganizationsCollection.update(organizationId, newOrganizationDetails);
  },
});
