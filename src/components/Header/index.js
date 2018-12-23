import React from 'react';
import styled from 'styled-components';
import SearchType from '../SearchType';
import Welcome from '../Welcome';

export default function Header(props) {
  return(
    <AppHeader>
      <Welcome/>
      <SearchType type={props.type == undefined ? "Title" : props.type}/>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background-color:#DFDFDF;
  height: 70px;
  margin:20px
  padding: 20px;
  text-align: center;
`;


