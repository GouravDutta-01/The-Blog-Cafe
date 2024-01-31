import React from "react";
import { Container, Typography, Paper } from "@mui/material";

export default function About() {
  return (
    <Container
      sx={{
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Paper
        sx={{
          padding: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to The-Blog-Cafe!
        </Typography>
        <Typography>
          The-Blog-Cafe is a web application that empowers users to create,
          update, and delete their blogs. It provides a platform for users to
          share their thoughts and stories with others.
        </Typography>
        <Typography>Key Features:</Typography>
        <ul>
          <li>
            <Typography>
              User Authentication: Register and login to manage your blogs
              securely.
            </Typography>
          </li>
          <li>
            <Typography>
              CRUD Operations: Create, read, update, and delete blogs
              effortlessly.
            </Typography>
          </li>
          <li>
            <Typography>
              Explore Blogs: Discover a variety of blogs from different authors.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          The frontend of The-Blog-Cafe is built with Material-UI and React.js,
          ensuring a modern and intuitive user interface. The backend is powered
          by Express.js, Node.js, and MongoDB, guaranteeing a robust and
          scalable architecture. We are dedicated to delivering an excellent
          blogging experience for our users.
        </Typography>
      </Paper>
    </Container>
  );
}
