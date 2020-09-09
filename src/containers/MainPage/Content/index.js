import React from "react";
import styled from "styled-components";
import data from "../data";

const MainPageContainer = styled.div``;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-gap: 2px;
  &:not(:last-child) {
    margin-bottom: 2px;
  }
`;

const GridBlock = styled.div`
  height: 100px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  &:active {
    opacity: 0.8;
  }
`;

const Content = () => {
  const { persons, locations, weapons } = data;
  return (
    <MainPageContainer>
      <GridContainer>
        <GridBlock>Header</GridBlock>
        {persons.map((person) => (
          <GridBlock
            key={person.name.en}
            textColor="#fff"
            backgroundColor={person.color}
          >
            {person.name.zhtw}
          </GridBlock>
        ))}
      </GridContainer>
      <GridContainer>
        <GridBlock>Header</GridBlock>
        {locations.map((location) => (
          <GridBlock
            key={location.name.en}
            textColor="#fff"
            backgroundColor={location.color}
          >
            {location.name.zhtw}
          </GridBlock>
        ))}
      </GridContainer>
      <GridContainer>
        <GridBlock>Header</GridBlock>
        {weapons.map((weapon) => (
          <GridBlock
            key={weapon.name.en}
            textColor="#fff"
            backgroundColor={weapon.color}
          >
            {weapon.name.zhtw}
          </GridBlock>
        ))}
      </GridContainer>
    </MainPageContainer>
  );
};

export default Content;
