import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
Meteor.methods({
  "accounts.insert"(accountDetails) {
    if (!Accounts.findUserByUsername(accountDetails.username)) {
      Accounts.createUser(accountDetails);
    }
  },
  "accounts.remove"(userId) {
    // preventing removal of users with role of keelaAdmin
    Meteor.users.remove({ _id: userId, "profile.role": { $ne: "keelaAdmin" } });
  },
  "accounts.update"(userId, newAccountDetails) {},
});
