import styled from 'styled-components';
import { Link } from 'components/Link';
import { typography } from 'stylesheet';

export const Tag = styled(Link)`
  ${typography.small}
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
`;
