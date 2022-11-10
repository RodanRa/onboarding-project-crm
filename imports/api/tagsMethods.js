import { TagsCollection } from "../db/TagsCollection.js";

Meteor.methods({
  "tags.insert"(tagsDetails) {
    TagsCollection.insert({
      ...tagsDetails,
      createdAt: new Date(),
    });
  },
  "tags.remove"(organizationId) {
    // const organization = OrganizationsCollection.findOne({
    //   _id: organizationId,
    // });
    // OrganizationsCollection.remove(organizationId);
  },
  "tags.update"(organizationId, newOrganizationDetails) {
    //OrganizationsCollection.update(organizationId, newOrganizationDetails);
  },
});
