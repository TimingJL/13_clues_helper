import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NoteIcon from "assets/icons/NoteIcon";
import PlayerSelect from "./PlayerSelect";

const useStyles = makeStyles(() => ({
  appBar: {
    background: "linear-gradient(to right, #AE4D2F, #3F2117)",
  },
  title: {
    flexGrow: 1,
  },
  buttonsGroup: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function Header({
  handleOnOpenDialog,
  player,
  handleOnChangePlayer,
}) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          13 Clues
        </Typography>
        <div className={classes.buttonsGroup}>
          <PlayerSelect player={player} handleChange={handleOnChangePlayer} />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleOnOpenDialog}
          >
            <NoteIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
