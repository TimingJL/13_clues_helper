import React from "react";
import styled from "styled-components";
import data from "../data";

const MainPageContainer = styled.div``;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
`;

const GridBlock = styled.div`
  border: 1px solid #eee;
  height: 100px;
`;

const Content = () => {
  const { persons, locations, weapons } = data;
  return (
    <MainPageContainer>
      <GridContainer>
        <GridBlock>Header</GridBlock>
        {persons.map((person) => (
          <GridBlock key={person.name.en}>{person.name.zhtw}</GridBlock>
        ))}
      </GridContainer>
      <GridContainer>
        <GridBlock>Header</GridBlock>
        {locations.map((location) => (
          <GridBlock key={location.name.en}>{location.name.zhtw}</GridBlock>
        ))}
      </GridContainer>
      <GridContainer>
        <GridBlock>Header</GridBlock>
        {weapons.map((weapon) => (
          <GridBlock key={weapon.name.en}>{weapon.name.zhtw}</GridBlock>
        ))}
      </GridContainer>
    </MainPageContainer>
  );
};

export default Content;
