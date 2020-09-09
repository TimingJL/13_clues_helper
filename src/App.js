import React from "react";
import styled from "styled-components";
import MainPage from "containers/MainPage";
import GameInfo from "containers/GameInfo";

const MainPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  @media only screen and (orientation: portrait) {
    #wrapper {
      display: none;
    }
    #warning-message {
      display: block;
    }
  }
  @media only screen and (orientation: landscape) {
    #warning-message {
      display: none;
    }
  }
`;

function App() {
  return (
    <MainPageContainer>
      <div id="wrapper">
        <MainPage />
      </div>
      <div id="warning-message">
        <GameInfo />
      </div>
    </MainPageContainer>
  );
}

export default App;
