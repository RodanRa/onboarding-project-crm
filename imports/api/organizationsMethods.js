import { check } from "meteor/check";
import { OrganizationsCollection } from "../db/OrganizationsCollection.js";

Meteor.methods({
  "organizations.insert"(organizationDetails) {
    OrganizationsCollection.insert({
      ...organizationDetails,
      createdAt: new Date(),
    });
  },
  "organizations.remove"(organizationId) {
    check(organizationId, String);
    const organization = OrganizationsCollection.findOne({
      _id: organizationId,
    });
    OrganizationsCollection.remove(organizationId);
  },
  "organizations.update"(organizationId, newOrganizationDetails) {
    check(organizationId, String);
    OrganizationsCollection.update(organizationId, newOrganizationDetails);
  },
});
