import { TagsCollection } from "../db/TagsCollection.js";

Meteor.methods({
  "tags.insert"(tagsDetails) {
    TagsCollection.insert({
      ...tagsDetails,
      createdAt: new Date(),
    });
  },
  "tags.remove"(tagId) {
    const tag = TagsCollection.findOne({
      _id: tagId,
    });
    if (!tag) {
      Meteor.Error("Tag doesn't exist");
    }
    TagsCollection.remove(tagId);
  },
  "tags.update"(tagId, newTagDetails) {
    TagsCollection.update(tagId, newTagDetails);
  },
});
