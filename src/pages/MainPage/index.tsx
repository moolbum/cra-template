import React from 'react';
import styled from 'styled-components';

function MainPage() {
  return (
    <div>
      <TitleContainer>
        <Title>MainPage</Title>
      </TitleContainer>
    </div>
  );
}

export default MainPage;

const TitleContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1``;
