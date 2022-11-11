import Vue from "vue";
import VueRouter from "vue-router";
import { Meteor } from "meteor/meteor";

Vue.use(VueRouter);
import OrganizationsTab from "../imports/ui/components/OrganizationsTab.vue";
import ContactsTab from "../imports/ui/components/ContactsTab.vue";
import TagsTab from "../imports/ui/components/TagsTab.vue";
import WelcomeTab from "../imports/ui/components/WelcomeTab.vue";
import TagsView from "../imports/ui/components/TagsView.vue";
import TagsListView from "../imports/ui/components/TagsListView.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomeTab,
  },
  {
    path: "/organizations",
    name: "Organizations",
    component: OrganizationsTab,
    beforeEnter: (to, from, next) => {
      if (
        Meteor.user().profile.role === "Admin" ||
        Meteor.user().profile.role === "keelaAdmin"
      ) {
        next();
      }
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsTab,
  },
  {
    path: "/tags",
    name: "Tags",
    component: TagsTab,
    children: [
      { path: "", name: "TagsListView", component: TagsListView },
      { path: ":id", name: "TagsView", component: TagsView },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
