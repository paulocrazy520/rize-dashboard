import React, { CSSProperties } from "react";

const TertiaryBox: React.FC<{
  borderColor?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  mainContainerStyle?: CSSProperties;
  squaresBackgroundColor?: string;
  onClick?: () => void;
  gradientType?: "none" | "primary";
}> = ({
  borderColor = "#333333",
  style,
  mainContainerStyle,
  children,
  squaresBackgroundColor = "#000000",
  onClick,
  gradientType,
}) => {
  return (
    <div
      onClick={onClick}
      style={Object.assign(
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        },
        style
      )}
    >
      {/* ---- Content container */}
      <div
        style={Object.assign(
          {
            border: `1px solid ${borderColor}`,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000000",
            width: "fit-content",
            height: "fit-content",
            position: "relative",
            zIndex: "1",
          },
          mainContainerStyle
        )}
      >
        {/* ===== Content */}
        {children}

        {/* ---- Top left corner*/}
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            borderRight: `1px solid ${borderColor}`,
            backgroundColor: squaresBackgroundColor,
            width: 20,
            height: 20,
            left: -10,
            top: -10,
            transform: "rotate(45deg)",
          }}
        />

        {/* ---- Bottom right corner*/}
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            borderRight: `1px solid ${borderColor}`,
            backgroundColor: squaresBackgroundColor,
            width: 20,
            height: 20,
            right: -10,
            bottom: -10,
            transform: "rotate(225deg)",
          }}
        />

        {gradientType === "primary" && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,

              /* Linear-Lines&Boxes */
              borderRadius: 8,

              background:
                "linear-gradient(105.66deg, #01B7C5 -0.8%, #782C96 104.84%)",
              mixBlendMode: "color-dodge",
              filter: "blur(2px)",
              zIndex: 1000,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TertiaryBox;
