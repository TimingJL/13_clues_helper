/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import backgroundImagePath from "assets/images/backgroundImage.jpg";
import Header from "./Header";
import Content from "./Content";
import FullScreenDialog from "./FullScreenDialog";

const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImagePath});
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPage = (props) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOnOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleOnCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <MainPageContainer>
        <Header handleOnOpenDialog={handleOnOpenDialog} />
        <ContentWrapper>
          <Content {...props} />
        </ContentWrapper>
      </MainPageContainer>
      <FullScreenDialog open={isDialogOpen} handleClose={handleOnCloseDialog} />
    </>
  );
};

export default MainPage;
