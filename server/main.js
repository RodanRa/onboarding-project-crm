import { Meteor } from "meteor/meteor";
import "/imports/api/organizationsMethods";
import "/imports/api/organizationsPublications";
import { OrganizationsCollection } from "/imports/db/OrganizationsCollection";

Meteor.startup(() => {
  //code when the server starts
  OrganizationsCollection.createIndex({ name: 1 }, { unique: true }); // making name of organization unique
});
