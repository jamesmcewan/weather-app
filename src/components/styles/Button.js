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

const Button = styled.button`
  font-size: 3rem;
  padding: 0;
  ${border}
  ${grid}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

export default Button;
