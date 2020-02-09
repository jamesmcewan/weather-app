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

const ListItem = styled.li`
  font-size: 1.5rem;
  padding: 0.2rem;
  margin: 0;
  list-style: none;
  ${border}
  ${grid}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
`;

export default ListItem;
