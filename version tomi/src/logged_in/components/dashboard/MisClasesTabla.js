
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Button,
  Accordion,
  AccordionSummary,
  Typography,
  ListItemText,
  OutlinedInput,
  AccordionDetails,
  MenuItem,
  FormControl,
  Select,
  Box,
  TextField,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Bordered from "../../../shared/components/Bordered";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import BasicRating from "./Rating";
import TypesExample from "./EstadoComentario";

import CustomizedSelects from "./EstadoDeClase";
import { useEffect } from 'react';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(clase, comentario, EstadoComentario, rating, EstadoClase) {
  return { clase, comentario, EstadoComentario, rating, EstadoClase };
}

const rows = [
  // createData('Funciones Binomiales'),
  // createData('Introduccion a Python'),
  // createData('Bases de datos y SQL'),
  // createData('POO con Java'),
  // createData('Probabilidad y Estadistica'),
];

export default function DenseTable(props) {
  const classes = useStyles();

  const { pushMessageToSnackbar } = props;
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isDefaultLoading, setIsDefaultLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/contrataciones/byAlumno",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN_USER')
      },
      method: "GET",
      
    })
    .then(async function (res) {

      const data = await res.json();
      console.log(data);
    })
    .catch(function (res) {  }).finally(() => {
   
    })

  }, []);

   

  const onSubmit = useCallback(() => {
    setIsSaveLoading(true);
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been saved",
      });
      setIsSaveLoading(false);
    }, 1500);
  }, [setIsSaveLoading, pushMessageToSnackbar]);

  return (

    
    <TableContainer component={Paper}>

<Button
variant="contained"
color="secondary"
alignItems="right"
disabled={isSaveLoading || isDefaultLoading}
onClick={onSubmit}
>
Save {isSaveLoading && <ButtonCircularProgress />}
</Button>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Clase</TableCell>
            <TableCell align="center">Cometarios</TableCell>
            <TableCell align="center">Estado de comentario</TableCell>
            <TableCell align="center">Calificacion</TableCell>
            <TableCell align="center">Estado de clase</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.clase}>
              <TableCell component="th" scope="row">
                {row.clase}
              </TableCell>
              <TableCell align="center"><TextField
        variant="outlined"
        margin="dense"
        size="small"
        required
        label="Comentario"
        autoFocus
        autoComplete="off"
        FormHelperTextProps={{ error: true }}
      /></TableCell>
              <TableCell align="center"><TypesExample></TypesExample></TableCell>
              <TableCell align="center"><BasicRating/></TableCell>
              <TableCell align="center"><CustomizedSelects></CustomizedSelects></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

 

     

    </TableContainer>





  );

  
}
