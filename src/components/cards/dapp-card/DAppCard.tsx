import React from "react";
import "./DAppCardStyled.css";

const DAppCard: React.FC<{
  label: string;
  description: string;
  info: string;
  iconSVG: string;
}> = ({ label, description, info, iconSVG }) => {
  return (
    <div className="dapp_card">
      <img
        className="dapp_card_pattern__img"
        src="/dapp-card-pattern.svg"
        alt="Card image"
      />
      <div className="dapp_card__main_container">
        <img className="dapp_card__icon_card" src={iconSVG} alt="Card icon" />
        <div className="dapp_card__texts_container">
          <div className="dapp_card__label">{label}</div>
          <div className="dapp_card__description">{description}</div>
          <div className="dapp_card__info">{info}</div>
        </div>
      </div>
    </div>
  );
};

export default DAppCard;
