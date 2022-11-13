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
  "contacts.remove"(contactId) {
    const user = Meteor.user();
    if (user.profile.role !== "Admin") {
      return Meteor.Error("Operation Not Authorized");
    }
    const contact = ContactsCollection.findOne({
      _id: contactId,
      organizationId: user.profile.organizationId,
    });
    if (!contact) {
      Meteor.Error("Contact doesn't exist");
    }
    ContactsCollection.remove(contactId);
  },
  "contacts.update"(contactId, newContactDetails) {
    const user = Meteor.user();
    if (user.profile.role !== "Admin") {
      return Meteor.Error("Operation Not Authorized");
    }
    ContactsCollection.update(contactId, newContactDetails);
  },
});
