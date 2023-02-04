import { Decimal } from "@cosmjs/math";
import { isAddress as isEVMAddress } from "@ethersproject/address";
import { bech32 } from "bech32";
import { useState, useEffect } from "react";

import { useRefresh } from "../../utils/hooks";
import { teritoriRestProvider } from "../../web3Connectors/keplr/keplr";

const validPrefixes = ["cosmos", "stars"];

const validateAddress = (addressString: string) => {
  if (isEVMAddress(addressString)) {
    return true;
  }
  try {
    const address = bech32.decode(addressString);
    if (!validPrefixes.includes(address.prefix)) {
      return false;
    }
    return true;
  } catch {}
  return false;
};

export const useAirdropEligibility = (address: string) => {
  const [isQuerying, setIsQuerying] = useState(false);
  const [allocation, setAllocation] = useState<{
    address: string;
    amount: { denom: string; amount: string };
    chain: string;
    claimed_amount: { denom: string; amount: string };
  }>();
  const { refreshIndex, refresh } = useRefresh();
  const addressIsValid = validateAddress(address);
  const isEligible =
    !isQuerying &&
    !!allocation?.amount?.amount &&
    allocation?.amount.amount !== "0";
  const claimableAmount = allocation
    ? Decimal.fromAtomics(allocation.amount.amount, 6).minus(
        Decimal.fromAtomics(allocation.claimed_amount.amount, 6)
      ).atomics
    : "0";
  const alreadyClaimed = isEligible && claimableAmount === "0";

  useEffect(() => {
    const ac = new AbortController();
    const effect = async () => {
      if (!addressIsValid) {
        return;
      }
      setIsQuerying(true);
      try {
        const response = await fetch(
          `${teritoriRestProvider}/teritori/airdrop/v1beta1/allocation/${address}`,
          { signal: ac.signal }
        );
        const responseBody = await response.json();
        if (ac.signal.aborted) {
          return;
        }
        setAllocation(responseBody?.allocation || undefined);
      } catch (e) {
        console.error(e);
      }
      setIsQuerying(false);
    };
    effect();
    return () => ac.abort();
  }, [address, addressIsValid, refreshIndex]);

  return {
    addressIsValid,
    isQuerying,
    refresh,
    isEligible,
    alreadyClaimed,
    claimableAmount,
  };
};
