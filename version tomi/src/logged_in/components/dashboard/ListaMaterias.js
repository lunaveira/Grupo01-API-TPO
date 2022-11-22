import * as React from 'react';
import { useState } from "react";
import FormDialog from "./BotonContratar";
import PropTypes from "prop-types";


import { red } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Select, MenuItem, Grid, InputLabel, FormControl, TextField, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Collapse } from "@mui/material";

function createData(Materia, Profesor, Tipo, Frecuencia, Duracion, Calificacion, Costo, id) {
    return {
      Materia, 
      Profesor, 
      Tipo, 
      Frecuencia, 
      Duracion,
      Calificacion,
      Costo,
      id
    };
  }
  let rows = [
    createData('Matemática', 'Paula Sarasa', 'Individual', 'Semanal', 2, 3, '$1000'),
    createData('Inglés', 'Tomas Malio', 'Grupal', 'Unica', 2, 4, '$1000'),
    createData('Informática', 'Ricardo Thompson', 'Individual', 'Semanal', 2, 5, '$1000'),
    createData('Historia', 'Omar Cuarterolo', 'Grupal', 'Mensual', 2, 5, '$1000'),
    createData('Inglés', 'Juan Valassina', 'Individual', 'Semanal', 2, 3, '$1000'),
    createData('Historia', 'Ricardo Whebe', 'Individual', 'Unica', 2, 4, '$1000'),
    createData('Literatura', 'Rodolfo Lascano', 'Grupal', 'Unica', 2, 2,'$1000'),
    createData('Ingles', 'Sarasa', 'Individual', 'Semanal', 2, 4, '$1000'),
    createData('Matemática', 'Gabriela Guido', 'Individual', 'Semanal', 2, 1, '$1000'),
    createData('Informática', 'Sarasa', 'Individual', 'Semanal', 2, 1, '$1000'),
  ];
export default function BasicTable(props) {
    const [searchValue, setSearchValue] = useState("")
    const [searchValueTipo, setSearchValueTipo] = useState("")
    const [searchValueFrec, setSearchValueFrec] = useState("")
    const [calorieValue, setCalorieValue] = useState(0)

    const [openModal, setOpenModal] = useState(false)
    
    const [idClaseSeleccionada, setIdClaseSeleccionada] = useState(null)
  

    const handleChange = (e) => {
      setSearchValue(e.target.value)
    }

    const contratarClase = (row) => {
     
      setOpenModal(true)
      setIdClaseSeleccionada(row._id)
    }

    return (
      <>
      <Grid container spacing={2} style={{marginBottom: '2.5%'}}>
        <Grid item xs={8}>
            <FormControl sx={{ m: 1, width: '100%' }} size="small">
            <InputLabel id="materias-label">Materias disponibles</InputLabel>
              <Select
                labelId="materias-select-small"
                id="materias-select-small"
                value={searchValue}
                label="Materia"
                onChange={handleChange}
              >
                <MenuItem style={{display: 'grid'}} value={""}>Ninguno</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"Matemática"}>Matemática</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"Informática"}>Informática</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"Historia"}>Historia</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"Literatura"}>Literatura</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"Inglés"}>Inglés</MenuItem>
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: '100%' }} size="small">
            <InputLabel id="tipo-de-clase-label">Tipo de Clase</InputLabel>
              <Select
                labelId="tipo-de-clase-select-small"
                id="tipo-de-clase-select-small"
                value={searchValueTipo}
                label="Tipo de Clase"
                onChange={e => setSearchValueTipo(e.target.value)}
              >
                <MenuItem style={{display: 'grid'}} value={""}>Todos</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"Individual"}>Individual</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"Grupal"}>Grupal</MenuItem>
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: '100%' }} size="small">
            <InputLabel id="frecuencia-label">Frecuencia</InputLabel>
              <Select
                labelId="frecuencia-select-small"
                id="frecuencia-select-small"
                value={searchValueFrec}
                label="Frecuencia"
                onChange={e => setSearchValueFrec(e.target.value)}
              >
                <MenuItem style={{display: 'grid'}} value={""}>Todos</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"semanal"}>Semanal</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"unica"}>Única</MenuItem>
                <MenuItem style={{display: 'grid'}} value={"mensual"}>Mensual</MenuItem>
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: '100%' }} size="small">
              <TextField
                label="Calificacion mayor a"
                id="calificacion-size-small"
                size="small"
                value={calorieValue}
                onChange={e => setCalorieValue(e.target.value)}
              />
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: '100%' }} size="small">
                <FormDialog/>
            </FormControl>
        </Grid>
      </Grid>
      <Grid container>
      {rows.filter(function (el)
                {
                  return el.Materia.match(new RegExp(searchValue, "i")) &&
                        el.Tipo.match(new RegExp(searchValueTipo, "i")) &&
                        el.Frecuencia.match(new RegExp(searchValueFrec, "i")) &&
                         el.Calificacion >= calorieValue;
                }
                ).map((row) => (
                  <Card sx={{ maxWidth: 345, marginRight: '5%', marginBottom: '5%' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {row.Profesor.substring(0,1)}
                      </Avatar>
                    }
                    title={row.Profesor}
                    subheader={row.Tipo}
                  />
                  <CardMedia
                    component="img"
                    height="164"
                    image="https://www.educalinkapp.com/blog/wp-content/uploads/2021/03/sumala-chidchoi-132316259_m-675x450.jpg"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                       Esta materia será de forma {row.Tipo} y te buscaremos ayudarte a pasar Tus Clases.
                    </Typography>
                  </CardContent>    
                  <CardActions disableSpacing>
                    <IconButton aria-label="Contratar">
                      <ShoppingCartIcon onClick={() => contratarClase(row)} />
                    </IconButton>                
                  </CardActions>        
                </Card>              
            ))}         
      </Grid>

      { <FormDialog
      openModal={openModal}
      id={idClaseSeleccionada}
      closeModal={setOpenModal}
       /> }
         
      </>
    );
  }
  BasicTable.propTypes = {
    openAddPostModal: PropTypes.func.isRequired,
  };