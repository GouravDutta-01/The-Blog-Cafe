import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <Container
      sx={{
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography paragraph>
        Feel free to reach out to me through GitHub or LinkedIn. I would love to
        connect with you!
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            startIcon={<GitHubIcon />}
            href="https://github.com/GouravDutta-01"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/gourav-dutta-b85101253"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
