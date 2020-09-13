import React from "react";
import styled from "styled-components";
import iconMalePath from "assets/icons/male.png";
import iconFemalePath from "assets/icons/female.png";
import InDoorIcon from "assets/icons/InDoorIcon";
import OutDoorIcon from "assets/icons/OutDoorIcon";
import UpCloseIcon from "assets/icons/UpCloseIcon";
import RangedIcon from "assets/icons/RangedIcon";
import Card from "./Card";

const MainPageContainer = styled.div`
  font-size: 12px;
  padding: 0px 24px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(${(props) => props.cardsNumber}, 1fr);
  grid-gap: 2px;
  ${(props) => {
    if (props.height) {
      return `height: ${props.height}px;`;
    }
    return `height: 80px;`;
  }}
  &:not(:last-child) {
    margin-bottom: 2px;
  }
`;

const GridBlock = styled.div`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  min-height: 20px;
  ${(props) => {
    if (props.height) {
      return `height: ${props.height}px;`;
    }
    return null;
  }}
  ${(props) => {
    if (!props.isEnable) {
      return "opacity: 0.15;";
    }
    return null;
  }}
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;

const Icon = styled.div`
  background: url(${(props) => props.icon});
  background-size: cover;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
`;

const IconWrapper = styled.div`
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
`;

const TextHeader = styled.div`
  margin-top: 12px;
`;

const getCards = (player) => {
  if (player === 2) {
    return 6;
  }
  if (player === 3) {
    return 7;
  }
  if (player === 4) {
    return 8;
  }
  if (player === 5) {
    return 9;
  }
  return 10;
};

const Content = ({ cardsState, setCardsState, player }) => {
  const { persons, locations, weapons, colorNames } = cardsState;
  const cardsNumber = getCards(player);
  const handleOnClick = (keyword, data, name) => {
    const newData = data.map((item) => {
      if (item.name.en === name) {
        return { ...item, isEnable: !item.isEnable };
      }
      return item;
    });
    if (keyword === "persons") {
      setCardsState((prev) => ({ ...prev, persons: newData }));
    }
    if (keyword === "locations") {
      setCardsState((prev) => ({ ...prev, locations: newData }));
    }
    if (keyword === "weapons") {
      setCardsState((prev) => ({ ...prev, weapons: newData }));
    }
  };

  return (
    <MainPageContainer>
      <GridContainer cardsNumber={cardsNumber}>
        <GridBlock isEnable>
          <TextHeader>
            <div>角色</div>
            <div>Male</div>
            <div>Female</div>
          </TextHeader>
        </GridBlock>
        {persons
          .filter((item, index) => index < cardsNumber)
          .map((person) => (
            <Card
              key={person.name.en}
              data={person}
              handleOnClick={() =>
                handleOnClick("persons", persons, person.name.en)
              }
              icon={
                <IconWrapper>
                  <Icon icon={person.isMale ? iconMalePath : iconFemalePath} />
                </IconWrapper>
              }
            />
          ))}
      </GridContainer>
      <GridContainer cardsNumber={cardsNumber}>
        <GridBlock isEnable>
          <TextHeader>
            <div>地點</div>
            <div>Indoor</div>
            <div>Outdoor</div>
          </TextHeader>
        </GridBlock>
        {locations
          .filter((item, index) => index < cardsNumber)
          .map((location) => (
            <Card
              key={location.name.en}
              data={location}
              handleOnClick={() =>
                handleOnClick("locations", locations, location.name.en)
              }
              icon={
                <IconWrapper>
                  {location.isIndoor ? (
                    <InDoorIcon htmlColor="#000" />
                  ) : (
                    <OutDoorIcon htmlColor="#000" />
                  )}
                </IconWrapper>
              }
            />
          ))}
      </GridContainer>
      <GridContainer cardsNumber={cardsNumber}>
        <GridBlock isEnable>
          <TextHeader>
            <div>武器</div>
            <div>UpClose</div>
            <div>Ranged</div>
          </TextHeader>
        </GridBlock>
        {weapons
          .filter((item, index) => index < cardsNumber)
          .map((weapon) => (
            <Card
              key={weapon.name.en}
              data={weapon}
              handleOnClick={() =>
                handleOnClick("weapons", weapons, weapon.name.en)
              }
              icon={
                <IconWrapper>
                  {weapon.isUpclose ? (
                    <UpCloseIcon htmlColor="#000" />
                  ) : (
                    <RangedIcon fontSize="small" htmlColor="#000" />
                  )}
                </IconWrapper>
              }
            />
          ))}
      </GridContainer>
      <GridContainer cardsNumber={cardsNumber} height={20}>
        <GridBlock height={20} />
        {colorNames
          .filter((item, index) => index < cardsNumber)
          .map((colorName) => (
            <GridBlock
              key={colorName.en}
              style={{ lineHeight: "20px" }}
              isEnable
              height={20}
            >
              {colorName.zhtw}
            </GridBlock>
          ))}
      </GridContainer>
    </MainPageContainer>
  );
};

export default Content;
