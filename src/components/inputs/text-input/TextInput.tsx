import React, { CSSProperties } from "react";

import TertiaryBox from "../../boxes/TertiaryBox";

// A custom TextInput. You can add children (Ex: An icon or a small container)
const TextInput: React.FC<{
  label: string;
  value: string;
  placeHolder: string;
  squaresBackgroundColor?: string;
  style?: CSSProperties;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  regexp?: RegExp;
}> = ({
  label,
  value,
  placeHolder,
  style,
  fullWidth = false,
  regexp,
  onChange,
  squaresBackgroundColor,
}) => {
  // Replace the comma if number and controls
  const handleChange = (value: string) => {
    if (!onChange) {
      return;
    }
    // ---- Apply onChange respecting the regexp (Allow empty string)
    if ((regexp && (regexp.test(value) || value === "")) || !regexp) {
      onChange(value);
    }
  };

  return (
    <TertiaryBox
      squaresBackgroundColor={squaresBackgroundColor}
      style={Object.assign(
        {
          width: fullWidth ? "100%" : style?.width,
        },
        style
      )}
      mainContainerStyle={{
        width: fullWidth ? "100%" : style?.width,
        height: 48,
        justifyContent: "center",
        padding: "0 12px",
        backgroundColor: "#222222",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#777777",
            fontSize: 10,
            fontWeight: "500",
            fontFamily: "Exo",
          }}
        >
          {label}
        </div>
        <input
          placeholder={placeHolder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          // placeholderTextColor="#999999"
          style={Object.assign(
            {
              fontSize: 14,
              marginTop: 4,
              color: "#FFFFFF",
              fontFamily: "Exo",
              fontWeight: "600",
            },
            { outlineStyle: "none" } as any
          )}
        />
      </div>
    </TertiaryBox>
  );
};

export default TextInput;
