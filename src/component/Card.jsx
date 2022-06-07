import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import theme from "../utils/theme";
import { Typography } from "@mui/material";

function Card() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#ffff" }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8} md={6}>
          <Typography variant="h4 ">
            {" "}
            ANNOTATE CONTENT & LANGUAGE
            <Typography variant="h1">Gather Human Insight</Typography>
          </Typography>
        </Grid>
        <Grid item xs={8} md={6}></Grid>
      </Grid>
    </Box>
  );
}

export default Card;
