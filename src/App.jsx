import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { Layout as ANTLayout, Spin as ANTSpin } from "antd";
import "antd/dist/antd.css";

import API from "api";
import Header from "components/Header";
import Footer from "components/Footer";
import Menu from "components/Menu";
import routes from "constants/routes.const";

import "./styles.css";
import styles from "./styles.module.css";

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaignId, setNewCampaignId] = useState("");

  async function fetchCampaigns(sortQueryParams, filterQueryParams) {
    setIsFetching(true);
    let data;

    try {
      data = await API.getCampaigns(sortQueryParams, filterQueryParams);

      setCampaigns(data.items);
    } catch (err) {}

    setIsFetching(false);
  }

  useEffect(() => {
    fetchCampaigns();
  }, [newCampaignId]);

  async function createCampaign(data) {
    return await API.postNewCampaign(data);
  }

  const onCreateCampaign = async (dataToCreateCampaign) => {
    setIsFetching(true);
    const res = await createCampaign(dataToCreateCampaign);
    setNewCampaignId(res.id);
    setIsFetching(false);
  };

  return (
    <BrowserRouter>
      {isFetching ? (
        <ANTSpin className={styles.spinner} tip="Loading..." />
      ) : (
        <ANTLayout className={styles.layout}>
          <Header />

          <ANTLayout>
            <Menu campaigns={campaigns} />

            <ANTLayout.Content className={styles.content}>
              <Switch>
                <Route exact path="/">
                  <Redirect to={routes.vouchers.path} />
                </Route>
                <Route
                  exact
                  path={routes.campaign.path(":id")}
                  render={(props) => <routes.campaign.page {...props} />}
                />
                <Route
                  exact
                  path={routes.addCampaign.path}
                  render={(props) => (
                    <routes.addCampaign.page
                      onCreateCampaign={onCreateCampaign}
                      {...props}
                    />
                  )}
                />
                <Route
                  exact
                  path={routes.vouchers.path}
                  render={(props) => <routes.vouchers.page {...props} />}
                />
                <Route
                  path={routes.notFound.path}
                  component={(props) => <routes.notFound.page {...props} />}
                />
              </Switch>
            </ANTLayout.Content>
          </ANTLayout>

          <Footer />
        </ANTLayout>
      )}
    </BrowserRouter>
  );
}

export default App;
