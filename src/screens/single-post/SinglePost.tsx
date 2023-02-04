import BlockContent from "@sanity/block-content-to-react";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./SinglePostStyled.css";
import { TwitterShareButton } from "react-share";

import { PrimaryBox } from "../../components/boxes/PrimaryBox";
import TertiaryBox from "../../components/boxes/TertiaryBox";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import client from "../../utils/client";

const Blogpost = {
  title: "",
  body: "",
  name: "",
  time: "",
  mainImage: { asset: { url: "" } },
};

const SinglePost: React.FC = () => {
  const [singlePost, setSinglePost] = useState(Blogpost);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  //create share button function. Everything is connect to the slug.
  //  We fecth GROQ JSON from Sanity.

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          body,
          time,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <div className="all_singlepost">
      <Navbar />
      <>
        {" "}
        {isLoading ? (
          <p> Loading ... </p>
        ) : (
          //      if it's not loading show all components
          <PrimaryBox
            mainContainerStyle={{ padding: "6rem", backgroundColor: "#0f0f0f" }}
            style={{
              margin: "0 0rem 1rem 0",
              width: "90%",
              height: "90%",
              zIndex: 0,
            }}
          >
            <>
              <button className="btnback_article">
                <TertiaryBox
                  squaresBackgroundColor="#0f0f0f"
                  mainContainerStyle={{ padding: "1rem 2rem" }}
                  style={{ margin: "0 2rem 2rem 0", alignContent: "center" }}
                >
                  <Link className="link_article" to="/blog">
                    ↩ Back to blog
                  </Link>
                </TertiaryBox>
              </button>

              <div className="titlesection_singlepost">
                <h1 className="title_singlepost">{singlePost.title}</h1>

                {singlePost.mainImage && singlePost.mainImage.asset && (
                  <img
                    className="img_singlepost"
                    src={singlePost.mainImage.asset.url}
                    alt={singlePost.title}
                    title={singlePost.title}
                  />
                )}

                <BlockContent
                  className="text_content"
                  blocks={singlePost.body}
                  projectId="dsp47i30"
                  dataset="production"
                />
              </div>

              <div className="sharebutton_section">
                <TwitterShareButton
                  url={`${process.env.REACT_APP_URL}/blog/${slug}`}
                >
                  <img
                    className="twitter-icon_singleblog"
                    src="/twitter.svg"
                    alt="Twitter"
                  />
                </TwitterShareButton>
              </div>
            </>
          </PrimaryBox>
        )}
      </>
      <Footer />
    </div>
  );
};

export default SinglePost;
