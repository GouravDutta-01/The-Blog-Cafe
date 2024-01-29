import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Typography variant="h2" padding={5} fontWeight="500">
            Login
          </Typography>
          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            startIcon={<LoginIcon />}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="success"
            type="submit"
            disabled={isFetching}
          >
            Login
          </Button>
          <Link to="/register">
            <Button
              endIcon={<PersonAddIcon />}
              sx={{ marginTop: 6, borderRadius: 3 }}
              color="warning"
            >
              Change to Register
            </Button>
          </Link>
        </Box>
      </form>
    </div>
  );
}
