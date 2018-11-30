import React from 'react';
import styled from 'styled-components';

export default function Title() {
  return (
    <AppTitle>
      Search Books by Title
    </AppTitle>
  );
}

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

