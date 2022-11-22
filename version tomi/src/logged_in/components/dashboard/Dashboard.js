import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import SettingsArea from "./SettingsArea";
import UserDataArea from "./UserDataArea";
import AccountInformationArea from "./AccountInformationArea";
import StatisticsArea from "./StatisticsArea";

import NavBar from "../navigation/NavBar";
import Balance from "../navigation/Balance";

import MessagePopperButton from "../navigation/MessagePopperButton";

import { Grid, TablePagination, Divider, Toolbar, Button, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions} from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import DeleteIcon from "@mui/icons-material/Delete";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import SimpleSelect from "./SelectEstado";







function createData(Nombre, Telefono, Mail, Horario, Mensaje) {
  return {
    Nombre, 
    Telefono, 
    Mail, 
    Horario, 
    Mensaje,
    
  };
}

let rows = [
  createData('Antonella Gacetua', 1167256184, 'antogacetua@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Lucia Naveira', 1167256184, 'naveiralucia@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Pablo Perez', 1167256184, 'pabloperez@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Juana Diaz', 1167256184, 'juanadiaz@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Lucas Lopez', 1167256184, 'llopez@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Federico Galvez', 1167256184, 'fedegalvez@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Matilde Chahin', 1167256184, 'mchahin@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Silvia Ruiz', 1167256184, 'silviaruiz@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Gonzalo Gomez', 1167256184, 'gonzagomez@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
  createData('Milagros Pilar', 1167256184, 'milipili@gmail.com', '14:00-18:00', "Me gustaria aprender con usted"),
];

const inputOptions = ["Estado", "Aceptada", "Finalizada", "Cancelada"];






function Dashboard(props) {

  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isDefaultLoading, setIsDefaultLoading] = useState(false);
  const [option1, setOption1] = useState("Estado");
  const [option2, setOption2] = useState("Estado");
  const [option3, setOption3] = useState("Estado");
  const [option4, setOption4] = useState("Estado");
  const [option5, setOption5] = useState("Estado");
  const [option6, setOption6] = useState(7500);

  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const {
    selectDashboard,
    CardChart,
    statistics,
    toggleAccountActivation,
    pushMessageToSnackbar,
    targets,
    setTargets,
    isAccountActivated,
    messages,
    selectedTab,
    openAddBalanceDialog,
    classes,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <body>
       <NavBar
        selectedTab={selectedTab}
        messages={messages}
        openAddBalanceDialog={openAddBalanceDialog}
      />

<Fragment>
      

      <MessagePopperButton open={handleClickOpen}></MessagePopperButton>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Bloquear comentario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese los motivos del bloqueo para poder notificarlo al usuario.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descargo"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
     
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Telefono</TableCell>
              <TableCell align="right">Mail</TableCell>
              <TableCell align="right">Horario</TableCell>
              <TableCell align="right">Mensaje</TableCell>
              <TableCell align="right">Eliminar</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                
                <TableCell align="right">{row.Nombre}</TableCell>
                <TableCell align="right">{row.Telefono}</TableCell>
                <TableCell align="right">{row.Mail}</TableCell>
                <TableCell align="right">{row.Horario}</TableCell>
                <TableCell align="right">{row.Mensaje}</TableCell>
                <TableCell align="right"><SimpleSelect></SimpleSelect></TableCell>
               
    
                
              </TableRow> 
   
            ))}
            
          </TableBody>

         
          
          
        </Table>
      </TableContainer>
     
    
     




    </Fragment>

    

  
    

    </body>



 

    
  );
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default Dashboard;
