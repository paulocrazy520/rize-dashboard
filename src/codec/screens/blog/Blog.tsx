import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import "./BlogStyled.css";
import { Link } from "react-router-dom";

import TertiaryBox from "../../../components/boxes/TertiaryBox";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import client from "../../../utils/client";

const builder = imageUrlBuilder(client);
function urlFor(source: Parameters<typeof builder["image"]>[0]) {
  return builder.image(source);
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState([] as any[]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(dateTime(publishedAt) desc) {
            title,
            slug,
            time,
            "name":author->name,
            "authorImage": author->image,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog">
      <Navbar />
      <div className="all_blog">
        <div className="title_background_blog">
          <div className="block_text" id="menu">
            <img src="logo.svg" alt="Logo" className="white_logo" />
            <h1 className="title_white"> Teritori Blog</h1>
            <h2 className="second_title_blog">News, updates and podcasts</h2>
          </div>
        </div>
        <section>
          <div className="article_section">
            <div className="all_articles">
              {posts.map((post, index) => (
                <article className="article" key={post.slug.current}>
                  <TertiaryBox squaresBackgroundColor="#000000">
                    <Link
                      className="link_article"
                      key={index}
                      to={`/blog/${post.slug.current}`}
                    >
                      <img
                        className="img_article"
                        src={post.mainImage.asset.url}
                      />
                      <h4 className="title_article">{post.title}</h4>
                      <p className="time_read">{post.time}</p>
                      <div className="description_post">
                        <div className="sectiontop">
                          <img
                            className="img_author_post"
                            src={urlFor(post.authorImage).width(200).url()}
                            alt="author"
                          />
                          <h4 className="authorname_post">{post.name}</h4>
                        </div>
                      </div>
                    </Link>
                  </TertiaryBox>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
