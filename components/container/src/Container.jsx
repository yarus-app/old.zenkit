import styled from 'styled-components/macro';
import { spacing } from '@zenkit/helpers'

const Container = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  --offset-left: ${props => spacing(props.left || props.offset)(props)};
  --offset-right: ${props => spacing(props.right || props.offset)(props)};


  max-width: ${({ max, theme }) => (max === 'fluid' && '100%') || theme.breakpoints[max] + 'px' || max};

  padding-left: var(--offset-left);
  padding-right: var(--offset-right);

  &::before, &::after {
    content: '';
    display: table;
  }

  &::after {
    clear: both;
  }
`

Container.defaultProps = {
  max: 'fluid',
  offset: 4
}

export default Container;
