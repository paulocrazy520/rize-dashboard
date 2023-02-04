import "./Airdrop.css";

import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useKeplr } from "../../context/KeplrProvider";
import { SignResult } from "../../web3Connectors/keplr/account";
import { AirdropClaimButton } from "./elements";

export const ClaimAirdrop: React.FC<{
  address: string;
  signResult: SignResult;
  style?: CSSProperties;
}> = ({ address, signResult, style }) => {
  const navigate = useNavigate();

  const [tx, setTx] = useState<any>();
  const [isClaiming, setIsClaiming] = useState(false);
  const { keplrAccount } = useKeplr();

  const labelStyle = {
    color: "#777777",
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 4,
    marginTop: 6,
  };
  const valueStyle = { color: "#FFFFFF", fontWeight: 600, fontSize: 16 };
  const loaderStyle = {
    fontWeight: 600,
    fontSize: 16,
    alignSelf: "center",
    color: "#777777",
  };

  const sendAirdropClaimMsg = useCallback(async () => {
    if (!keplrAccount) return;
    setIsClaiming(true);
    setTx(undefined);
    try {
      await keplrAccount.teritori.sendClaimAllocationMsg(
        signResult,
        "claim_allocation",
        (tx) => {
          setTx(tx);
          // TODO: TX not finished, but we reach this code wtf
          setIsClaiming(false);
          navigate("/airdrop/claimed");
        }
      );
    } catch (e) {
      console.log(e);
      setIsClaiming(false);
    }
  }, [keplrAccount, navigate, signResult]);

  useEffect(() => {
    // Reset when disconnect Keplr
    if (!address) {
      setTx(undefined);
      setIsClaiming(false);
    }
  }, [address]);

  return (
    <div
      style={Object.assign(
        { display: "flex", flexDirection: "column", width: "100%" },
        style
      )}
    >
      {isClaiming ? (
        <div
          style={{
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="airdrop_inline_text" style={loaderStyle}>
            Claiming...
          </p>
        </div>
      ) : tx && tx.data ? (
        <>
          <span className="airdrop_inline_text" style={labelStyle}>
            Transaction hash
          </span>
          <span className="airdrop_inline_text" style={valueStyle}>
            {tx.hash}
          </span>
        </>
      ) : tx && tx.log.code !== 0 ? (
        <>
          <AirdropClaimButton
            label="CLAIM NOW"
            onClick={sendAirdropClaimMsg}
            style={{ marginBottom: "20px" }}
          />
          <span className="airdrop_inline_text" style={labelStyle}>
            Error
          </span>
          <span
            className="airdrop_inline_text"
            style={{
              ...valueStyle,
              color: "red",
              fontSize: "13.2632px",
              lineHeight: "16px",
            }}
          >
            {tx.log}
          </span>
        </>
      ) : (
        <AirdropClaimButton label="CLAIM NOW" onClick={sendAirdropClaimMsg} />
      )}
    </div>
  );
};
