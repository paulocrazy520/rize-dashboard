import "./AirdropCheckStyled.css";

import React from "react";

import ManualAllocationEligibility from "../../components/airdrop/ManualAllocationEligibility";
import { PrimaryBox } from "../../components/boxes/PrimaryBox";
import DAppCard from "../../components/cards/dapp-card/DAppCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const AirdropCheck: React.FC = () => {
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
            label="Airdrop Check"
            description="Check for TORI Airdrop eligibility"
            info="Without connecting a wallet"
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
            <ManualAllocationEligibility />
          </PrimaryBox>
        </div>
        <Footer transparent />
      </section>
    </div>
  );
};

export default AirdropCheck;
