import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./habilidades.css";

function Habilidades() {
  return (
    <>
      <div>
        <Typography className="neon-text" variant="h3">
          HABILIDADES
        </Typography>
        <Typography variant="h5" className="blanc">
          Gracias a los cursos y buscando de manera autodidacta, aprendi el uso
          de ciertas herramientas como lo son:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              HTML
            </Typography>
            <img
              src="../../html.png"
              width="60"
              height="60"
              alt="logo de HTML"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              CSS
            </Typography>
            <img
              src="../../css-3.png"
              width="60"
              height="60"
              alt="logo de CSS"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              Boostrap
            </Typography>
            <img
              src="../../bootstrap_plain_wordmark_logo_icon_146620.png"
              width="60"
              height="60"
              alt="logo de Boostrap"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              SASS
            </Typography>
            <img
              src="../../logo.svg"
              width="60"
              height="60"
              alt="logo de SASS"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              Github
            </Typography>
            <img
              src="../../logo_github_icon_143196.png"
              width="60"
              height="60"
              alt="logo de Github"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              Javascript
            </Typography>
            <img
              src="../../javascript_icon_130900.png"
              width="60"
              height="60"
              alt="logo de Javascript"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              Typescript
            </Typography>
            <img
              src="../../file_type_typescript_official_icon_130107.png"
              width="60"
              height="60"
              alt="Logo de typescript"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              React
            </Typography>
            <img
              src="../../icons8-reaccionar-80.png"
              width="60"
              height="60"
              alt="Logo de React"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              Material UI
            </Typography>
            <img
              src="../../icons8-material-ui-96.png"
              width="60"
              height="60"
              alt="Logo de material-UI"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" className="blanc">
              Vite
            </Typography>
            <img
              src="../../vite.svg"
              width="60"
              height="60"
              alt="logo de Vite"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Habilidades;
