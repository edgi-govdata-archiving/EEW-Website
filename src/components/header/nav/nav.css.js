import styled from 'styled-components';

{/* Try turning nav into a column on narrow screens */}
export const Container = styled.nav`
  @media only screen and (max-width: 500px) {
    ul {
      flex-flow: column wrap;
    }
  }

  @media only screen and (min-width: 500px) {
    li {
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-top: 2px;
      margin-left: 10px;
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }
`;
