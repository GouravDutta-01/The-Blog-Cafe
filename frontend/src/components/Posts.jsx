import React from "react";
import { Grid } from "@mui/material";
import Post from "./Post";

export default function Posts({ posts }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {posts.map((p, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <Post post={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
