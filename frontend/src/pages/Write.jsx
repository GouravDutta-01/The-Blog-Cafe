import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { AddCircle } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Button,
  FormControl,
  InputBase,
  TextareaAutosize,
  createTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import defaultImg from "../assets/default.jpg";

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});
const Container = styled(Box)(({ theme }) => ({
  margin: "30px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
    overflowX: "hidden",
  },
}));
const StyledFormControl = styled(FormControl)({
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
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

export default function Write() {
  const theme = createTheme();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        toast.error("Error uploading image. Please try again.");
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error("Duplicate title: Please choose a unique title.");
      } else {
        toast.error("Error creating post. Please try again.");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
      <ToastContainer position="top-center" autoClose={1000}/>
        {file ? (
          <Image src={URL.createObjectURL(file)} alt="" />
        ) : (
          <Image src={defaultImg} alt="" />
        )}
        <StyledFormControl>
          <label htmlFor="fileInput">
            <AddCircle fontSize="large" style={{color : "#398d81"}} />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <InputTextField
            type="text"
            placeholder="Add Blog Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Button
            variant="contained"
            style={{ backgroundColor: "#149b77"}}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                borderRight: 10,
              },
            })}
            onClick={handleSubmit}
          >
            Publish
          </Button>
        </StyledFormControl>
        <Textarea
          minRows={5}
          placeholder="Add Blog Description"
          type="text"
          name="description"
          onChange={(e) => setDesc(e.target.value)}
        />
      </Container>
    </ThemeProvider>
  );
}
