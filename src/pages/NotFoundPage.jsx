import React from "react";
import { Result as ANTResult } from "antd";

const NotFoundPage = () => (
  <ANTResult
    status="404"
    title="404"
    subTitle="Sorry, the page doesn't exist."
    style={{ padding: 0 }}
  />
);

export default NotFoundPage;
