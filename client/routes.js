import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import OrganizationsTab from "../imports/ui/components/OrganizationsTab.vue";
import ContactsTab from "../imports/ui/components/ContactsTab.vue";
import TagsTab from "../imports/ui/components/TagsTab.vue";

const routes = [
  {
    path: "/organizations",
    name: "Organizations",
    component: OrganizationsTab,
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
  },
];

const router = new VueRouter({
  routes,
});

export default router;
