import React from "react";
import Popup from "reactjs-popup";

import TertiaryBox from "../boxes/TertiaryBox";
import "./RoadmapPopupStyled.css";

interface RoadmapPopupProps {
  heading: string;
  description: string;
  imageSource: string;
  children: JSX.Element | ((isOpen: boolean) => JSX.Element);
}

const RoadmapPopup = ({
  heading,
  description,
  imageSource,
  children,
}: RoadmapPopupProps) => {
  return (
    <Popup
      trigger={children}
      on={["hover", "click"]}
      closeOnDocumentClick
      position={[
        "top center",
        "top left",
        "top right",
        "right center",
        "left center",
        "bottom center",
        "bottom left",
        "bottom right",
      ]}
    >
      <div className="roadmap_popup">
        <div className="roadmap_popup_header">
          <h3 className="roadmap_popup_heading">{heading}</h3>
          <h3 className="roadmap_popup_description">{description}</h3>
        </div>
        <TertiaryBox>
          <img
            src={`/roadmap/screenshot/${imageSource}.png`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/roadmap/screenshot/not-available.png";
            }}
            alt=""
            className="roadmap_popup_image"
          />
        </TertiaryBox>
      </div>
    </Popup>
  );
};

export default RoadmapPopup;
