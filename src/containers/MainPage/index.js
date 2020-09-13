/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, memo } from "react";
import styled from "styled-components";
import backgroundImagePath from "assets/images/backgroundImage.jpg";
import Header from "./Header";
import Content from "./Content";
import FullScreenDialog from "./FullScreenDialog";

const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Background = memo(() => {
  return <BackgroundImage src={backgroundImagePath} alt="" />;
});

const MainPage = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [player, setPlayer] = useState(2);
  const { handleOnResetGame, noteProps } = props;
  const handleOnChangePlayer = (event) => {
    setPlayer(event.target.value);
  };

  const handleOnOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleOnCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <MainPageContainer>
        <Header
          handleOnOpenDialog={handleOnOpenDialog}
          player={player}
          handleOnChangePlayer={handleOnChangePlayer}
          handleOnResetGame={handleOnResetGame}
        />
        <ContentWrapper>
          <Background />
          <Content {...props} player={player} />
        </ContentWrapper>
      </MainPageContainer>
      <FullScreenDialog
        open={isDialogOpen}
        handleClose={handleOnCloseDialog}
        noteProps={noteProps}
      />
    </>
  );
};

export default MainPage;
