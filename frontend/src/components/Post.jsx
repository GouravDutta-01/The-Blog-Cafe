import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  const url =
    "https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_640.jpg";
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card
        sx={{
          width: "380px",
          margin: "0px 25px 40px 25px",
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        {post.photo ? (
          <CardMedia
            component="img"
            object-fit="cover"
            width="100%"
            height="200"
            image={PF + post.photo}
            alt={post.title}
          />
        ) : (
          <CardMedia
            component="img"
            width="100%"
            height="200"
            image={url}
            alt={post.title}
          />
        )}
        <CardContent>
          <Link
            to={`/post/${post._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6" component="div">
              {post.title}
            </Typography>
          </Link>
          <Typography color="textSecondary" gutterBottom>
            Author: {post.username}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Date: {new Date(post.createdAt).toDateString()}
          </Typography>
          <Typography
            sx={{ textOverflow: "ellipsis" }}
            variant="body2"
            component="p"
          >
            {post.desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
