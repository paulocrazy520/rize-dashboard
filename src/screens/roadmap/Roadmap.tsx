import React from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

import "./RoadmapStyled.css";

//import Header and Footer

import RoadmapCard from "../../components/cards/roadmap-card/RoadmapCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import { roadmapData } from "../../utils/Data/data";

// holdColor

const Roadmap: React.FC = () => {
  return (
    <div className="design">
      <Navbar />
      <div className="title_background_block_roadmap">
        <div className="block_text" id="menu">
          <img src="/logo.svg" alt="Logo" className="white_logo" />
          <h1 className="title_white"> Teritori </h1>
          <h2 className="second_title">ROADMAP</h2>
        </div>
      </div>

      {/* Start Galerie */}

      <div className="columns_page">
        <div className="design_system">
          <div className="menu_design_section">
            <ScrollspyNav
              scrollTargetIds={[
                ...Object.keys(roadmapData),
                "Meta-Vision",
                "Future-dGov",
              ]}
              activeNavClass="active"
              scrollDuration="500"
              headerBackground="true"
              offset={20}
            >
              <ul className="menu_design">
                {Object.keys(roadmapData).map((key) => (
                  <li className="menu_design_item">
                    <a className="item_link" href={`#${key}`}>
                      {key.replace("-", " ")}
                    </a>
                  </li>
                ))}
                <li className="menu_design_item">
                  <a className="item_link" href="#Meta-Vision">
                    Meta Vision
                  </a>
                </li>
                <li className="menu_design_item">
                  <a className="item_link" href="#Future-dGov">
                    Future & dGov
                  </a>
                </li>
              </ul>
            </ScrollspyNav>
          </div>
        </div>

        <div className="column_design_section">
          {/* roadmap section starts */}
          <div className="column_design">
            <div className="left_column">
              <div className="left_column_text">
                <p className="left_column_title" id="colors">
                  ROADMAP
                </p>
                <p className="left_column_description">
                  This Roadmap is developped by Teritori Core team #1.
                  <br />
                  <br />
                  Some of these features could be also developped by Granted
                  teams candidating to join Teritori Ecosystem.
                  <br />
                  <br />
                  To candidate to a developer grant:{" "}
                  <a href="/grants" className="link_highlight">
                    www.teritori.com/grants
                  </a>
                </p>
              </div>
            </div>
            <div className="right_column">
              {Object.keys(roadmapData).map((key) => (
                <section id={`${key}`}>
                  <div className="categorie_section">
                    <p className="color_subtitle">
                      {roadmapData[key as keyof typeof roadmapData].title}
                    </p>
                    <div className="color_section">
                      {roadmapData[key as keyof typeof roadmapData].roadmap.map(
                        (item) => (
                          <RoadmapCard
                            title={item.title}
                            describtion={item.subtitle}
                            source={item.source}
                          />
                        )
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
          {/* roadmap section end */}

          {/* vision section starts */}
          <section id="Meta-Vision">
            <div className="column_design">
              <div className="left_column">
                <div className="left_column_text">
                  <p className="left_column_title" id="colors">
                    Meta Long Term Vision
                  </p>
                  <p className="left_column_description">
                    What do we dream about in upcoming years? What's the long
                    term vision & philosophy around Teritori?
                    <br />
                    <br />
                    What to expect as experimentation that could be built &
                    supported by Teritori core team?
                  </p>
                </div>
              </div>
              <div className="right_column">
                <div className="categorie_section">
                  <p className="color_subtitle">
                    Local Communities Tools for Offline Cooperation
                  </p>
                  <div className="color_section">
                    <p className="right_column_description">
                      Our target is to allow local communities to use Teritori,
                      whatever their network is.The mission of Teritori dApp
                      (and especially the Desktop & Mobile version) is to allow
                      people, groups, friends, communities to communicate and
                      organize themself in a full p2p way, with a strong
                      censorship resistant approach.
                      <br />
                      <br />
                      As an example of experience built & maintained by the
                      Teritori Core team since 2017: LaSuiteduMonde.com* *The
                      “World’s Suite” in French, is a social experimentation
                      building a “backcountry self sovereign autonomous
                      community” that co-own lands, hostels, and markets for
                      people to organize a new cooperativist world.
                      <br />
                      <br />
                      This project has been bootstrapped by Teritori Founder
                      with a strong DAO culture, Teritori has been designed to
                      fit with SDM future steps of this experimentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* vision section end */}

          {/* govern section starts */}
          <section id="Future-dGov">
            <div className="column_design">
              <div className="left_column">
                <div className="left_column_text">
                  <p className="left_column_title" id="colors">
                    Future of Governances
                  </p>
                  <p className="left_column_description">
                    How is the technical approach and development strategy of
                    the Teritori project constructed?
                    <br />
                    Why so many features? Why gather so many tools and what is
                    the long term vision?
                  </p>
                </div>
              </div>
              <div className="right_column">
                <div className="categorie_section">
                  <div className="column_no_heading_space" />
                  <div className="color_section">
                    <p className="right_column_description">
                      Teritori Core Team is building a brand new experience
                      allowing to imagine, design, build and experiment new
                      Governance design for future generations. Based on an
                      explosive mix of peer-to-peer culture, open source
                      culture, and co-operativist culture, Teritori engineers
                      team built various tools in the last 5 years with a common
                      ambitious vision: Allow people to update democracies, even
                      in worst cases & worst contexts.
                      <br />
                      <br />
                      As engineers, team dedicated more than 5 years building
                      and experimenting various protocols, some using
                      blockchains, some without any consensus. In this new phase
                      of our vision, we now enter in the Era of Assembling
                      different tools that perfectly fit with the Meta Vision:
                      Build future of Governance tools, allowing people to
                      organize without any third parties, institutions, or
                      governments, with the help of open source secured dApps.
                      <br />
                      <br />
                      The technical approach chosen is that of building with a
                      Lego philosophy, each brick, independently of the others,
                      in order to isolate the risks, and to provide
                      interoperable and modular tools for all. Berty protocol
                      (or WESH protocol) is part of the technical bricks
                      allowing today to have serverless and offline
                      communication within Berty. We are now starting the same
                      approach by becoming important contributors of Gno.land.
                      <br />
                      <br />
                      In our long term vision, Gnolang will allow us to build
                      complex sovereign and interoperable governance
                      architectures, in a secure way, by providing
                      smartcontracts standards in Gnolang to all and freely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* govern section end */}

          {/* contributor section starts */}
          <section id="Future-dGov">
            <div className="column_design">
              <div className="left_column">
                <div className="left_column_text">
                  <p className="left_column_title" id="colors">
                    Join Contributors
                  </p>
                  <p className="left_column_description">
                    To join contributors and get granted to develop features &
                    tools for the community, feel free to candidate!
                  </p>
                </div>
              </div>
              <div className="right_column">
                <div className="categorie_section">
                  <p className="color_subtitle">
                    Teritori Grants & Bounties Program
                  </p>
                  <div className="color_section">
                    <div className="right_column_buttons">
                      <Link to="/grants">
                        <SecondaryButton>Grants Program</SecondaryButton>
                      </Link>
                      <div style={{ width: 20 }} />
                      <a href="https://app.dework.xyz/teritori" target="_blank">
                        <SecondaryButton>Bounties Program</SecondaryButton>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contributor section end */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
