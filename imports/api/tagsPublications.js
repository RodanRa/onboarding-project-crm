import { Meteor } from "meteor/meteor";
import { TagsCollection } from "../db/TagsCollection.js";

Meteor.publish("tags", function publishTags() {
  return TagsCollection.find({});
});
