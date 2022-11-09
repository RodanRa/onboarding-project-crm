import { Meteor } from "meteor/meteor";
import { OrganizationsCollection } from "../db/OrganizationsCollection.js";

Meteor.publish("organizations", function publishOrganizations() {
  return OrganizationsCollection.find({});
});
