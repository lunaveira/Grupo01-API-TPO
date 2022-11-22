import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import DescriptionAlerts from "./BloqueoCorrecto";


import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button
  
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import formatDistance from "date-fns/formatDistance";

import Descargo from "../navigationAlumno/DescargoPorBloquear";

import PopUpPublicar from "./PopUpPublicar";

import FormDialog from "./DescargoBloqueo";

const prueba = [
"lorem ipsum"
];


function MessageListItem(props) {
  const { message, prueba, divider, open } = props;
  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  const handleError = useCallback(() => {
    setHasErrorOccurred(true);
  }, [setHasErrorOccurred]);

  const styles = theme => ({
    botones: {
      display: "flex",
      paddingBottom: theme.spacing(3),
      maxWidth: 420
    },
    actions: {
      marginTop: theme.spacing(2)
    },
    
    dialogContent: {
      paddingTop: 0,
      paddingBottom: 0
    }
  });


  return (
    <ListItem divider={divider}>
      <ListItemAvatar>
        {hasErrorOccurred ? (
          <ErrorIcon color="secondary" />
        ) : (
          <Avatar
          />
        )}
      </ListItemAvatar>
      <ListItemText
        primary="Lorem Ipsum"
      />
      <div>
      <Button 
      onClick = {open}
      > Bloquear   </Button>

      <Button 
      onClick = {PopUpPublicar}
      > Publicar  </Button>
      </div>


      
    </ListItem>

    
  );
}





MessageListItem.propTypes = {
  message: PropTypes.object.isRequired,
  divider: PropTypes.bool,
  
};

export default MessageListItem;
