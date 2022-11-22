import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, TablePagination, Divider, Toolbar, Typography, Button, Paper, Box } from "@mui/material";
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
import AlertDialog from "./Delete";


const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between",
  },
};

const rowsPerPage = 25;


function createData(Nombre, Materia, Duracion, Frecuencia, Costo,id) {
  return {
    Nombre,
    Materia,
    Duracion,
    Frecuencia,
    Costo,
    id
  };
}

let rows = [

];



function PostContent(props) {
  const {
    pushMessageToSnackbar,
    setPosts,
    posts,
    openAddPostModal,
    classes,
  } = props;
  const [page, setPage] = useState(0);
  const [isDeletePostDialogOpen, setIsDeletePostDialogOpen] = useState(false);
  const [isDeletePostDialogLoading, setIsDeletePostDialogLoading] = useState(
    false
  );

  const [clases, setClases] = useState([])


  const updateLista = useCallback(() => {

    fetch("http://localhost:8080/clases",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('TOKEN_USER')
        },
        method: "GET"
      })
      .then(async function (res) {

        const clases = await res.json();
        console.log(clases)

        const arr = []

        clases.forEach(clase => {
          arr.push(createData(clase.nombre, clase.materia, clase.duracion, clase.frecuencia, clase.costo,clase._id))
        })

        setClases(arr)

      })
      .catch(function (res) { }).finally(() => {

      })
  },[])
  useEffect(() => {

    fetch("http://localhost:8080/clases",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('TOKEN_USER')
        },
        method: "GET"
      })
      .then(async function (res) {
        const clases = await res.json();
        console.log(clases)

        const arr = []

        clases.forEach(clase => {
          arr.push(createData(clase.nombre, clase.materia, clase.duracion, clase.frecuencia, clase.costo,clase._id))
        })

        setClases(arr)

      })
      .catch(function (res) { }).finally(() => {

      })
  }, [])

  const closeDeletePostDialog = useCallback(() => {
    setIsDeletePostDialogOpen(false);
    setIsDeletePostDialogLoading(false);
  }, [setIsDeletePostDialogOpen, setIsDeletePostDialogLoading]);

  const deletePost = useCallback(() => {
    setIsDeletePostDialogLoading(true);
    setTimeout(() => {
      const _posts = [...posts];
      const index = _posts.findIndex((element) => element.id === deletePost.id);
      _posts.splice(index, 1);
      setPosts(_posts);
      pushMessageToSnackbar({
        text: "Your post has been deleted",
      });
      closeDeletePostDialog();
    }, 1500);
  }, [
    posts,
    setPosts,
    setIsDeletePostDialogLoading,
    pushMessageToSnackbar,
    closeDeletePostDialog,
  ]);

  const onDelete = useCallback(() => {
    setIsDeletePostDialogOpen(true);
  }, [setIsDeletePostDialogOpen]);

  const handleChangePage = useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const printImageGrid = useCallback(() => {
    if (posts.length > 0) {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((post) => (
                <Grid item xs={6} sm={4} md={3} key={post.id}>
                  <SelfAligningImage
                    src={post.src}
                    title={post.name}
                    timeStamp={post.timestamp}
                    options={[
                      {
                        name: "Delete",
                        onClick: () => {
                          onDelete(post);
                        },
                        icon: <DeleteIcon />,
                      },
                    ]}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      );
    }
    return (
      <Box m={2}>
        <HighlightedInformation>
          No posts added yet. Click on &quot;NEW&quot; to create your first one.
        </HighlightedInformation>
      </Box>
    );
  }, [posts, onDelete, page]);

  return (
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Tus Clases</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={openAddPostModal}
          disableElevation
        >
          Agregar Clase
        </Button>
      </Toolbar>
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Nombre</TableCell>
              <TableCell >Materia</TableCell>
              <TableCell >Duracion</TableCell>
              <TableCell >Frecuencia</TableCell>
              <TableCell >Costo</TableCell>
              <TableCell >Eliminar</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {clases.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell >{row.Nombre}</TableCell>
                <TableCell >{row.Materia}</TableCell>
                <TableCell >{row.Duracion}</TableCell>
                <TableCell >{row.Frecuencia}</TableCell>
                <TableCell >{row.Costo}</TableCell>
                <TableCell ><AlertDialog  updateLista={updateLista} id={row.id} /></TableCell>
              </TableRow>

            ))}

          </TableBody>




        </Table>
      </TableContainer>
    </Paper>
  );
}

PostContent.propTypes = {
  openAddPostModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles)(PostContent);
