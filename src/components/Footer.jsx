import React from "react";
import { Layout as ANTLayout } from "antd";

const { Footer: ANTFooter } = ANTLayout;

const Footer = () => (
  <ANTFooter
    style={{
      textAlign: "center",
      padding: "10px 50px",
      backgroundColor: "white",
    }}
  >
    <span>Testing task for Charge4Go. Ⓒ Sviatoslav Fomin, 2022</span>
  </ANTFooter>
);

export default Footer;
