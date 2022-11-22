import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ListItemText, Button, Toolbar } from "@mui/material";




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    Nombre: 'Funciones',
    Materia:  'Matematica',
    Duracion: '2 horas',
    Frecuencia: 'semanal',
    Costo: '$500',
  },
  {
    Nombre: 'Funciones',
    Materia:  'Matematica',
    Duracion: '2 horas',
    Frecuencia: 'semanal',
    Costo: '$500',
  },
  {
    Nombre: 'Funciones',
    Materia:  'Matematica',
    Duracion: '2 horas',
    Frecuencia: 'semanal',
    Costo: '$500',
  },
];



function agregarclase(){
  return rows.push({
    Nombre: 'bacterias',
    Materia:  'quimiica',
    Duracion: '2 horas',
    Frecuencia: 'semanal',
    Costo: '$500',
  })
}


export default function BasicTable() {
  const classes = useStyles();

  return (
    <body>
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Registro de clases"  />
      <Button
        variant="contained"
        color="secondary"
        onClick={agregarclase()}
        disableElevation
      >
        Agregar clase
      </Button>
    </Toolbar>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre&nbsp;</TableCell>
            <TableCell align="center">Materia</TableCell>
            <TableCell align="center">Duracion&nbsp;</TableCell>
            <TableCell align="center">Frecuencia&nbsp;</TableCell>
            <TableCell align="center">Costo&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Nombre}>
              <TableCell align="center" component="th" scope="row">
                {row.Nombre}
              </TableCell>
              <TableCell align="center">{row.Materia}</TableCell>
              <TableCell align="center">{row.Duracion}</TableCell>
              <TableCell align="center">{row.Frecuencia}</TableCell>
              <TableCell align="center">{row.Costo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </body>
  );
}
