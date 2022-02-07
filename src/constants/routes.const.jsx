import { AddCampaign, Campaign, Vouchers, NotFoundPage } from "pages";

export default {
  campaigns: {
    path: "/campaigns",
    label: "Campaigns",
    key: "campaigns",
  },
  addCampaign: {
    path: "/addCampaign",
    page: AddCampaign,
    label: "Add campaign",
    key: "/addCampaign",
  },
  campaign: {
    path: (id) => `/campaigns/${id}`,
    page: Campaign,
    label: (name) => `${name}`,
    key: (key) => `/campaigns/${key}`,
  },
  vouchers: {
    path: "/vouchers",
    page: Vouchers,
    label: "Vouchers",
    key: "/vouchers",
  },
  notFound: {
    path: "*",
    page: NotFoundPage,
    key: "notFound",
  },
};
