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

const Nav = styled.nav`
  ${border}
  ${grid}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

export default Nav;
