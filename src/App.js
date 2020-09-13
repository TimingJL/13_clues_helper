import React, { useState, useCallback } from "react";
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

const App = () => {
  const persons = data.persons.map((person) => ({
    ...person,
    isEnable: true,
  }));
  const locations = data.locations.map((location) => ({
    ...location,
    isEnable: true,
  }));
  const weapons = data.weapons.map((weapon) => ({
    ...weapon,
    isEnable: true,
  }));
  const [noteContent, setNoteContent] = useState("");
  const [cardsState, setCardsState] = useState({
    persons,
    locations,
    weapons,
    colorNames: data.colorNames,
  });

  const handleOnResetGame = useCallback(() => {
    setCardsState({
      persons,
      locations,
      weapons,
      colorNames: data.colorNames,
    });
    setNoteContent("");
  }, [locations, persons, weapons]);

  return (
    <MainPageContainer>
      <div id="wrapper">
        <MainPage
          cardsState={cardsState}
          setCardsState={setCardsState}
          handleOnResetGame={handleOnResetGame}
          noteProps={{
            noteContent,
            setNoteContent,
          }}
        />
      </div>
      <div id="warning-message">
        <GameInfo />
      </div>
    </MainPageContainer>
  );
};

export default App;
