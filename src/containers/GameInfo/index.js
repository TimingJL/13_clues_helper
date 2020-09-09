import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import gameImagePath from "./images/13_clues.png";
import gamePreparationImagePath from "./images/game_preparation.jpg";
import gameAccessoriesImagePath from "./images/game_accessories.jpg";
import gameProgressImagePath from "./images/game_progress.jpg";

const images = [
  {
    original: gameImagePath,
  },
  {
    original: gamePreparationImagePath,
  },
  {
    original: gameAccessoriesImagePath,
  },
  {
    original: gameProgressImagePath,
  },
];

const Container = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
`;

const GameInfo = () => (
  <Container>
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  </Container>
);

export default GameInfo;
