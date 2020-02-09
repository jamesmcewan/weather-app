import styled from 'styled-components/macro';
import {
  color,
  layout,
  typography,
  space,
  flexbox,
  border,
  grid,
  position
} from 'styled-system';

const Box = styled.div`
  ${border}
  ${grid}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

export default Box;
