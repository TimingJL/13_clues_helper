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
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height}px;
  text-align: center;
  &:active {
    opacity: 0.8;
  }
`;

const HEIGHT_CARD = 80;

const Content = () => {
  const { persons, locations, weapons, colorNames } = data;
  return (
    <MainPageContainer>
      <GridContainer>
        <GridBlock>角色</GridBlock>
        {persons.map((person) => (
          <GridBlock
            key={person.name.en}
            textColor="#fff"
            backgroundColor={person.color}
            height={HEIGHT_CARD}
          >
            {person.name.zhtw}
          </GridBlock>
        ))}
      </GridContainer>
      <GridContainer>
        <GridBlock>地點</GridBlock>
        {locations.map((location) => (
          <GridBlock
            key={location.name.en}
            textColor="#fff"
            backgroundColor={location.color}
            height={HEIGHT_CARD}
          >
            {location.name.zhtw}
          </GridBlock>
        ))}
      </GridContainer>
      <GridContainer>
        <GridBlock>武器</GridBlock>
        {weapons.map((weapon) => (
          <GridBlock
            key={weapon.name.en}
            textColor="#fff"
            backgroundColor={weapon.color}
            height={HEIGHT_CARD}
          >
            {weapon.name.zhtw}
          </GridBlock>
        ))}
      </GridContainer>
      <GridContainer>
        <GridBlock />
        {colorNames.map((colorName) => (
          <GridBlock key={colorName.en}>{colorName.zhtw}</GridBlock>
        ))}
      </GridContainer>
    </MainPageContainer>
  );
};

export default Content;
