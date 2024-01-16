import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Box } from "@mui/material";
import axios from "axios";
import Posts from "../components/Posts";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <Box>
      <Banner />
      <Posts posts={posts} />
    </Box>
  );
}
