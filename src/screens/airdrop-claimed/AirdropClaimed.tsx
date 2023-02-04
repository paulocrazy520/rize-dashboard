import React from "react";

import {
  AirdropClaimButton,
  AirdropTextBox,
} from "../../components/airdrop/elements";
import { PrimaryBox } from "../../components/boxes/PrimaryBox";
import DAppCard from "../../components/cards/dapp-card/DAppCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export const AirdropClaimed: React.FC = () => {
  return (
    <div className="airdrop_check">
      <Navbar />

      <section className="airdrop_check__section">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <DAppCard
            label="Airdrop Claim"
            description="Congratulations!"
            info="Welcome in the Teritori Community"
            iconSVG="/airdrop.svg"
          />

          <PrimaryBox
            mainContainerStyle={{
              padding: 20,
              backgroundColor: "#000000",
              borderRadius: "20px",
            }}
            style={{
              width: "100%",
              maxWidth: 528,
              marginTop: -1,
              marginBottom: 40,
            }}
            roundCorners
          >
            <AirdropTextBox
              label="Your airdrop has been claimed!"
              textStyle={{ color: "white" }}
              style={{ marginBottom: 38 }}
            />
            <AirdropClaimButton
              label="STAKE TORI"
              fullWidth
              link={process.env.REACT_APP_TERITORI_STAKING_URL}
              style={{ marginBottom: 16 }}
            />
            <AirdropClaimButton
              label="VOTE ON A PROPOSAL"
              fullWidth
              link={process.env.REACT_APP_TERITORI_GOV_URL}
              style={{ marginBottom: 16 }}
            />
            <AirdropClaimButton
              label="PROVIDE LIQUIDITY ON OSMOSIS"
              link={process.env.REACT_APP_TERITORI_POOL_URL}
              fullWidth
              style={{ marginBottom: 16 }}
            />
            <AirdropClaimButton
              label="CLAIM OTHER"
              link="/airdrop"
              fullWidth
              style={{ marginBottom: 34 }}
            />
            <a
              href={process.env.REACT_APP_TERITORI_INCENTIVES_URL}
              target="_blank"
              style={{
                color: "rgba(255, 255, 255, 0.55)",
                fontWeight: "400",
                fontSize: "14.3684px",
                lineHeight: "17px",
                textDecorationLine: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Earn Game of Teritori XP for each of these tasks!
            </a>
          </PrimaryBox>
        </div>
        <Footer transparent />
      </section>
    </div>
  );
};
