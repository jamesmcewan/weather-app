import styled from 'styled-components/macro';
import {
  color,
  layout,
  typography,
  space,
  flexbox,
  border,
  grid
} from 'styled-system';

const List = styled.ul`
  padding: 0;
  margin: 0;
  ${border}
  ${grid}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
`;

export default List;
