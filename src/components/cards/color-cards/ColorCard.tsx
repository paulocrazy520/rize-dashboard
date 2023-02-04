import React, { CSSProperties } from "react";

import "./ColorCardStyled.css";

const ColorCard: React.FC<{
  title: string;
  describtion: string;
  style: CSSProperties | undefined;
}> = ({ style, title, describtion }) => {
  return (
    <div className="card_component">
      <div className="color_card" style={style} />
      <p className="right_column_card_title">{title}</p>
      <p className="right_column_card_subtitle"> {describtion}</p>
    </div>
  );
};

export default ColorCard;
