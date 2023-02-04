import "./Airdrop.css";

import React, { useState } from "react";

import TextInput from "../inputs/text-input/TextInput";
import { EligibilityResult } from "./EligibilityResult";
import { useAirdropEligibility } from "./useAirdropEligibility";

const ManualAllocationEligibility: React.FC = () => {
  const [enteredAddress, setEnteredAddress] = useState("");
  const { addressIsValid, isQuerying, isEligible, claimableAmount } =
    useAirdropEligibility(enteredAddress);

  return (
    <>
      <TextInput
        fullWidth
        label="Wallet address"
        value={enteredAddress}
        placeHolder="Enter an address to check the eligibility"
        onChange={setEnteredAddress}
      />
      {!!enteredAddress &&
        (addressIsValid ? (
          <EligibilityResult
            loading={isQuerying}
            address={enteredAddress}
            eligible={isEligible}
            amount={claimableAmount}
            style={{ marginTop: "20px" }}
          />
        ) : (
          <p
            style={{
              color: "red",
              fontSize: "13.2632px",
              lineHeight: "16px",
              marginTop: "20px",
            }}
          >
            Invalid address
          </p>
        ))}
    </>
  );
};

export default ManualAllocationEligibility;
