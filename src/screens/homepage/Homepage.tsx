import React, { useState } from "react";
import "./HomeStyled.css";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const ButtonElem: React.FC<{
  title: string;
  link: string;
  noBlank?: true;
  comingSoon?: true;
}> = ({ title, link, noBlank, comingSoon }) => {
  const [content, setContent] = useState(title);
  const props = {
    onMouseEnter: comingSoon ? () => setContent("Coming soon") : undefined,
    onMouseLeave: comingSoon ? () => setContent(title) : undefined,
    className: "ButtonElem",
    target: noBlank ? undefined : "_blank",
    rel: "noreferrer",
  };
  if (link.startsWith("http")) {
    return (
      <a href={link} {...props}>
        {content}
      </a>
    );
  }
  return (
    <Link to={link} {...props}>
      {content}
    </Link>
  );
};
const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* <Navbar /> */}
      <div className="all_home">
        <img src="logo.svg" alt="Logo" className="Logo" />
        <div className="center_elem">
          <h1 className="Title text_gradient">TERITORI</h1>
        </div>
        <div className="center_elem">
          <span className="sub_title text_gradient">FUTURE OF COMMUNITIES</span>
          :
        </div>
        <div className="center_elem">
          <span className="text_gradient">Let's build together.</span>
        </div>
        <div className="main_buttons main-button-margin">
          <ButtonElem title="Airdrop" link="/airdrop" noBlank />
          <ButtonElem
            title="Incentives"
            link={process.env.REACT_APP_TERITORI_INCENTIVES_URL || ""}
          />
        </div>
        <div className="main_buttons" style={{ marginTop: 0 }}>
          <ButtonElem
            title="Stake"
            link={process.env.REACT_APP_TERITORI_STAKING_URL || ""}
          />
          <ButtonElem
            title="Vote"
            link={process.env.REACT_APP_TERITORI_GOV_URL || ""}
          />
          <ButtonElem
            title="Provide Liquidity"
            link={process.env.REACT_APP_TERITORI_POOL_URL || ""}
          />
        </div>
      </div>
      {/* <Footer transparent /> */}
    </div>
  );
};

export default Home;
