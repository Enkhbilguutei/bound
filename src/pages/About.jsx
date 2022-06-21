import { Typography } from "@mui/material";
import Header from "../component/common/Header";
import React from "react";
import { Card, Grid, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-Color">
        <Card
          sx={{
            maxWidth: "100%",
            height: "70vh",
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          }}
        >
          <Typography
            variant="h2"
            color="common.white"
            sx={{
              ml: 15,
              mr: 25,
              mt: 15,
            }}
          >
            Бидний эрхэм зорилго бол хөгжлийг хурдасгах явдал юм AI програмууд
            <Typography variant="h6" sx={{ mt: 5 }}>
              Илүү сайн өгөгдөл нь илүү гүйцэтгэлтэй загваруудыг бий болгодог.
              Гүйцэтгэлийн загварууд нь илүү хурдан байршуулахад хүргэдэг. Бид
              ML-ийн амьдралын мөчлөгийг бүхэлд нь удирдах эцсийн шийдлийг
              гаргаж өгснөөр хиймэл оюуны хөрөнгө оруулалтаас илүү сайн
              өгөгдөлтэй илүү хурдан үнэ цэнийг хүргэхэд тусалдаг.
            </Typography>
          </Typography>
        </Card>
      </div>
      <Typography
        textAlign="center"
        variant="h3"
        color="common.white"
        sx={{
          mt: 20,
        }}
      >
        <Typography variant="h3">San Francisco</Typography>
        <Typography>HEADQUARTERS</Typography>
      </Typography>
      <Grid
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Card
          sx={{
            width: "75%",
            mt: 10,
            height: 224,
            backgroundColor: "#212121",
          }}
        >
          <CardMedia height="150" />
          <CardContent>
            <Stack
              direction="row"
              sx={{
                my: 8,

                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" color="common.white">
                7.7B
              </Typography>
              <Typography color="common.white" variant="h4">
                Annotations To Date
              </Typography>
              <Typography color="common.white" variant="h4">
                1B+
              </Typography>
              <Typography color="common.white" variant="h4">
                2D and 3D Scenes Labeled
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          color: " #424242",
        }}
      >
        <Card align="center" sx={{ maxWidth: "75%", mt: 20 }}>
          <CardMedia height="150" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Customers
            </Typography>
            <Typography>
              We are proud to be trusted by leading companies to provide a
              data-centric, end-to-end solution to manage the entire ML
              lifecycle. Combining cutting edge technology with operational
              excellence, we help teams develop the highest-quality datasets
              because better data → better AI.
            </Typography>
            <Typography align="center">
              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: " #424242",

                  mt: 10,
                }}
              >
                Meet our costumers
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Typography variant="h3" color="common.white" sx={{ mt: 10, ml: 10 }}>
        Careers
      </Typography>
      <Typography variant="h5" color="common.white" sx={{ mt: 5 }}>
        Join us as we continue to accelerate the development of AI applications.
      </Typography>
    </>
  );
};

export default About;
