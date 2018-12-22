import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import AddBook from '../AddBook';
import SearchForm from '../SearchForm';

export default function Header() {
  return(
    <AppHeader>
      <Title title="Search Books by Title"/>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background-color:grey;
  height: 50px;
  margin:20px
  padding: 20px;
  text-align: center;
`;


