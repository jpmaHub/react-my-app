import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import AddBook from './components/AddBook';

export default function App () {
  return (
    <AppDiv>
      <Header/>
      <AddBook/>
    </AppDiv>
  );
}
const AppDiv = styled.div`
  text-align: center;
`;


