import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import AddPost from "./AddPostAlumno";
import NavBar from "../navigationAlumno/NavBar";
import Balance from "../navigationAlumno/Balance";
import { Typography, Box } from "@mui/material";
import SettingsArea from "../dashboard/SettingsArea";

function PostsAlumno(props) {
  const {
    selectPosts,
    EmojiTextArea,
    ImageCropper,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    posts,
    setPosts,
    messages,
    selectedTab,
    openAddBalanceDialog,
  } = props;
  const [isAddPostPaperOpen, setIsAddPostPaperOpen] = useState(false);

  const openAddPostModal = useCallback(() => {
    setIsAddPostPaperOpen(true);
  }, [setIsAddPostPaperOpen]);

  const closeAddPostModal = useCallback(() => {
    setIsAddPostPaperOpen(false);
  }, [setIsAddPostPaperOpen]);

  useEffect(() => {
    selectPosts();
  }, [selectPosts]);

  if (isAddPostPaperOpen) {
    return (
      <body>
      <NavBar
          selectedTab={selectedTab}
          messages={messages}
          openAddBalanceDialog={openAddBalanceDialog}
      />
  
      <AddPost
        onClose={closeAddPostModal}
        EmojiTextArea={EmojiTextArea}
        ImageCropper={ImageCropper}
        Dropzone={Dropzone}
        DateTimePicker={DateTimePicker}
        pushMessageToSnackbar={pushMessageToSnackbar}
      />
      </body>
      );  
  }
  return (
    <body>
    <NavBar
          selectedTab={selectedTab}
          messages={messages}
          openAddBalanceDialog={openAddBalanceDialog}
    />
  
  <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Settings
        </Typography>
      </Box>
      <SettingsArea pushMessageToSnackbar={pushMessageToSnackbar} />
    </body> 
    );
}

PostsAlumno.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default PostsAlumno;
