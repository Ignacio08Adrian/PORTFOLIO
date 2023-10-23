import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import "./proyectos.css";

function Proyectos() {
  return (
    <>
      <div>
        <Typography className="neon-text" variant="h3">
          Proyectos
        </Typography>
        <Typography color="white">
          Aqui se encuentran todos o la gran mayoria de proyectos que hice:
        </Typography>
        <div className="area-grid flexs center">
          <Card className="backproyecto" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="white"
                component="div"
              >
                Proyecto Desarrollo web
              </Typography>
              <Typography variant="body2" color="white">
                Esta fue la primera pagina que hice usando CSS, HTML y SASS la
                cual fue aprobada en el curso de Coderhouse
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://ignacioperez33110-la-caldera-gamer.netlify.app/"
                target="_blank"
              >
                <Button size="small">Ver proyecto</Button>
              </a>
              <a
                href="https://github.com/Ignacio08Adrian/TP-33010"
                target="_blank"
              >
                <Button size="small">Ver codigo del proyecto</Button>
              </a>
            </CardActions>
          </Card>
          <Card className="backproyecto" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="white"
                component="div"
              >
                Proyecto Pagina-basica
              </Typography>
              <Typography variant="body2" color="white">
                Esta fue una pagina que hice rapidamente para una conocida pero
                luego no se contacto mas conmigo y la pagina quedo con
                informacion de internet
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://enproceso.vercel.app/" target="_blank">
                <Button size="small">Ver proyecto</Button>
              </a>
              <a
                href="https://github.com/Ignacio08Adrian/paginabasica"
                target="_blank"
              >
                <Button size="small">Ver codigo del proyecto</Button>
              </a>
            </CardActions>
          </Card>
          <Card className="backproyecto " sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                color="white"
                gutterBottom
                variant="h5"
                component="div"
              >
                Proyecto Javascript
              </Typography>
              <Typography className="blanc" variant="body2" color="white">
                Este es mi tercer proyecto donde se uso sobretodo javascript el
                cual tambien fue aprobado por Coderhouse
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://jsproyect.vercel.app/" target="_blank">
                <Button size="small">Ver proyecto</Button>
              </a>
              <a
                href="https://github.com/Ignacio08Adrian/JSproyect"
                target="_blank"
              >
                <Button size="small">Ver codigo del proyecto</Button>
              </a>
            </CardActions>
          </Card>
          <Card className="backproyecto" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="white"
                component="div"
              >
                Proyecto React
              </Typography>
              <Typography variant="body2" color="white">
                Este fue mi cuarto proyecto usando principalmente React y
                Material UI el cual nuevamente fue aprobado por Coderhouse
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://entrega-react-ignacio.vercel.app/"
                target="_blank"
              >
                <Button size="small">Ver proyecto</Button>
              </a>
              <a
                href="https://github.com/Ignacio08Adrian/PreentregaReactIgnacio51180"
                target="_blank"
              >
                <Button size="small">Ver codigo del proyecto</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Proyectos;
