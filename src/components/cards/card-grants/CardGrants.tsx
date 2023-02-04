import React from "react";

import "./CardGrantStyled.css";
import RegularButton from "../../buttons/regular/RegularButton";

const CardGrant: React.FC<{
  list: string[];
  icon: string;
  title: string;
}> = ({ list, icon, title }) => {
  return (
    <div className="container_card">
      <div className="card">
        <div className="box-shadow_container">
          <div className="container_title">
            <div className="card_title">
              <img className="card_title_icon" src={icon} alt="icon" />
              <p className="card_title_text"> {title} </p>
            </div>
          </div>
        </div>
        <div className="cardList">
          {list.map((list, index) => (
            <li key={index} className="listName">
              {list}
            </li>
          ))}
        </div>
        <RegularButton />
      </div>
    </div>
  );
};

export default CardGrant;
