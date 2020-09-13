import React, { memo } from "react";
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  margin-top: 5vh;
  color: #c99950;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Noto Sans TC", sans-serif;
  text-align: center;
  font-size: 24px;
  width: 100%;
  line-height: 36px;
`;

const GameInfo = memo(() => {
  return (
    <Container>
      <Info>
        請將手機旋轉至
        <br />
        「橫向模式」開始遊戲
      </Info>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </Container>
  );
});

export default GameInfo;
