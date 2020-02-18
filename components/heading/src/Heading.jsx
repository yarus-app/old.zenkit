import React from 'react'
import styled, { css } from 'styled-components/macro';
import { spacing, stripUnit } from '@zenkit/helpers'

const HeadingComponent = ({ as, level, top, bottom, fluid, offset, size,  children, ...props }) => {
  const Component = as || `h${level}`;

  return (
    <Component {...props}>
      {children}
    </Component>
  )
}

const Heading = styled(HeadingComponent).attrs(({ level, size: sizeProp }) => ({
  size: Math.max(sizeProp || (6 - level), 0)
}))`
  max-width: ${props => !!props.fluid ? 'auto' : (props.theme.typography.maxWidth || '60ch')};

  font-weight: ${props => props.theme.typography.headingWeight || 700};

  ${props => {
    const fontSize = Math.round(props.theme.typography.scale ** props.size * 1000) / 1000;

    const space = stripUnit(spacing()(props));


    const lineHeight =  props.size === 0
      ? props.theme.typography.baseLineHeight
      : (Math.round((props.theme.typography.headingLineHeight * fontSize) / space) + 1) * space / fontSize;

    return css`
      font-size: ${fontSize}rem;
      line-height: ${lineHeight};
    `
  }};

  color: ${({ theme }) => theme.colors.base.heading};

  margin-top: ${props => spacing(props.top || props.offset * props.theme.typography.scale ** 3)(props)};
  margin-bottom: ${props => spacing(props.bottom || props.offset)(props)};
`

Heading.defaultProps = {
  fluid: false,
  level: 3,
  offset: 2
};


export default Heading;
