import React from "react";
import { Grid } from "@mui/material";
import Post from "./Post";

export default function Posts({ posts }) {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      {posts.map((post, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
