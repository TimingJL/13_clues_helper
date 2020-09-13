/* eslint-disable react/display-name */
import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NoteIcon from "assets/icons/NoteIcon";
import ResetIcon from "assets/icons/ResetIcon";
import Button from "@material-ui/core/Button";
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
  resetButton: {
    marginRight: 16,
    color: "white",
    border: "1px solid white",
  },
}));

const Header = memo(
  ({ handleOnOpenDialog, player, handleOnChangePlayer, handleOnResetGame }) => {
    const classes = useStyles();
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            13 Clues
          </Typography>
          <div className={classes.buttonsGroup}>
            <Button
              variant="outlined"
              color="default"
              size="small"
              className={classes.resetButton}
              startIcon={<ResetIcon />}
              onClick={handleOnResetGame}
            >
              重新開始
            </Button>
            <PlayerSelect player={player} handleChange={handleOnChangePlayer} />
            <IconButton
              edge="start"
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
  },
  (prevProps, nextProps) => {
    return prevProps.player === nextProps.player;
  }
);

export default Header;
