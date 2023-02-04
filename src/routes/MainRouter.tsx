// libraries
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// screens
import AirdropCheck from "../screens/airdrop-check/AirdropCheck";
import { AirdropClaimed } from "../screens/airdrop-claimed/AirdropClaimed";
import AirdropHome from "../screens/airdrop-home/AirdropHome";
import Blog from "../screens/blog/Blog";
import Design from "../screens/design/Design";
import Grants from "../screens/grants/Grants";
import Homepage from "../screens/homepage/Homepage";
import Roadmap from "../screens/roadmap/Roadmap";
import SinglePost from "../screens/single-post/SinglePost";

const MainRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top on page change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/grants" element={<Grants />} />
      <Route path="/design" element={<Design />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<SinglePost />} />
      <Route path="/airdrop" element={<AirdropHome />} />
      <Route path="/airdrop/claimed" element={<AirdropClaimed />} />
      <Route path="/airdrop/check" element={<AirdropCheck />} />
    </Routes>
  );
};

export default MainRouter;
