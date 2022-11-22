import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    
   
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const {onChangeText} = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
   

      <TextField onChange={onChangeText} id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
    </form>
  );
}
