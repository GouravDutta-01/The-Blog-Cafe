import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <Box
        sx={{":hover":{boxShadow:"10px 10px 20px #ccc"}}}
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
          <Typography variant="h2" padding={5} fontWeight= "500">Login</Typography>
          <TextField margin="normal" type={"text"} variant="outlined" placeholder="Username"/>
          <TextField margin="normal" type={"password"} variant="outlined" placeholder="Password"/>
          <Button sx={{marginTop: 3, borderRadius: 3}} variant="contained" color="success">Login</Button>
          <Button sx={{marginTop: 6, borderRadius: 3}} color="warning">Change to Register</Button>

        </Box>
      </form>
    </div>
  );
}
