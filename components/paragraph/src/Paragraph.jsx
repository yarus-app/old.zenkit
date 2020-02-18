import styled, { css } from 'styled-components/macro';
import { spacing, stripUnit } from '@zenkit/helpers'

const leadStyle = css`
  font-size: ${props => props.theme.typography.scale}rem;
  line-height: ${props => {
    const space = stripUnit(spacing()(props));

    return (Math.round((props.theme.typography.headingLineHeight * props.theme.typography.scale) / space) + 1) * space / props.theme.typography.scale;
  }}
`

const Paragraph = styled.p`
  width: 100%;

  max-width: ${props => !!props.fluid ? 'auto' : (props.theme.typography.maxWidth || '60ch')};

  &:not(:first-child) {
    margin-top: ${props => spacing(props.top || props.offset)(props)};
  }

  &:not(:last-child) {
    margin-bottom: ${props => spacing(props.bottom || props.offset)(props)};
  }

  ${props => props.lead ? leadStyle : undefined}
`

Paragraph.defaultProps = {
  fluid: false,
  lead: false,
  offset: 2
}

export default Paragraph;
