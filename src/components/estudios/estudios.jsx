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
        <Typography className="neon-text" variant="h3">
          Estudios
        </Typography>
        <Typography variant="h5" color="white">
          Aqui se encuentran mis estudios:
        </Typography>
        <div className="center">
          <Card className="backBonito" sx={{ minWidth: 105, maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" color="white" component="div">
                Primario Y secundario
              </Typography>
              <Typography variant="subtitule" color="white">
                primario en la escuela monseñor Tomas Juan solari y secundario
                orientado a bachillerato en el colegio gustavo adolfo becquer
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="area-grid flexs center">
          <Card className="backestudio" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="white"
                component="div"
              >
                Desarrollo web
              </Typography>
              <Typography variant="subtitule" color="white">
                Este fue mi primer curso en coder house donde abarcamos html,
                css, sass, boostrap y el uso de Github
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://i.imgur.com/wnpUIzg.png" target="_blank">
                <Button size="big">Ver certificado</Button>
              </a>
              <a
                href="https://ignacioperez33110-la-caldera-gamer.netlify.app/"
                target="_blank"
              >
                <Button size="small">Proyecto del curso</Button>
              </a>
            </CardActions>
          </Card>
          <Card className="backestudio" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="white"
                component="div"
              >
                Javascript
              </Typography>
              <Typography variant="subtitule" color="white">
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
          <Card className="backestudio" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="white"
                component="div"
              >
                React
              </Typography>
              <Typography variant="subtitule" color="white">
                En este curso me enseñaron principalmente sobre React,
                React-Router-Dom, Vite y Material UI
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://i.imgur.com/3XqRYEX.png" target="_blank">
                <Button size="big">Ver certificado</Button>
              </a>
              <a
                href="https://entrega-react-ignacio.vercel.app/"
                target="_blank"
              >
                <Button size="small">Proyecto del curso</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Estudios;
