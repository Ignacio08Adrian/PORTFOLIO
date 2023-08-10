import React from "react";
import "./home2.css";
import Habilidades from "../habilidades/habilidades";
import { Typography } from "@mui/material";
import Estudios from "../estudios/estudios";

function Home2() {
  return (
    <>
      <div className="backparallax">
        <section class="no-parallax section1">
          <div className="block">
            <Typography className="texto bounce-top" variant="h2">
              Portfolio
            </Typography>
            <Typography variant="h3" className="texto">
              Ignacio Perez
            </Typography>
            <Typography variant="h4" className="texto">
              Desarrollador Front-End
            </Typography>
            <Typography variant="h5" className="texto">
              Sea bienvenido y le deseo un buen dia
            </Typography>
          </div>
        </section>
        <section className="parallax bg section2">
          <Habilidades />
        </section>
        <section className="no-parallax section1">
          <Typography variant="h6" className="texto">
            Porque una pagina parallax? Me parecio un diseño elegante, original
            y bonito'
          </Typography>
        </section>
        <section class="parallax bg2 section2">
          <Estudios />
        </section>
      </div>
    </>
  );
}

export default Home2;
