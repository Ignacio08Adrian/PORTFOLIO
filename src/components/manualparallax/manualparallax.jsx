import React from "react";
import "./manualparallax.css";
import Habilidades from "../habilidades/habilidades";
import Estudios from "../estudios/estudios";
import { Typography } from "@mui/material";

export function ManualParallax() {
  return (
    <div>
      <div className="secciones">
        <Typography className="special2 texto" variant="h4">
          PORTFOLIO
        </Typography>
        <Typography className="texto" variant="h6">
          Ignacio Adrian Perez
        </Typography>
        <Typography className="texto" variant="h6">
          Desarrollador Front-end
        </Typography>
        <Typography className="texto" variant="h6">
          Le deseo una agradable estadia
        </Typography>
      </div>
      <div className="bgimg-1">
        <Habilidades />
      </div>
      <div className="secciones"></div>
      <div className="bgimg-2">
        <Estudios />
      </div>
    </div>
  );
}
