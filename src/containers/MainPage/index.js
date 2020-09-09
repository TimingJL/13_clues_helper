/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPage = (props) => {
  return (
    <MainPageContainer>
      <Header />
      <ContentWrapper>
        <Content {...props} />
      </ContentWrapper>
    </MainPageContainer>
  );
};

export default MainPage;
