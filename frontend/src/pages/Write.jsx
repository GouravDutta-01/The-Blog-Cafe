import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { AddCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  TextareaAutosize,
  createTheme,
} from "@mui/material";
import React from "react";

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
  const url =
    "https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_640.jpg";
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Image src={url} alt="" />
        <StyledFormControl>
          <label htmlFor="fileInput">
            <AddCircle fontSize="large" color="success" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <InputTextField placeholder="Add Blog Title" />

          <Button
            variant="contained"
            color="success"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                borderRight: 10,
              },
            })}
          >
            Publish
          </Button>
        </StyledFormControl>
        <Textarea
          minRows={5}
          placeholder="Add Blog Description"
          name="description"
        />
      </Container>
    </ThemeProvider>
  );
}
