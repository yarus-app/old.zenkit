import styled from 'styled-components/macro';

const Cell = styled.td`
  vertical-align: top;
  padding: 0;

  &:not([align]) {
    text-align: left;
  }
`

export default Cell;
