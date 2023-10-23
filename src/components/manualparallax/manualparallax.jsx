import React from "react";
import "./manualparallax.css";
import Habilidades from "../habilidades/habilidades";
import Estudios from "../estudios/estudios";
import { Box, Button, Typography } from "@mui/material";
import Proyectos from "../proyectos/proyectos";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BackToTopButton from "../ButtonToTop/BackToTopButton";

export function ManualParallax() {
  return (
    <div>
      <div className="secciones">
        <nav>
          <ul className="flexnav blanc texto spacio">
            <li className="underline-hover"><a className="blanc" href="#habilidades">Habilidades</a></li>
            <li className="underline-hover"><a className="blanc" href="#estudios">Estudios</a></li>
            <li className="underline-hover"><a className="blanc" href="#proyectos">Proyectos</a></li>
          </ul>
        </nav>
        <Typography className="texto" color="white" variant="h3">
          SEAN BIENVENIDOS A MI:
        </Typography>
        <Typography className="texto neon-text" color="white" component="h1" variant="h2">
          PORTFOLIO
        </Typography>
        <Typography className="texto" color="white" variant="h5" mt={7}>
          Contacto:
        </Typography>
        <Box mt={2}>
        <a href="https://drive.google.com/file/d/12aUbm3ffrthEJPnJMeg3w7nQCPf5KWTI/view?usp=drivesdk" target="_blank"><Button size="large" startIcon={<AccountBoxIcon />}>CV</Button></a>
        <a href="https://w.app/VixgXJ" target="_blank"><Button size="large" startIcon={<WhatsAppIcon />}>Whatsapp</Button></a>
        <a href="https://github.com/Ignacio08Adrian" target="_blank"><Button size="large" startIcon={<GitHubIcon />}>Github</Button></a>
        <a href="https://www.linkedin.com/in/ignacio-perez-073348244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Button size="large" startIcon={<LinkedInIcon />}>Linkedin</Button></a>
        </Box>
        <Typography className="texto" color="white" mt={13}>
          {" "}
          ¡Hola! Soy Ignacio, un apasionado desarrollador Front End de 21 años.
          Tengo una sólida base en tecnologías web fundamentales como HTML, CSS
          y JavaScript, además de habilidades avanzadas en React. Mi objetivo es
          crear interfaces de usuario intuitivas y atractivas, siempre buscando
          la mejor experiencia para el usuario. Siempre estoy ansioso por
          aprender y aceptar nuevos desafíos en el mundo del desarrollo web.
        </Typography>
        <BackToTopButton/>
      </div>
      <div className="secciones2"></div>
      <div className="bgimg-1" id="habilidades">
        <Habilidades />
      </div>
      <div className="secciones2"></div>
      <div className="bgimg-2" id="estudios">
        <Estudios />
      </div>
      <div className="secciones2" id="proyectos"></div>
      <div className="bgimg-3">
        <Proyectos />
      </div>
    </div>
  );
}
