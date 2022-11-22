import React, { Fragment, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  Box,
  TextField,
} from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import CloseIcon from "@mui/icons-material/Close";
import Bordered from "../../../shared/components/Bordered";
import ImageCropperDialog from "../../../shared/components/ImageCropperDialog";

import BasicTextFields from "./TextFieldAgregar";

const styles = (theme) => ({
  floatButtonWrapper: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1000,
  },
  inputRoot: {
    width: 190,
    "@media (max-width:  400px)": {
      width: 160,
    },
    "@media (max-width:  360px)": {
      width: 140,
    },
    "@media (max-width:  340px)": {
      width: 120,
    },
  },
  uploadIcon: {
    fontSize: 48,
    transition: theme.transitions.create(["color", "box-shadow", "border"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  imgWrapper: { position: "relative" },
  img: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: theme.shape.borderRadius,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  uploadText: {
    transition: theme.transitions.create(["color", "box-shadow", "border"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px",
  },
  emojiTextArea: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: -1,
  },
  dNone: {
    display: "none",
  },
});

const inputOptions = ["None", "Slow", "Normal", "Fast"];

function AddPostOptions(props) {
  const {
    Dropzone,
    classes,
    files,
    deleteItem,
    onDrop,
    EmojiTextArea,
    ImageCropper,
    DateTimePicker,
    cropperFile,
    onCrop,
    onCropperClose,
    uploadAt,
    onChangeUploadAt,
    onChangeOptions,
    inputsChangeValue
  } = props;
  const [option1, setOption1] = useState("None");
  const [option2, setOption2] = useState("None");
  const [option3, setOption3] = useState("None");
  const [option4, setOption4] = useState("None");
  const [option5, setOption5] = useState("None");


  useEffect(() => {

    inputsChangeValue({
      option1,
      option2,
      option3,
      option4,
      option5
    })

    console.log("HOLI")

  },[option1,option2,option3,option4,option5])



  const handleChange = useCallback(
    (stateName,event) => {
      const { value } = event.target;
      switch (stateName) {
        case "option1":
          setOption1(value);
          break;
        case "option2":
          setOption2(value);
          break;
        case "option3":
          setOption3(value);
          break;
        case "option4":
          setOption4(value);
          break;
        case "option5":
          setOption5(value);
          break;
        default:
          throw new Error("No branch selected in switch-statement.");
      }
    },
    [setOption1, setOption2, setOption3, setOption4, setOption5 ]
  );

  const printFile = useCallback(() => {
    if (files[0]) {
      return (
        <div className={classes.imgWrapper}>
          <img
            alt="uploaded item"
            src={files[0].preview}
            className={classes.img}
            style={{ height: 148 }}
          />
          <div className={classes.floatButtonWrapper}>
            <IconButton onClick={deleteItem} size="large">
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      );
    }
    return (
      <Dropzone accept="image/png, image/jpeg" onDrop={onDrop} fullHeight>
        <span className={classes.uploadText}>
          Click / Drop file <br /> here
        </span>
      </Dropzone>
    );
  }, [onDrop, files, classes, deleteItem]);

  const inputs = 
    [
      {
        state: option1,
        label: "Nombre",
        stateName: "option1",
      },
      {
        state: option2,
        label: "Materia",
        stateName: "option2",
      },
      {
        state: option3,
        label: "Duracion",
        stateName: "option3",
      },
      {
        state: option4,
        label: "Frecuencia",
        stateName: "option4",
      },
      {
        state: option5,
        label: "Costo",
        stateName: "option5",
      },
    ];

  return (
    <Fragment>
      {ImageCropper && (
        <ImageCropperDialog
          open={cropperFile ? true : false}
          ImageCropper={ImageCropper}
          src={cropperFile ? cropperFile.preview : ""}
          onCrop={onCrop}
          onClose={onCropperClose}
          aspectRatio={4 / 3}
        />
      )}
      <Typography paragraph variant="h6">
        Registro de clases
      </Typography>
      <Typography paragraph variant="h6">
        Caracteristicas
      </Typography>
      <List disablePadding>
        <Bordered disableVerticalPadding disableBorderRadius>
          {inputs.map((element, index) => (
            <ListItem
              className="listItemLeftPadding"
              disableGutters
              divider={index !== inputs.length - 1}
              key={index}
            >
              <ListItemText>
                <Typography variant="body2">{element.label}</Typography>
              </ListItemText>
              <FormControl variant="outlined">
                <ListItemSecondaryAction>
                  <BasicTextFields onChangeText={(e) => handleChange(element.stateName,e)} ></BasicTextFields>
                </ListItemSecondaryAction>
              </FormControl>
            </ListItem>
          ))}
        </Bordered>
      </List>
    </Fragment>
  );
}

AddPostOptions.propTypes = {
  onEmojiTextareaChange: PropTypes.func,
  DateTimePicker: PropTypes.elementType,
  EmojiTextArea: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  classes: PropTypes.object,
  cropperFile: PropTypes.object,
  onCrop: PropTypes.func,
  onCropperClose: PropTypes.func,
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func,
  onDrop: PropTypes.func,
  value: PropTypes.string,
  characters: PropTypes.number,
  uploadAt: PropTypes.instanceOf(Date),
  onChangeUploadAt: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(AddPostOptions);
