import "./Airdrop.css";

import detectEthereumProvider from "@metamask/detect-provider";
import React, { useEffect, useState } from "react";

import { metaMask, metaMaskHooks } from "../../web3Connectors/eth/metaMask";
import { AirdropButton } from "./elements";

const { useIsActive } = metaMaskHooks;

const useMetaMaskDetection = () => {
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(false);
  const [metaMaskLoading, setMetaMaskLoading] = useState(true);
  useEffect(() => {
    const effect = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setMetaMaskInstalled(true);
      }
      setMetaMaskLoading(false);
    };
    effect();
  }, []);
  return { metaMaskInstalled, metaMaskLoading };
};

const EVMConnect: React.FC = () => {
  const { metaMaskInstalled, metaMaskLoading } = useMetaMaskDetection();
  const isActive = useIsActive();

  if (metaMaskLoading) {
    return (
      <AirdropButton
        label="Checking for MetaMask..."
        textStyle={{ color: "rgba(255, 255, 255, 0.3)" }}
      />
    );
  }

  if (!metaMaskInstalled) {
    return (
      <a href="https://metamask.io/" target="_blank">
        <AirdropButton label="Get MetaMask" />
      </a>
    );
  }

  if (isActive) {
    return (
      <AirdropButton
        label="Disconnect MetaMask"
        onClick={() => metaMask.deactivate()}
        style={{ marginBottom: "20px" }}
        textStyle={{ color: "rgba(255, 255, 255, 0.3)" }}
      />
    );
  }

  return (
    <AirdropButton
      label="Connect MetaMask"
      onClick={() =>
        metaMask.activate({
          chainName: "Evmos",
          rpcUrls: ["https://eth.bd.evmos.org:8545/"],
          chainId: 9001,
          blockExplorerUrls: ["https://mintscan.io/evmos"],
          nativeCurrency: {
            name: "EVMOS",
            symbol: "EVMOS",
            decimals: 18,
          },
        })
      }
    />
  );
};

export default EVMConnect;
