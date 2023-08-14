import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingAnimation = keyframes`
  0% {
    opacity: 0.2;
    transform: scaleY(0.5);
  }
  50% {
    opacity: 0.6;
    transform: scaleY(1.5);
  }
  100% {
    opacity: 0.2;
    transform: scaleY(0.5);
  }
`;

const LoadingRectangle = styled.div`
  width: 20px;
  height: 80px;
  margin: 0 8px;
  background-color: #888;
  animation: ${LoadingAnimation} 2s infinite;
`;

const LoadingPage: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingRectangle />
      <LoadingRectangle />
      <LoadingRectangle />
    </LoadingContainer>
  );
};

export default LoadingPage;
