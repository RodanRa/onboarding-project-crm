import { TagsCollection } from "../db/TagsCollection.js";
import { ContactsCollection } from "../db/ContactsCollection.js";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "tags.insert"(tagsDetails) {
    TagsCollection.insert({
      ...tagsDetails,
      createdAt: new Date(),
    });
  },
  "tags.remove"({ tagId, tagName }) {
    const user = Meteor.user();
    if (user.profile.role !== "Admin" && user.profile.role !== "coordinator") {
      return Meteor.Error("Operation Not Authorized");
    }
    const tag = TagsCollection.findOne({
      _id: tagId,
    });
    if (!tag) {
      Meteor.Error("Tag doesn't exist");
    }
    ContactsCollection.update(
      {
        tags: { $elemMatch: { $eq: tagName } },
        organizationId: user.profile.organizationId,
      },
      { $pull: { tags: tagName } },
      { multi: true }
    );
    TagsCollection.remove(tagId);
  },
  "tags.update"(tagId, newTagDetails) {
    TagsCollection.update(tagId, newTagDetails);
  },
});
