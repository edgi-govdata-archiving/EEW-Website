import styled from 'styled-components';
import { lightprimary, accent } from 'constants/theme';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${lightprimary};

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
