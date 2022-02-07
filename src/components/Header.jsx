import React from "react";
import { Layout as ANTLayout } from "antd";
// import "./header.css";

const { Header: ANTHeader } = ANTLayout;

const Header = () => {
  return (
    <ANTHeader className="header">
      <div className="logo" />
    </ANTHeader>
  );
};

export default Header;
