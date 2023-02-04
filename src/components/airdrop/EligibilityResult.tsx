import { Decimal } from "@cosmjs/math";
import React, { CSSProperties } from "react";

import { AirdropTextBox } from "./elements";

export const EligibilityResult: React.FC<{
  eligible: boolean;
  address: string;
  amount: string;
  showAddress?: boolean;
  loading: boolean;
  style?: CSSProperties;
}> = ({ eligible, address, amount, showAddress, loading, style }) => {
  if (loading) {
    return null;
  }

  const content = eligible ? (
    <>
      <p
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: 20,
          fontWeight: "400",
          fontSize: "13.2632px",
          lineHeight: "16px",
        }}
      >
        is eligible for a total of
      </p>
      <AirdropTextBox
        label={`${Decimal.fromAtomics(amount, 6).toString()} TORI tokens`}
        textStyle={{
          background:
            "linear-gradient(90deg, #5433FF 0%, #20BDFF 50%, #A5FECB 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          width: "100%",
          textAlign: "center",
        }}
      />
    </>
  ) : (
    <p
      style={{
        color: "white",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "13.2632px",
        lineHeight: "16px",
      }}
    >
      is not eligible
    </p>
  );

  return (
    <div style={{ width: "100%", ...style }}>
      {showAddress && (
        <>
          <p
            style={{
              textAlign: "center",
              fontWeight: "400",
              margin: "20px 0",
              fontSize: "13.2632px",
              lineHeight: "16px",
              background:
                "linear-gradient(90deg, #5433FF 0%, #20BDFF 50%, #A5FECB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {address}
          </p>
        </>
      )}
      {content}
    </div>
  );
};
