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

const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  padding-bottom: 1rem;
  ${border}
  ${grid}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

export default Heading2;
