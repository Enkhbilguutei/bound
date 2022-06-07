import { Typography, Container } from "@mui/material";
import React from "react";

function Intro() {
  return (
    <div>
      <Container
        sx={{
          my: 5,
        }}
      >
        <Typography
          variant="h5"
          color="common.white"
          sx={{ textAlign: "justify" }}
        >
          ML DEVELOPMENT
        </Typography>
        <Typography
          variant="h2"
          color="common.white"
          sx={{ textAlign: "justify" }}
        >
          Data-Centric ML Lifecycle
        </Typography>
        <Typography
          variant="body1"
          color="common.white"
          sx={{ textAlign: "justify", my: 3 }}
        >
          "Scale’s mission is to accelerate the development of artificial
          intelligence. We do this by providing a data- <br />
          centric, end-to-end solution to manage the entire ML lifecycle",
        </Typography>
      </Container>
    </div>
  );
}

export default Intro;
