import React from "react";
import { Box } from "@mui/material";
import SinglePost from "../components/SinglePost";

export default function Single() {
  return (
    <Box display="flex" className="single">
      <SinglePost />
    </Box>
  );
}
