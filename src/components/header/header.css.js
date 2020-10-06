import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #aaa;

  a {
    color: #000000;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: ${accent};
    }
  }

  ,
  gray {
    color: #;
  }
`;
