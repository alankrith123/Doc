import React from "react";
import styled from "styled-components";
import NavBar from "../../Global/components/NavBar/NavBar";
import Footer from "../../Global/components/Footer/Footer";

const Covid19Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Covid = () => {
  return (
    <Covid19Container>
      <NavBar />
      <Footer />
    </Covid19Container>
  );
};

export default Covid;
