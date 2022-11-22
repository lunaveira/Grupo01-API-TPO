import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import BasicRating from "./Rating";
import SimpleSelect from "./SelectEstado";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Matemática'),
  createData('Inglés'),
  createData('Historia'),
  createData('Informática'),
  createData('Geografa'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Materia</TableCell>
            <TableCell align="right">Calificacion</TableCell>
            <TableCell align="right">Comentario</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.Materia}</TableCell>
              <TableCell align="center"><BasicRating></BasicRating> </TableCell>
           
              <TableCell align="center"><TextField
  variant="outlined"
  margin="dense"
  size="small"
  required
  label="Comentario"
  autoFocus
  autoComplete="off"
  FormHelperTextProps={{ error: true }}
/> </TableCell>

              <TableCell align="right"><SimpleSelect></SimpleSelect></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


