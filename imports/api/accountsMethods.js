import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
Meteor.methods({
  "accounts.insert"(accountDetails) {
    if (!Accounts.findUserByUsername(accountDetails.username)) {
      Accounts.createUser(accountDetails);
    }
  },
  "accounts.remove"(userId) {
    Meteor.users.remove({ _id: userId });
  },
  "accounts.update"(userId, newAccountDetails) {},
});
