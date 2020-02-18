import styled from 'styled-components/macro';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
`

export default Grid;
