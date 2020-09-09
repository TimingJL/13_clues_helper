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

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </MainPageContainer>
  );
};

export default MainPage;
