import React from 'react';
import styled from 'styled-components';
import SearchType from '../SearchType';
import Welcome from '../Welcome';

export default class Header extends React.Component {
  message() {
    if (this.props.type == undefined) {
       return "Title";
    }
    else {
      return this.props.type;
    }
  }
  
  render() {
  return(
    <AppHeader>
      <Welcome/>
      <SearchType type={this.message()}/>
    </AppHeader>
  );
}
}


const AppHeader = styled.header`
  background-color:#DFDFDF;
  height: 70px;
  margin:20px
  padding: 20px;
  text-align: center;
`;


