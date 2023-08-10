import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./estudios.css";

function Estudios() {
  return (
    <>
      <div>
        <Typography className="full-color jello-vertical" variant="h3">
          Estudios
        </Typography>
        <Typography variant="h5" className="blanc">
          Aqui se encuentran mis estudios:
        </Typography>
        <div className="center">
          <Card sx={{ minWidth: 105, maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Primario Y secundario
              </Typography>
              <Typography variant="subtitule">
                primario en la escuela monseñor Tomas Juan solari y secundario
                orientado a bachillerato en el colegio gustavo adolfo becquer
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="area-grid flexs center">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Logo coderhouse, academia de cursos online para programador y otras area"
              height="140"
              image="https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Desarrollo web
              </Typography>
              <Typography variant="subtitule">
                Este fue mi primer curso en coder house donde abarcamos html,
                css, sass, boostrap y el uso de Github
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://i.imgur.com/wnpUIzg.png" target="_blank">
                <Button size="big">Ver certificado</Button>
              </a>
              <Button size="small">Proyecto del curso</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Logo coderhouse, academia de cursos online para programador y otras area"
              height="140"
              image="https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Javascript
              </Typography>
              <Typography variant="subtitule">
                en este curso aprendi principalmente el uso de Javascript, como
                manejar array, filtros y otras herramientas
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://i.imgur.com/32VbBBJ.png" target="_blank">
                <Button size="big">Ver certificado</Button>
              </a>
              <a href=" https://jsproyect.vercel.app/" target="_blank">
                <Button size="small">Proyecto del curso</Button>
              </a>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Logo coderhouse, academia de cursos online para programador y otras area"
              height="140"
              image="https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React
              </Typography>
              <Typography variant="subtitule">
                En este curso me enseñaron principalmente sobre React,
                React-Router-Dom, Vite y Material UI
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://i.imgur.com/3XqRYEX.png" target="_blank">
                <Button size="big">Ver certificado</Button>
              </a>
              <Button size="small">Proyecto del curso</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Estudios;
