import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import SearchForm from '../SearchForm';

export default function Header() {
  return(
    <AppHeader>
      <Title title="Search Books by Title"/>
      <SearchForm />
    </AppHeader>
  );
}
const AppHeader = styled.header`
  background-color:grey;
  height: 200px;
  padding: 20px;
  text-align: center;
`;


