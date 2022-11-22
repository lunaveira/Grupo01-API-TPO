import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  console.log(props)
  const { id, updateLista } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {

    fetch("http://localhost:8080/clases/" + id,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN_USER')
      },
      method: "DELETE"
    })
    .then(async function (res) {

      if(res.status !== 200){
        const data =  await res.json();
        alert(data.err)
      }
      else{
        setOpen(true);
        updateLista()
      }
    })
    .catch(function (res) { 
        alert("ERROR AL BORRAR")
     }).finally(() => {
      
    })

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        x
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Clase borrada!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La clase a sido eliminada exitosamente
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
