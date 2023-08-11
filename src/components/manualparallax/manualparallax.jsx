import React from "react";
import "./manualparallax.css";
import Habilidades from "../habilidades/habilidades";
import Estudios from "../estudios/estudios";
import { Typography } from "@mui/material";
import Proyectos from "../proyectos/proyectos";

export function ManualParallax() {
  return (
    <div>
      <div className="secciones">
        <Typography className="special2 texto shadows" variant="h4">
          PORTFOLIO
        </Typography>
        <Typography className="texto lights" variant="h6">
          Ignacio Adrian Perez
        </Typography>
        <Typography className="texto lights" variant="h6">
          Desarrollador Front-end
        </Typography>
        <Typography className="texto lights" variant="h6">
          Le deseo una agradable estadia
        </Typography>
      </div>
      <div className="bgimg-1">
        <Habilidades />
      </div>
      <div className="secciones2">
        <div className="bloke">
          <Typography variant="h6" color="green">
            Fortalezas
          </Typography>
          <Typography color="green">Perseverancia</Typography>
          <Typography color="green">Actitud positiva</Typography>
          <Typography color="green">
            con muchas ganas de aprender y mejorar
          </Typography>
        </div>
        <div className="bloke">
          <Typography variant="h6" color="red">
            Debilidades
          </Typography>
          <Typography color="red">
            falta de experiencia trabajando en equipos
          </Typography>
          <Typography color="red">poca experiencia en el ambito</Typography>
          <Typography color="red">algo timido</Typography>
        </div>
      </div>
      <div className="bgimg-2">
        <Estudios />
      </div>
      <div className="secciones">Sobre Mi:</div>
      <div className="bgimg-3">
        <Proyectos />
      </div>
    </div>
  );
}
