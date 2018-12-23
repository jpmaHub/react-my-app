import React from 'react';
import styled from 'styled-components';

export default function SearchType(props) {
  return (
    <AppType>
      {props.type}
    </AppType>
  );
}

const AppType = styled.h1`
  font-size: 1em;
`;
