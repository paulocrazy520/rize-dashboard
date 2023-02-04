import React from "react";

import TertiaryBox from "../../boxes/TertiaryBox";
import RoadmapPopup from "../../roadmap-popup/RoadmapPopup";

import "./RoadmapCardStyled.css";

const RoadmapCard: React.FC<{
  title: string;
  describtion: string;
  source: string;
}> = ({ source, title, describtion }) => {
  return (
    <RoadmapPopup
      heading={title}
      description={describtion}
      imageSource={source}
    >
      {(isOpen) => (
        <div className="card_component">
          <TertiaryBox
            mainContainerStyle={{
              padding: "2.5rem",
            }}
            gradientType={isOpen ? "primary" : "none"}
          >
            <img src={`/roadmap/${source}.svg`} className="roadmap_image" />
          </TertiaryBox>
          <p className="right_column_card_title">{title}</p>
          <p className="right_column_card_subtitle"> {describtion}</p>
        </div>
      )}
    </RoadmapPopup>
  );
};

export default RoadmapCard;
