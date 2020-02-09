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

const Input = styled.input`
  ${border}
  ${grid}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

export default Input;
