import React from 'react';
import styled from 'styled-components';

export default function Title(props) {
  return (
    <AppTitle>
      {props.title}
    </AppTitle>
  );
}

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

