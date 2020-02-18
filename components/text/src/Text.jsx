import styled, {css} from 'styled-components/macro';
import { typography, color } from 'styled-system';

const tracking = {
  xs: '-0.05em',
  s: '-0.025em',
  m: 0,
  l:  '0.025em',
  xl: '0.05em',
  xxl: '0.1em'
};

const breaking = {
  normal: css`
    word-break: normal;
    overflow-wrap: normal;
  `,
  words: css`
    overflow-wrap: break-word;
  `,
  all: css`
    word-break: break-all;
  `
};

const Text = styled.span`
  ${({ muted }) => muted && css`color: rgba(17,17,19,.6)`};
  ${({ highlight }) => highlight && css`background-color: rgba(21,141,247,.1)` };
  text-align: ${({ align }) => align};
  vertical-align:${({ vAlign }) => vAlign};
  text-transform: ${({ transform }) => transform};
  font-weight: ${({ weight }) => weight};
  font-style: ${({ italic }) => italic && 'italic'};
  letter-spacing: ${({ tracking: trackingKey }) => trackingKey && tracking[trackingKey]};
  text-decoration: ${({ italic }) => italic && 'italic'};
  ${({ break: breakKey, truncate }) => {
    if (truncate) {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      `;
    }

    if (breakKey) {
      return breaking[breakKey]
    }
  }};
  ${typography};
  ${color};
`

export default Text;
