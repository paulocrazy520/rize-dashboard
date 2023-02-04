import "./Airdrop.css";

import { WalletStatus } from "@keplr-wallet/stores";
import React from "react";

import { useKeplr } from "../../context/KeplrProvider";
import { AirdropButton } from "./elements";

const KeplrConnect: React.FC = () => {
  const {
    keplrAccount,
    disconnectKeplrAccount,
    connectKeplrAccount,
    isKeplrLoading,
    isKeplrInstalled,
  } = useKeplr();

  if (isKeplrLoading) {
    return (
      <AirdropButton
        label="Checking for Keplr..."
        textStyle={{ color: "rgba(255, 255, 255, 0.3)" }}
      />
    );
  }

  if (!isKeplrInstalled) {
    return (
      <a
        href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap" // link to keplr chrome extension
        target="_blank"
        style={{ width: "100%" }}
      >
        <AirdropButton label="Get Keplr wallet" />
      </a>
    );
  }

  return (
    <>
      {keplrAccount?.walletStatus === WalletStatus.Loaded ? (
        <>
          <AirdropButton
            label="Disconnect Keplr"
            onClick={() => disconnectKeplrAccount()}
            textStyle={{ color: "rgba(255, 255, 255, 0.3)" }}
          />
        </>
      ) : (
        <AirdropButton
          label="Connect Keplr"
          onClick={() => connectKeplrAccount()}
        />
      )}
    </>
  );
};

export default KeplrConnect;
