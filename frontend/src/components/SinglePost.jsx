import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  TextareaAutosize,
  Divider,
  CardContent,
  Card,
  CardActions,
  IconButton,
  createTheme,
  ThemeProvider,
  InputBase,
} from "@mui/material";
import axios from "axios";
import { Context } from "../context/Context";
import { Delete, EditNote } from "@mui/icons-material";
import styled from "@emotion/styled";

export default function SinglePost() {
  const theme = createTheme();
  const url =
    "https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_640.jpg";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const Container = styled(Box)(({ theme }) => ({
    margin: "auto",
    padding: "20px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: 0,
      overflowX: "hidden",
    },
  }));
  const Image = styled("img")({
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  });
  const InputTextField = styled(InputBase)({
    flex: "1",
    margin: "0 30px",
    fontSize: "25px",
  });
  const Textarea = styled(TextareaAutosize)(({ theme }) => ({
    width: "100%",
    border: "none",
    marginTop: "50px",
    fontSize: "18px",
    resize: "none",
    "&:focus-visible": {
      outline: "none",
    },
  }));

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {post.photo ? (
          <Image src={PF + post.photo} alt="" />
        ) : (
          <Image src={url} alt="" />
        )}
        <Card>
          <CardContent>
            {updateMode ? (
              <InputTextField
                type="text"
                sx={{ paddingBottom: "5px" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <Typography variant="h4" gutterBottom>
                {title}
              </Typography>
            )}
            {!updateMode && (
              <>
                <Typography variant="subtitle1">
                  Author:
                  <Link
                    to={`/?user=${post.username}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <b> {post.username}</b>
                  </Link>
                </Typography>
                <Typography variant="subtitle2">
                  {new Date(post.createdAt).toDateString()}
                </Typography>
              </>
            )}
            <Divider />
            {updateMode ? (
              <Textarea
                minRows={5}
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            ) : (
              <Typography variant="body1" paragraph>
                {desc}
              </Typography>
            )}
          </CardContent>
          {!updateMode && post.username === user?.username && (
            <CardActions>
              <IconButton aria-label="edit" onClick={() => setUpdateMode(true)}>
                <EditNote />
              </IconButton>
              <IconButton aria-label="delete" onClick={handleDelete}>
                <Delete />
              </IconButton>
            </CardActions>
          )}
          {updateMode && (
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          )}
        </Card>
      </Container>
    </ThemeProvider>
  );
}
