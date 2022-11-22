import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import FormDialog from "./DescargoBloqueo";
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



function MessageListItem(props) {
  const { message, divider } = props;
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
            src={hasErrorOccurred ? null : message.src}
            onError={handleError}
          />
        )}
      </ListItemAvatar>
      <ListItemText
        primary={message.text}
        secondary={`${formatDistance(message.date * 1000, new Date())} ago`}
      />
      <div class="botones">
      <Button 
      onClick = {FormDialog}
      > Bloquear   </Button>

      <Button 
      onClick = {DescriptionAlerts}
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
