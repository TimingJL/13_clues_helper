/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import backgroundImagePath from "assets/images/backgroundImage.jpg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "linear-gradient(to bottom, #AE4D2F, #3F2117)",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  textArea: {
    width: "90%",
    fontSize: 18,
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 4,
  },
}));

const TextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImagePath});
  background-size: cover;
  background-position: center;
  height: 100%;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = memo(
  ({ open, handleClose, noteProps }) => {
    const classes = useStyles();
    const { noteContent, setNoteContent } = noteProps;
    const handleOnChangeValue = (event) => {
      setNoteContent(event.target.value);
    };
    const handleOnCleanNote = () => {
      setNoteContent("");
    };

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Note
            </Typography>
            <Button autoFocus color="inherit" onClick={handleOnCleanNote}>
              Clean
            </Button>
          </Toolbar>
        </AppBar>
        <TextArea>
          <TextareaAutosize
            rows={10}
            placeholder="筆記本..."
            value={noteContent}
            onChange={handleOnChangeValue}
            className={classes.textArea}
          />
        </TextArea>
      </Dialog>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.open === nextProps.open &&
      prevProps.noteProps.noteContent === nextProps.noteProps.noteContent
    );
  }
);

export default FullScreenDialog;
