import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";

function Service() {
  return (
    <Container sx={{ my: 20 }}>
      <Box
        sx={{ borderRadius: "20px", backgroundColor: "#171717", height: 400 }}
      >
        <Grid container spacing={5}>
          <Grid item xs={4} md={6} sx={{ color: "#fff", align: "center" }}>
            <img src="images/nuro.png" alt="Nuro" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Service;
