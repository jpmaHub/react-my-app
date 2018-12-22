import React from 'react';
import styled from 'styled-components';

export default function SearchType(props) {
  return (
    <AppSearchType>
      {props.type}
    </AppSearchType>
  );
}

const AppSearchType = styled.h1`
  font-size: 1.5em;
`;

