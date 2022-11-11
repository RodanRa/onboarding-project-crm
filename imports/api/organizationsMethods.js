import { check } from "meteor/check";
import { OrganizationsCollection } from "../db/OrganizationsCollection.js";
import { Meteor } from "meteor/meteor";

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
    if (!organization) {
      Meteor.Error("Organization doesn't exist");
    }
    OrganizationsCollection.remove(organizationId);
  },
  "organizations.update"(organizationId, newOrganizationDetails) {
    check(organizationId, String);
    OrganizationsCollection.update(organizationId, newOrganizationDetails);
  },
});
