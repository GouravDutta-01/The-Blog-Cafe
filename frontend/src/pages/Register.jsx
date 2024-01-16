import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
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
            Register
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
            type={"email"}
            variant="outlined"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="success"
            type="submit"
          >
            Register
          </Button>
          <Link to="/login">
            <Button sx={{ marginTop: 6, borderRadius: 3 }} color="warning">
              Change to Login
            </Button>
          </Link>
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              Something went wrong!
            </span>
          )}
        </Box>
      </form>
    </div>
  );
}
