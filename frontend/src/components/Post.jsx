import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  const url =
    "https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_640.jpg";

  return (
    <Box component="div">
      <Card sx={{ width: "380px", margin: "40px auto" }}>
        {post.photo ? (
          <CardMedia
            component="img"
            objectFit="cover"
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
            <Typography variant="h6" component="div" sx={{ height: "75px", paddingBottom: "10px"}}>
              {post.title.split(' ').slice(0, 10).join(' ')}{post.title.split(' ').length > 10 ? ' ...' : ''}
            </Typography>
          </Link>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="textSecondary" gutterBottom sx={{color: "#12372A"}}>
              Author: <b>{post.username}</b>
            </Typography>
            <Typography color="textSecondary" gutterBottom sx={{color: "#436850"}}>
              {new Date(post.createdAt).toDateString()}
            </Typography>
          </Box>
          <Typography
            sx={{ height: "80px", paddingTop: "20px" }}
            variant="body2"
            component="p"
          >
            {post.desc.split(' ').slice(0, 20).join(' ')}{post.desc.split(' ').length > 20 ? ' ...' : ''}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
