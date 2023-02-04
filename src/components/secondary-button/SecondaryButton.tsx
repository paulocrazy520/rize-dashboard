import React from "react";

import TertiaryBox from "../boxes/TertiaryBox";

import "./SecondaryButtonStyled.css";

interface SecondaryButtonProps {
  onClick?: () => void;
  children: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <TertiaryBox
      mainContainerStyle={{
        flexDirection: "row",
      }}
      borderColor="#fff"
    >
      <div onClick={onClick} className="secondary-button-container">
        {children}
      </div>
    </TertiaryBox>
  );
};

export default SecondaryButton;
