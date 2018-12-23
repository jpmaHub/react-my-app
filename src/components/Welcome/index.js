import React from 'react';
import styled from 'styled-components';

export default function Welcome(){
  return(
    <AppWelcome> Book Search </AppWelcome>
  );
}

const AppWelcome = styled.h1`
  font-size: 1.5em;
`;