import { TagsCollection } from "../db/TagsCollection.js";
import { ContactsCollection } from "../db/ContactsCollection.js";
Meteor.methods({
  "tags.insert"(tagsDetails) {
    TagsCollection.insert({
      ...tagsDetails,
      createdAt: new Date(),
    });
  },
  "tags.remove"({ tagId, tagName }) {
    const tag = TagsCollection.findOne({
      _id: tagId,
    });
    if (!tag) {
      Meteor.Error("Tag doesn't exist");
    }
    ContactsCollection.update(
      { tags: { $elemMatch: { $eq: tagName } } },
      { $pull: { tags: tagName } },
      { multi: true }
    );
    TagsCollection.remove(tagId);
  },
  "tags.update"(tagId, newTagDetails) {
    TagsCollection.update(tagId, newTagDetails);
  },
});
