import { Meteor } from "meteor/meteor";
import "/imports/api/organizationsMethods";
import "/imports/api/organizationsPublications";
import "/imports/api/accountsMethods";
import "/imports/api/usersPublications";
import "/imports/api/contactsPublications";
import "/imports/api/contactsMethods";
import "/imports/api/tagsPublications";
import "/imports/api/tagsMethods";
import { OrganizationsCollection } from "/imports/db/OrganizationsCollection";
import { TagsCollection } from "/imports/db/TagsCollection";
import { Accounts } from "meteor/accounts-base";

const SEED_USERNAME = "keela";
const SEED_PASSWORD = "abcd";

Meteor.startup(() => {
  //code when the server starts
  OrganizationsCollection.createIndex({ name: 1 }, { unique: true }); // making name of organization unique
  TagsCollection.createIndex(
    { tagname: 1, organizationId: 1 },
    { unique: true } // making unique composite key for tagname and organization id as unique tag values are maintained inside the organization only
  );
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
      profile: {
        role: "keelaAdmin",
        address: "ktm",
        phone: "1234567890",
      },
    });
  }
  //console.log(Meteor.users.find().fetch());
});
