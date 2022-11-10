import { Accounts } from "meteor/accounts-base";
Meteor.methods({
  "accounts.insert"(accountDetails) {
    if (!Accounts.findUserByUsername(accountDetails.username)) {
      Accounts.createUser(accountDetails);
    }
  },
  "accounts.remove"(userId) {},
  "accounts.update"(userId, newAccountDetails) {},
});
