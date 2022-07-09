import { Typography, Container, Button, Stack } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Container sx={{ my: 14 }}>
      <Typography
        variant="h1"
        color="common.white"
        sx={{
          textAlign: "left",
          my: 5,

          justifyContent: "center",
          align: "left",
        }}
      >
        Better Data. <br />
        Better AI.
      </Typography>
      <Typography
        variant="body1"
        color="common.white"
        sx={{ textAlign: "justify" }}
      >
        Better data leads to more performant models. Performant models lead to
        faster <br />
        deployment. Deliver value from your AI investments faster with better
        data.
      </Typography>
      <Stack direction="row" spacing={2} sx={{ my: 5 }}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderRadius: 5,
            justifyContent: "flex-start",
            display: "inline-block",
          }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderRadius: 5,
            justifyContent: "flex-start",
            display: "inline-block",
          }}
        >
          talk to sale
        </Button>
      </Stack>
    </Container>
  );
}

export default Banner;
