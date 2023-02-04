import { convertToTargetChain, useKeplr } from "../../context/KeplrProvider";
import TertiaryBox from "../boxes/TertiaryBox";
import { ClaimAirdrop } from "./ClaimAirdrop";
import { EligibilityResult } from "./EligibilityResult";
import { addressCardStyle } from "./styles";
import { useAirdropEligibility } from "./useAirdropEligibility";

type AirdropCosmosChain = "cosmos" | "stargaze";

const chainPrefix = (chain: AirdropCosmosChain) => {
  switch (chain) {
    case "cosmos":
      return "cosmos";
    case "stargaze":
      return "stars";
    default:
      throw new Error("unknown chain");
  }
};

export const CosmosClaim: React.FC<{ chain: AirdropCosmosChain }> = ({
  chain,
}) => {
  const { keplrAccount } = useKeplr();
  const rewardAddress = keplrAccount?.bech32Address || "";
  const address = rewardAddress
    ? convertToTargetChain(chainPrefix(chain), rewardAddress)
    : "";
  const { isQuerying, isEligible, claimableAmount } =
    useAirdropEligibility(address);

  return (
    <TertiaryBox
      mainContainerStyle={addressCardStyle.boxMainContainer}
      style={addressCardStyle.box}
    >
      <span style={{ ...addressCardStyle.title, textTransform: "capitalize" }}>
        {chain}
      </span>
      {!!address && (
        //------ Checking automatically eligibility for Cosmos
        <EligibilityResult
          loading={isQuerying}
          showAddress
          eligible={isEligible}
          address={address}
          amount={claimableAmount}
        />
      )}
      {/*------ If Cosmos eligible, can claim */}
      {isEligible && (
        <ClaimAirdrop
          style={{ marginTop: 35, marginBottom: 15 }}
          address={address}
          signResult={{
            signMsg: {
              chain,
              address,
              rewardAddr: rewardAddress,
            },
            pubKey: "0x00",
            signature: "0x00",
          }}
        />
      )}
    </TertiaryBox>
  );
};
