import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  CardContent,
  Card,
  CardActions,
  IconButton,
  TextField,
  CardMedia,
} from "@mui/material";
import axios from "axios";
import { Context } from "../context/Context";
import { Delete, EditNote } from "@mui/icons-material";

export default function SinglePost() {
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
    <Box width="100%">
      {post.photo ? (
        <CardMedia
          component="img"
          alt=""
          height="300vh"
          margin="auto"
          objectFit="cover"
          image={PF + post.photo}
        />
      ) : (
        <CardMedia
          component="img"
          alt=""
          margin="16px"
          height="300vh"
          objectFit="cover"
          image={url}
        />
      )}
      <Card sx={{ margin: "16px" }}>
        <CardContent>
          {updateMode ? (
            <TextField
              fullWidth
              type="text"
              sx={{ paddingBottom: "5px" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
              {title}
            </Typography>
          )}
          {!updateMode && (
            <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
              <Typography variant="subtitle1" sx={{color: "#7e8c37"}}>
                Author:
                <Link
                  to={`/?user=${post.username}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <b> {post.username}</b>
                </Link>
              </Typography>
              <Typography variant="subtitle2" sx={{color: "#7e8c37"}}>
                {new Date(post.createdAt).toDateString()}
              </Typography>
            </div>
          )}
          {updateMode ? (
            <TextField
              multiline
              fullWidth
              minRows={5}
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <Typography variant="body1" paragraph>
              <span style={{ fontSize: "2em" }}>{desc.charAt(0)}</span>
              {desc.slice(1)}
            </Typography>

          )}
        </CardContent>
        {!updateMode && post.username === user?.username && (
          <CardActions>
            <IconButton aria-label="edit" onClick={() => setUpdateMode(true)}>
              <EditNote sx={{color:"#197d8a"}}/>
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <Delete sx={{color:"red"}}/>
            </IconButton>
          </CardActions>
        )}
        {updateMode && (
          <Button
            sx={{ margin: "16px auto", display: "block" }}
            variant="contained"
            color="success"
            onClick={handleUpdate}
          >
            Update
          </Button>
        )}
      </Card>
    </Box>
  );
}
