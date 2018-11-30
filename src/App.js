import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';

export default function App () {
  return (
    <AppDiv>
      <Header></Header>
    </AppDiv>
  );
}
const AppDiv = styled.div`
  text-align: center;
`;


