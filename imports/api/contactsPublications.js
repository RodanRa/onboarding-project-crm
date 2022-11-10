import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "../db/ContactsCollection.js";

Meteor.publish("contacts", function publishContacts() {
  return ContactsCollection.find({});
});
