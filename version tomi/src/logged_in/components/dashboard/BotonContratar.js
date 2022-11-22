import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef, useEffect } from 'react';

export default function FormDialog({openModal, id, closeModal}) {
  const [open, setOpen] = React.useState(false);

  const contratarEmail = useRef();
  const contratarTelefono = useRef();
  const contratarHorario = useRef();
  const contratarMotivo = useRef();

  const [idClase, setidClase] = React.useState(null);


  useEffect (() => {    

    setidClase(id)
    setOpen(openModal)

    }, [openModal, id])
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeModal(false);
  };

  const handleEnviar = () => {
    fetch("http://localhost:8080/contrataciones",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          email: contratarEmail.current.value,
          telefono: contratarTelefono.current.value,
          horario: contratarHorario.current.value,
          motivo: contratarMotivo.current.value,
          idClase: idClase
          
        })
      })
      .then(async function (res) {

        const data = await res.json();
       
      })
      .catch(function (res) {  }).finally(() => {
       
      })
  };

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contratar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para contratar esta clase ingrese sus datos y el profesor lo estara contactando a la brevedad.
          </DialogContentText>
          <TextField
          inputRef={contratarEmail}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
         inputRef={contratarTelefono}
            autoFocus
            margin="dense"
            id="name"
            label="Telefono"
            type="telefono"
            fullWidth
            variant="standard"
          />
           <TextField
           inputRef={contratarHorario}
            autoFocus
            margin="dense"
            id="name"
            label="Horario"
            type="horario"
            fullWidth
            variant="standard"
          />
           <TextField
           inputRef={contratarMotivo}
            autoFocus
            margin="dense"
            id="name"
            label="Mensaje"
            type="mensaje"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleEnviar}>Enviar</Button>


        </DialogActions>
      </Dialog>
    </div>
  );
}
