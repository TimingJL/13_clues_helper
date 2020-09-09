import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NoteIcon from "assets/icons/NoteIcon";

const useStyles = makeStyles(() => ({
  appBar: {
    background: "linear-gradient(to right, #AE4D2F, #3F2117)",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ handleOnOpenDialog }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          13 Clues
        </Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleOnOpenDialog}
        >
          <NoteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
