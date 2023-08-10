import React from 'react';

function Contacto(){
    return(
        <>
         <div className='background'>
            <Typography className='full-color' variant='h1'>Portfolio</Typography>
            <Typography variant='h3'>Ignacio Perez</Typography>
            <Typography variant='h5'>Sea bienvenido y le deseo un buen dia</Typography>
            <Typography variant='h5'>En este portfolio encontraras mis:</Typography>
            <Stack direction="row" spacing={15}>
                <Button className='full-color space' variant="contained">estudios</Button>
                <Button className='full-color space' variant="contained">habilidades</Button>
                <Button className='full-color space' variant="contained">proyectos</Button>
                <Button className='full-color space' variant="contained">contacto</Button>
            </Stack>
         </div>
        </>
    )
}

export default Contacto;