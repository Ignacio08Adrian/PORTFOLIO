import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div>
        <Typography className="texto bounce-top" variant="h2">
          Portfolio
        </Typography>
        <Typography variant="h3" className="border">
          Ignacio Perez
        </Typography>
        <Typography variant="h4" className="border">
          Desarrollador Front-End
        </Typography>
        <Typography variant="h5" className="border">
          Sea bienvenido y le deseo un buen dia
        </Typography>
        <Typography variant="h5" className="border">
          En este portfolio encontraras mis:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Button className="full-color space" variant="contained">
              estudios
            </Button>
          </Grid>
          <Grid item xs={6} md={4}>
            <Button className="full-color space" variant="contained">
              habilidades
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button className="full-color space" variant="contained">
              proyectos
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
