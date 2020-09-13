import React, { memo } from "react";
import styled from "styled-components";

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

const Text = styled.div`
  text-shadow: 0px 0px 4px #fff;
  color: black;
`;

const TextWrapper = styled.span`
  margin-bottom: 6px;
`;

const Card = memo(
  ({ data, handleOnClick, icon }) => {
    return (
      <GridBlock
        textColor="#fff"
        backgroundColor={data.color}
        isEnable={data.isEnable}
        onClick={handleOnClick}
      >
        {icon}
        <TextWrapper>
          <Text>{data.name.zhtw}</Text>
          <Text>{data.name.en}</Text>
        </TextWrapper>
      </GridBlock>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.data.isEnable === nextProps.data.isEnable;
  }
);

export default Card;
