import styled from 'styled-components';


export const Header = styled.header `
  display: flex;
  align-items:center;
  justify-content: space-between;

  a {
    text-decoration: none;
    display:flex;
    align-items:center;
    color: #666;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    transition: all ease 0.2s;

    &:hover {
      color: #333;
      margin-bottom: 4px;
    }
  }
`;
