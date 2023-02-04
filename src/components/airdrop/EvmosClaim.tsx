import React, { useState } from "react";

import { useKeplr } from "../../context/KeplrProvider";
import { metaMaskHooks } from "../../web3Connectors/eth/metaMask";
import TertiaryBox from "../boxes/TertiaryBox";
import { ClaimAirdrop } from "./ClaimAirdrop";
import ETHSign from "./ETHSign";
import EVMConnect from "./EVMConnect";
import { EligibilityResult } from "./EligibilityResult";
import { addressCardStyle } from "./styles";
import { useAirdropEligibility } from "./useAirdropEligibility";

const { useIsActive, useAccounts } = metaMaskHooks;

export const EvmosClaim = () => {
  const { keplrAccount } = useKeplr();
  const rewardAddress = keplrAccount?.bech32Address || "";
  const metamaskAccounts = useAccounts();
  const evmAddress = metamaskAccounts ? metamaskAccounts[0] : "";
  const { isQuerying, isEligible, claimableAmount } =
    useAirdropEligibility(evmAddress);
  const [evmSignature, setEvmSignature] = useState("");
  const isActive = useIsActive();

  return (
    <TertiaryBox
      mainContainerStyle={addressCardStyle.boxMainContainer}
      style={addressCardStyle.box}
    >
      <>
        <span style={addressCardStyle.title}>Orbital Apes NFTs</span>
        {/*------ Connect/Disconnect EVM */}
        <EVMConnect />
        {isActive && (
          <>
            {!!evmAddress && (
              //------ Checking automatically eligibility for EVM
              <EligibilityResult
                loading={isQuerying}
                showAddress
                eligible={isEligible}
                address={evmAddress}
                amount={claimableAmount}
              />
            )}
            {/*------ If EVM eligible, can sign */}
            {isEligible && !evmSignature && (
              <ETHSign
                style={{ marginTop: 35, marginBottom: 15 }}
                address={evmAddress}
                evmSignature={evmSignature}
                setEvmSignature={setEvmSignature}
                rewardAddress={rewardAddress}
              />
            )}
            {/*------ If EVM signed, can claim */}
            {!!evmSignature && (
              <ClaimAirdrop
                style={{ marginTop: 35, marginBottom: 15 }}
                address={evmAddress}
                signResult={{
                  signMsg: {
                    chain: "evm",
                    address: evmAddress,
                    rewardAddr: rewardAddress,
                  },
                  pubKey: "0x00",
                  signature: evmSignature,
                }}
              />
            )}
          </>
        )}
      </>
    </TertiaryBox>
  );
};
