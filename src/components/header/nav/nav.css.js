import styled from 'styled-components';

{/* Try turning nav into a column on narrow screens */}
export const Container = styled.nav`
  @media only screen and (max-width: 600px) {
    ul {
      flex-flow: column wrap;

      li {
        margin-left: 3rem;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    li {
      font-size: 1.3rem;

      & + li {
        margin-left: 3rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-top: 2px;
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }
`;
