import styled from 'styled-components';
import { lightprimary, accent } from 'constants/theme';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background-color: ${lightprimary};
  flex-flow: column;
  text-align:center;

  #contribute {
    padding: 2rem;
    margin: 4rem;
    width: 400px;
    flex-shrink: 1;
  }
  
  #socials {
    margin: 2rem;
  }

  p {
    font-weight: 700;
  }

  a {
    color: ${accent};
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  },
  
  gray {
    color: #
  }
`;
