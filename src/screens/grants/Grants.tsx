import React from "react";
import "./GrantStyled.css";

import CardGrant from "../../components/cards/card-grants/CardGrants";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { cardsGrantsData } from "../../utils/Data/data";

const Grants: React.FC = () => {
  return (
    <div className="grant">
      <Navbar />
      <div className="title_background_block_grant">
        <div className="block_text">
          <img src="logo.svg" alt="Logo" className="white_logo" />
          <h1 className="title_white"> Teritori </h1>
          <h2 className="second_title">Community Contributors Microgrants</h2>
        </div>
      </div>
      <section>
        <div className="galerie">
          <div className="all_container">
            {cardsGrantsData.map((card, index) => {
              return (
                <CardGrant
                  title={card.title}
                  key={index}
                  list={card.list}
                  icon={card.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Grants;
