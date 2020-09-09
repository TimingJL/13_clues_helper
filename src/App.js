import React, { useState } from "react";
import styled from "styled-components";
import MainPage from "containers/MainPage";
import GameInfo from "containers/GameInfo";
import data from "containers/data";

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
  const persons = data.persons.map((person) => ({ ...person, isEnable: true }));
  const locations = data.locations.map((location) => ({
    ...location,
    isEnable: true,
  }));
  const weapons = data.weapons.map((weapon) => ({
    ...weapon,
    isEnable: true,
  }));
  const [cardsState, setCardsState] = useState({
    persons,
    locations,
    weapons,
    colorNames: data.colorNames,
  });
  return (
    <MainPageContainer>
      <div id="wrapper">
        <MainPage cardsState={cardsState} setCardsState={setCardsState} />
      </div>
      <div id="warning-message">
        <GameInfo />
      </div>
    </MainPageContainer>
  );
}

export default App;
