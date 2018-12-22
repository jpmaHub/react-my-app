import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import ViewBooks from './components/ViewBooks';
import AddBook from './components/AddBook';
import SearchForm from './components/SearchForm';

export default function App () {
  return (
    <AppDiv>
      <Header></Header>
      <AddBook/>
    </AppDiv>
  );
}
const AppDiv = styled.div`
  text-align: center;
`;


