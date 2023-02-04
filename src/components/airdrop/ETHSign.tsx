import "./Airdrop.css";

import React, { CSSProperties, useEffect, useState } from "react";

import { metaMaskHooks } from "../../web3Connectors/eth/metaMask";
import { SignMsg } from "../../web3Connectors/keplr/account";
import { AirdropClaimButton } from "./elements";

const getSignString = (signMsg: SignMsg): string => {
  return JSON.stringify(signMsg);
};

const ETHSign: React.FC<{
  address: string;
  rewardAddress: string;
  setEvmSignature: (evmSignature: string) => void;
  evmSignature: string;
  style?: CSSProperties;
}> = ({ address, rewardAddress, setEvmSignature, evmSignature, style }) => {
  const [isSigning, setIsSigning] = useState(false);
  const { useProvider } = metaMaskHooks;
  const metamaskProvider = useProvider();
  const chain = "evm";

  const signETH = async () => {
    if (!rewardAddress) {
      return;
    }
    setIsSigning(true);
    let signature;
    try {
      const signMsg = {
        chain,
        address,
        rewardAddr: rewardAddress,
      };
      signature = await metamaskProvider
        ?.getSigner()
        .signMessage(getSignString(signMsg));
    } catch {}
    if (signature) {
      setEvmSignature(signature);
    }
    setIsSigning(false);
  };

  useEffect(() => {
    // Reset when disconnect Metamask or Keplr
    if (!address) {
      setEvmSignature("");
      setIsSigning(false);
    }
  }, [address]);

  if (!address) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        minHeight: "35px",
        ...style,
      }}
    >
      {isSigning ? (
        <p
          style={{
            fontWeight: 600,
            fontSize: 16,
            textAlign: "center",
            color: "#777777",
          }}
        >
          Signing...
        </p>
      ) : (
        <>
          <p
            style={{
              color: "#777777",
              textAlign: "center",
              fontWeight: "400",
              fontSize: "13.2632px",
              lineHeight: "16px",
              whiteSpace: "pre-line",
            }}
          >
            You need to prove that you own{"\n"}this Evmos address by signing a
            message
          </p>
          <AirdropClaimButton
            label="SIGN"
            onClick={() => signETH()}
            style={{ marginTop: 20 }}
          />
        </>
      )}
    </div>
  );
};

export default ETHSign;
