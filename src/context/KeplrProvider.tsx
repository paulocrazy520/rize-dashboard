import { Window as KeplrWindow } from "@keplr-wallet/types";
import converter from "bech32-converting";
import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  useWindowExtensionEventListener,
  useRefresh,
  useWindowEventListener,
} from "../utils/hooks";
import { AccountWithCosmosAndTeriTori } from "../web3Connectors/keplr/account";
import { getStores } from "../web3Connectors/keplr/keplr";

interface KeplrContextValue {
  keplrAccount?: AccountWithCosmosAndTeriTori;
  connectKeplrAccount: () => void;
  disconnectKeplrAccount: () => void;
  isKeplrInstalled: boolean;
  isKeplrLoading: boolean;
}
const defaultValue: KeplrContextValue = {
  keplrAccount: undefined,
  connectKeplrAccount: () => {},
  disconnectKeplrAccount: () => {},
  isKeplrInstalled: false,
  isKeplrLoading: true,
};

const KeplrContext = createContext(defaultValue);

export const convertToTargetChain = (prefix: string, address: string) => {
  try {
    const hex = converter("tori").toHex(address);
    return converter(prefix).toBech32(hex);
  } catch {
    return "";
  }
};

const { chainStore, accountStore } = getStores();

const getKeplrAccount = () =>
  accountStore.getAccount(chainStore.teritoriChainId);

export const KeplrContextProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [loadState, setLoadState] = useState<
    "loading" | "installed" | "not-installed"
  >("loading");

  // this effect is there in case we missed the window load event
  useEffect(() => {
    setLoadState(
      (window as KeplrWindow)?.keplr ? "installed" : "not-installed"
    );
  }, [loadState]);

  useWindowEventListener("load", () => {
    setLoadState(
      (window as KeplrWindow)?.keplr ? "installed" : "not-installed"
    );
  });

  const { refresh } = useRefresh();

  useWindowExtensionEventListener("keplr_keystorechange", () =>
    connectKeplrAccount()
  );

  const connectKeplrAccount = useCallback(async () => {
    const keplrAccount = getKeplrAccount();
    if (!keplrAccount) return;
    // init return is not correctly typed
    await keplrAccount.init();
    refresh();
  }, []);

  const disconnectKeplrAccount = useCallback(async () => {
    const keplrAccount = getKeplrAccount();
    if (!keplrAccount) return;
    keplrAccount.disconnect();
    refresh();
  }, []);

  return (
    <KeplrContext.Provider
      value={{
        keplrAccount: getKeplrAccount(),
        connectKeplrAccount,
        disconnectKeplrAccount,
        isKeplrInstalled: loadState === "installed",
        isKeplrLoading: loadState === "loading",
      }}
    >
      {children}
    </KeplrContext.Provider>
  );
};

export const useKeplr = () => useContext(KeplrContext);
