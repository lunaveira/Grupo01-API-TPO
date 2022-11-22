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


const styles = (theme) => ({
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px",
  },
  dBlock: { display: "block" },
  listItemLeftPadding: {
    paddingRight: theme.spacing(3),
  },
  accordionDetails: {
    paddintTop: theme.spacing(0),
    display: "flex",
    justifyContent: "flex-end",
  },
 
  
  
});
const inputOptions = ["Estado", "Finalizada", "Cancelada"];

function Settings1(props) {
  const { classes, pushMessageToSnackbar } = props;
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isDefaultLoading, setIsDefaultLoading] = useState(false);
  const [option1, setOption1] = useState("Estado");
  const [option2, setOption2] = useState("Estado");
  const [option3, setOption3] = useState("Estado");
  const [option4, setOption4] = useState("Estado");
  const [option5, setOption5] = useState("Estado");
  const [option6, setOption6] = useState(7500);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name === "option6") {
        if (value > 7500 || value < 1000) {
          return;
        }
      }
      switch (name) {
        case "option1": {
          setOption1(value);
          break;
        }
        case "option2": {
          setOption2(value);
          break;
        }
        case "option3": {
          setOption3(value);
          break;
        }
        case "option4": {
          setOption4(value);
          break;
        }
        case "option5": {
          setOption5(value);
          break;
        }
        case "option6": {
          setOption6(value);
          break;
        }
        default:
          throw new Error("No branch selected in switch statement.");
      }
    },
    [setOption1, setOption2, setOption3, setOption4, setOption5, setOption6]
  );

  const resetState = useCallback(() => {
    setIsSaveLoading(false);
    setIsDefaultLoading(false);
    setOption1("Estado");
    setOption2("Estado");
    setOption3("Estado");
    setOption4("Estado");
    setOption5("Estado");
    setOption6(7500);
  }, [
    setIsSaveLoading,
    setIsDefaultLoading,
    setOption1,
    setOption2,
    setOption3,
    setOption4,
    setOption5,
    setOption6,
  ]);

  const onSetDefault = useCallback(() => {
    setIsDefaultLoading(true);
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been reset to default",
      });
      resetState();
    }, 1500);
  }, [pushMessageToSnackbar, resetState]);

  const onSubmit = useCallback(() => {
    setIsSaveLoading(true);
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been saved",
      });
      setIsSaveLoading(false);
    }, 1500);
  }, [setIsSaveLoading, pushMessageToSnackbar]);

  const inputs = [
    {
      state: option1,
      label: "Matematica",
      stateName: "option1",
    },
    {
      state: option2,
      label: "Historia",
      stateName: "option2",
    },
    {
      state: option3,
      label: "Informatica",
      stateName: "option3",
    },
    {
      state: option4,
      label: "Geografia",
      stateName: "option4",
    },
    {
      state: option5,
      label: "Ingles",
      stateName: "option5",
    },
  ];

  return (

    
    <List disablePadding>
<Bordered disableVerticalPadding disableBorderRadius
margin="normal">
  {inputs.map((element, index) => (
    <ListItem
      className="listItemLeftPadding"
      disableGutters
      divider
      key={index}
    >
      
      <ListItemText>
        <Typography variant="body2">{element.label}</Typography>
        
      </ListItemText>

      <ListItemText>
         <TypesExample></TypesExample>
      </ListItemText>


      
    
      <ListItemText>
      <TextField
        variant="outlined"
        margin="dense"
        size="big"
        required
        label="Comentario"
        autoFocus
        autoComplete="off"
        FormHelperTextProps={{ error: true }}
      />

      </ListItemText>

   

      <ListItemText>
<BasicRating
justifyContent="right"
/>

       

</ListItemText>

      
     
      <FormControl variant="outlined">
        <ListItemSecondaryAction
          className={classes.ListItemSecondaryAction}
        >
        
          <Select 
            value={element.state}
            onChange={handleChange}
            input={
              <OutlinedInput
                name={element.stateName}
                labelWidth={0}
                className={classes.numberInput}
                classes={{ input: classes.numberInputInput }}
              />
            }
            MenuProps={{ disableScrollLock: true }}
          >
            {inputOptions.map((innerElement) => (
              <MenuItem value={innerElement} key={innerElement}>
                {innerElement}
              </MenuItem>
            ))}
          </Select>
        </ListItemSecondaryAction>
        
      </FormControl>

    

     
    </ListItem>


    
  ))} 

         
       
</Bordered>
<Button
          variant="contained"
          color="secondary"
          alignItems="right"
          disabled={isSaveLoading || isDefaultLoading}
          onClick={onSubmit}
        >
          Save {isSaveLoading && <ButtonCircularProgress />}
        </Button>
</List>
    
  );
}

Settings1.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(Settings1);
