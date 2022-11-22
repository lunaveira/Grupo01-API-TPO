import React from 'react';
import swal from 'sweetalert'

export default function Descargo() {

    return (

        swal("Write something here:", {
            content: "input",
          })
          .then((value) => {
            swal(`You typed: ${value}`);
          })

    )

 
   
 }