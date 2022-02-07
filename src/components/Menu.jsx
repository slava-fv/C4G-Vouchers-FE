import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout as ANTLayout, Menu as ANTMenu } from "antd";
import {
  GiftOutlined as ANTGiftOutlined,
  BarsOutlined as ANTBarsOutlined,
  PlusOutlined as ANTPlusOutlined,
} from "@ant-design/icons";
import routes from "constants/routes.const";

const { Sider: ANTSider } = ANTLayout;

const Menu = ({ campaigns = [] }) => {
  const isCampaigns = campaigns.length > 0;
  console.log("===>> ~ campaigns", campaigns);
  const location = useLocation();

  const selectedKey = useMemo(() => location.pathname, [location.pathname]);
  return (
    <ANTSider theme="light">
      <ANTMenu mode="vertical" selectedKeys={[selectedKey]}>
        {/* <NavLink to={routes.campaigns.path}> */}
        <ANTMenu.SubMenu
          key="sub1"
          icon={<ANTBarsOutlined />}
          title={isCampaigns ? routes.campaigns.label : "No campaigns yet"}
        >
          {isCampaigns &&
            campaigns.map((campaign) => (
              <ANTMenu.Item key={routes.campaign.key(campaign.id)}>
                <NavLink to={routes.campaign.path(campaign.id)}>
                  {routes.campaign.label(campaign.name)}
                </NavLink>
              </ANTMenu.Item>
            ))}
        </ANTMenu.SubMenu>
        {/* </NavLink> */}

        <ANTMenu.Item icon={<ANTGiftOutlined />} key={routes.vouchers.key}>
          <NavLink to={routes.vouchers.path}>{routes.vouchers.label}</NavLink>
        </ANTMenu.Item>

        <ANTMenu.Item icon={<ANTPlusOutlined />} key={routes.addCampaign.key}>
          <NavLink to={routes.addCampaign.path}>
            {routes.addCampaign.label}
          </NavLink>
        </ANTMenu.Item>
      </ANTMenu>
    </ANTSider>
  );
};

export default Menu;
