import React from 'react';
import styled from 'styled-components/macro';

const Root = styled.blockquote`
  display: block;
`;

function Blockquote({ children, ...props }) {
  return (
    <Root {...props}>
      {children}
    </Root>
  )
}

export default Blockquote;
