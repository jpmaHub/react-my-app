import React from 'react';
import styled from 'styled-components';
import SearchType from '../SearchType';

export default function Header(props) {
  return(
    <AppHeader>
      <SearchType type={props.type == undefined ? "Search Books by Title" : "Search Books by " + props.type}/>
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


