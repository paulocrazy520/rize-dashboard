import "./NavbarStyled.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import SubMenu from "../submenu/Submenu";

const EnterTheDApp: React.FC = () => {
  return (
    <div
      className="Enter_TextGradient"
      onClick={() => window.open("https://app.teritori.com/", "_blank")}
    >
      ENTER THE DAPP
    </div>
  );
};

const Navbar: React.FC = () => {
  const [active, setActive] = useState("");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "") {
      setActive("nav__active");
    } else setActive("");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        <img src="/logo_header.svg" alt="logo" />
      </Link>
      <div className={`nav__menu_slider ${active}`}>
        <div onClick={navToggle} className={`nav__toggler_opened ${icon}`}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
        <ul className="nav__menu">
          <li className="nav__item">
            <a
              href={process.env.REACT_APP_TERITORI_EXPLORER_URL}
              target="_blank"
              className="nav__link"
            >
              Explorer
            </a>
          </li>
          <li className="nav__item">
            <Link to="/roadmap" className="nav__link">
              Roadmap
            </Link>
          </li>
          <SubMenu
            label="Commmunity"
            items={[
              { link: "/grants", label: "Grants" },
              { link: "/design", label: "Design" },
            ]}
          />
          <li className="nav__item">
            <a
              href="https://teritori.gitbook.io/"
              target="_blank"
              className="nav__link"
            >
              Docs
            </a>
          </li>
          <li className="nav__item">
            <a
              href="https://www.notion.so/Teritori-Jobs-433344d8cadc41e3a16175788785c668"
              target="_blank"
              className="nav__link"
            >
              Hiring
            </a>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="nav__link">
              Blog
            </Link>
          </li>
          <SubMenu
            label="Airdrop"
            labelClassName="nav_item_gradient"
            items={[
              {
                link: "/airdrop",
                label: "Claim",
              },
              {
                link: process.env.REACT_APP_TERITORI_STAKING_URL || "",
                external: true,
                label: "Stake",
              },
              {
                link: process.env.REACT_APP_TERITORI_GOV_URL || "",
                external: true,
                label: "Vote",
              },
              {
                link: process.env.REACT_APP_TERITORI_POOL_URL || "",
                external: true,
                label: "Liquidity Pool",
              },
              {
                link: process.env.REACT_APP_TERITORI_INCENTIVES_URL || "",
                external: true,
                label: "Incentives",
              },
            ]}
          />
          <li className="nav__item">
            <a href="#" className="nav__link" id="enter_the_dap_burgermenu">
              <EnterTheDApp />
            </a>
          </li>
        </ul>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
};

export default Navbar;
