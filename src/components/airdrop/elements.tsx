import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

import { PrimaryBox } from "../boxes/PrimaryBox";

export const AirdropButton: React.FC<{
  label: string;
  onClick?: () => void;
  link?: string;
  target?: string;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}> = ({ label, onClick, link, style, target, textStyle }) => {
  const content = (
    <PrimaryBox
      mainContainerStyle={{
        backgroundColor: "black",
        borderRadius: "5px",
        boxSizing: "border-box",
        boxShadow: "0px 11.0526px 22.1053px rgba(0, 0, 0, 0.5)",
      }}
      style={{ width: "100%", maxWidth: 528, height: "35px" }}
      roundCorners
    >
      <span
        style={{
          fontWeight: "400",
          fontSize: "13.2632px",
          lineHeight: "16px",
          ...(textStyle?.color
            ? undefined
            : {
                background:
                  "linear-gradient(90deg, #5433FF 0%, #20BDFF 50%, #A5FECB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }),
          ...textStyle,
        }}
      >
        {label}
      </span>
    </PrimaryBox>
  );

  if (link) {
    if (link.startsWith("http")) {
      return (
        <a href={link} target="_blank" style={{ width: "100%", ...style }}>
          {content}
        </a>
      );
    }
    return (
      <Link to={link} target={target} style={{ width: "100%", ...style }}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={{ width: "100%", ...style }}>
      {content}
    </button>
  );
};

export const AirdropClaimButton: React.FC<{
  label: string;
  onClick?: () => void;
  link?: string;
  fullWidth?: boolean;
  style?: CSSProperties;
}> = ({ label, onClick, link, style, fullWidth }) => (
  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <AirdropButton
      label={label}
      onClick={onClick}
      link={link}
      style={{ maxWidth: fullWidth ? undefined : "264px", ...style }}
      textStyle={{
        background: "linear-gradient(90deg, #2AF598 0%, #009EFD 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textAlign: "center",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "21px",
        letterSpacing: "-0.01em",
      }}
    />
  </div>
);

export const AirdropTextBox: React.FC<{
  label: string;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}> = ({ label, style, textStyle }) => {
  return (
    <PrimaryBox
      mainContainerStyle={{
        backgroundColor: "black",
        borderRadius: "5px",
        height: "35px",
        boxShadow: "0px 11.0526px 22.1053px rgba(0, 0, 0, 0.5)",
      }}
      style={{
        width: "100%",
        maxWidth: 528,
        marginBottom: style?.marginBottom,
      }}
      roundCorners
    >
      <span
        style={{
          fontWeight: "400",
          fontSize: "13.2632px",
          lineHeight: "16px",
          color: style?.color || "rgba(255, 255, 255, 0.3)",
          ...textStyle,
        }}
      >
        {label}
      </span>
    </PrimaryBox>
  );
};
