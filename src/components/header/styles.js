import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c3c3c3;

  nav {
    height: 100%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
      align-items: center;
      height: 100%;
      li {
        width: 120px;
        height: 100%;
        display: flex;
        align-items: center;
        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;
          &:hover {
            color: ${shade(0.2, '#fff')};
          }
        }
      }
    }
  }
`;
