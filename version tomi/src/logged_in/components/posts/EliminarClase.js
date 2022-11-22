import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import swal from 'sweetalert';




export default function MenuPopupState() {
 
   swal({
      title: "Seguro que deseas eliminar la clase?",
      text: "Una vez que la elimines no podras recuparla!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Tu clase ha sido eliminada!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });


  
}
