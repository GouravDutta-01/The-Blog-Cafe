import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Avatar,
  Container,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import { Context } from "../context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      toast.success("Profile has been updated...");
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 10 }}>
      <ToastContainer position="top-center" autoClose={2000}/>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="contained-button-file">
          <Tooltip title="Change Profile Picture" placement="top">
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Avatar
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                sx={{ width: 100, height: 100, marginBottom: 2 }}
              />
              {isHovered && (
                <IconButton
                  color="primary"
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: 22,
                    right: 22,
                  }}
                >
                  <PhotoCameraIcon sx={{ fontSize: 32, color: "gray" }} />
                </IconButton>
              )}
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </Tooltip>
        </label>
        <Typography component="h1" variant="h5" gutterBottom>
          Update Your Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            placeholder={user.username}
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Save Changes
          </Button>
          {success && (
            <Typography
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Profile has been updated...
            </Typography>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Settings;
