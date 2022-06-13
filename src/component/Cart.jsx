import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import {
  Typography,
  Container,
  Divider,
  CardContent,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";

const text1 = [
  "Retrive human insights for search relevance, ecommerce, natural langauge processing, audio transcription, document processing and more. Operational excellence augmented by technology enables us to exceed demanding qualtiy, cost, and latency requirements",
];

const text2 = [
  "Annotate large volumes of 3D sensor, image, and video data at high throughput. ML-powered pre-labeling and an automated quality assurance system ensure high quality annotations for the most safety critical applications.",
];

const style = {
  card: {
    background: "linear-gradient(to right bottom, #430089, #82ffa1)",
  },
};

function Cart() {
  return (
    <Container>
      <Grid container spacing={4} sx={{ my: 10 }}>
        <Grid item xs={12} md={6} sx={{ color: "#fff", textAlign: "left" }}>
          <Typography sx={{ color: "#909090" }}>
            ҮЙЛЧИЛГЭЭ: ВЭБСАЙТ 2.0
          </Typography>
          <Typography variant="h2" sx={{ mt: 2 }}>
            Вэбсайт Хөгжүүлэтийн Баг
          </Typography>
          <p>{text1}</p>
          <Divider sx={{ my: 6, backgroundColor: "#fff" }} />
          <Button variant="text" size="medium" endIcon={<ArrowForwardIcon />}>
            Дэлгэрэнгүй
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "20px" }}>
            <CardContent
              sx={{
                width: 400,
                height: 370,
                backgroundColor: "#fff",
              }}
            ></CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ my: 10 }}>
        <Grid item xs={12} md={6} sx={{ color: "#fff" }}>
          <Card sx={{ borderRadius: "20px" }}>
            <CardContent
              sx={{ width: 400, height: 370, backgroundColor: "#fff" }}
            ></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ color: "#fff", textAlign: "left" }}>
          <Typography sx={{ color: "#909090" }}>
            ANNOTATE COMPUTER VISION
          </Typography>
          <Typography variant="h2" sx={{ mt: 2 }}>
            Scale Advanced Annotations
          </Typography>
          <p>{text2}</p>
          <Divider sx={{ my: 6, backgroundColor: "#fff" }} />
          <Button variant="text" size="medium" endIcon={<ArrowForwardIcon />}>
            Холбогдох
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
