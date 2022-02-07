// ALL COMMENTED CODE WILL WORK WHEN BE SIDE WILL BE COMPLETED
import { downloadFile } from "helpers/files.helper";

import API from "utils/api.util";
import NOTIFICATION from "utils/notification.util";

const MS1 = "microservice1";
const MS2 = "microservice2";
const MS3 = "microservice3";

// test-data
const voucher = {
  id: "124nkbjhbbvkdj34",
  campaignName: "Recharge",
  code: "RECHARGE-sfWnGE", // campaignName-postfix RECHARGE-XXXXXX
  dateFrom: "2022-01-01",
  dateTo: "2022-03-01",
  amount: 3123,
  currency: "$",
  isEnabled: true,
};

// test-data
const vouchers = [voucher, voucher, voucher, voucher, voucher, voucher];

// test-data
const vouchersData = {
  items: vouchers,
  meta: { pageSize: 20, page: 0, itemsCount: 6 },
};

// test-data
const campaigns = {
  items: [
    { id: "1", name: "campaign1" },
    { id: "22", name: "campaign2" },
    { id: "333", name: "campaign3" },
    { id: "4444", name: "campaign4" },
  ],
};

const getVouchers = async ({ page, sortBy, direction }) => {
  return vouchersData;

  // const pageQueryParams = `?page=${page}`;
  // let sortQueryParams;
  // const directionShort = direction === "descend" ? "desc" : "asc";

  // if (sortBy) {
  //   sortQueryParams = `&sort=${sortBy},${directionShort}`;
  // } else {
  //   sortQueryParams = "";
  // }

  // sortQueryParams = direction ? sortQueryParams : "";

  // let filterQueryParams = "";

  // let response;
  // try {
  //   response = await API.getRaw("/vouchers", MS1);
  //   if (response.status !== 200) {
  //     throw new Error("Vouchers are not downloaded");
  //   } else {
  //     return await response.json();
  //   }
  // } catch (err) {
  //   NOTIFICATION.error("Vouchers are not downloaded");
  // }
};

const getVouchersByCampaignId = async (id, { page, sortBy, direction }) => {
  return vouchersData;

  // const pageQueryParams = `?page=${page}`;
  // let sortQueryParams;
  // const directionShort = direction === "descend" ? "desc" : "asc";

  // if (sortBy) {
  //   sortQueryParams = `&sort=${sortBy},${directionShort}`;
  // } else {
  //   sortQueryParams = "";
  // }

  // sortQueryParams = direction ? sortQueryParams : "";

  // let filterQueryParams = "";

  // let response;
  // try {
  //   response = await API.getRaw(`/campaigns/${id}/vouchers`, MS1);
  //   if (response.status !== 200) {
  //     throw new Error("Vouchers are not downloaded");
  //   } else {
  //     return await response.json();
  //   }
  // } catch (err) {
  //   NOTIFICATION.error("Vouchers are not downloaded");
  // }
};

const getCampaigns = async () => {
  return campaigns;

  // let response;
  // try {
  //   response = await API.getRaw(`/campaigns`, MS2);
  //   if (response.status !== 200) {
  //     throw new Error("Campaigns are not downloaded");
  //   } else {
  //     return await response.json();
  //   }
  // } catch (err) {
  //   NOTIFICATION.error("Campaigns are not downloaded");
  // }
};

const postNewCampaign = async (data) => {
  return { id: Math.random() };

  // let response;
  // try {
  //   response = await API.post("/campaigns/add", MS2, data)
  //   if (response.status !== 200) {
  //     throw new Error("Campaign is not created");
  //   } else {
  //     return await response.json();
  //   }
  // } catch (err) {
  //   NOTIFICATION.error("Campaign is not created");
  // }
};

export default {
  getVouchers,
  getVouchersByCampaignId,
  getCampaigns,
  postNewCampaign,
};
