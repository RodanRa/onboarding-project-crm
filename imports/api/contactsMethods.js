import { ContactsCollection } from "../db/ContactsCollection.js";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "contacts.insert"(contactDetails) {
    if (Meteor.user().profile.role === "Admin") {
      ContactsCollection.insert({
        ...contactDetails,
        createdAt: new Date(),
      });
    } else {
      Meteor.Error("Not Authorized");
    }
  },
  "contacts.addTags"(tagName, username) {
    ContactsCollection.update({ username }, { $addToSet: { tags: tagName } });
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
