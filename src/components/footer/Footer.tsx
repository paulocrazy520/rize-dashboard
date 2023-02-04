import "./FooterStyled.css";

import cx from "classnames";
import React from "react";

import {
  discordLink,
  gitbookLink,
  mediumLink,
  twitterLink,
} from "../../utils/const";

const FooterButton: React.FC<{ image: string; link: string; alt: string }> = ({
  image,
  link,
  alt,
}) => {
  return (
    <a className="FooterButton" href={link} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} />
    </a>
  );
};

const Footer: React.FC<{ transparent?: boolean }> = ({ transparent }) => {
  return (
    <div className={cx("footer", transparent || "footer_filled")}>
      <div className="right_bottom_section">
        <FooterButton image="/gitbook.svg" alt="GitBook" link={gitbookLink} />
        <FooterButton image="/medium.svg" alt="Medium" link={mediumLink} />
        <FooterButton image="/twitter.svg" alt="Twitter" link={twitterLink} />
        <FooterButton image="/discord.svg" alt="Discord" link={discordLink} />
      </div>
    </div>
  );
};

export default Footer;
