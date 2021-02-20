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


export const HeaderInfoRepository = styled.section`
    margin-top: 80px;

    header {
      display: flex;
      align-items: center;

      img {
        width: 124px;
        height: 124px;
        border-radius:50%;
      }
      div {
        margin-left: 24px;

        strong{
          font-size: 38px;
          color: #3d3d4d;
          font-family: 'Roboto', sans-serif;
        }
        p{
          margin-top: 4px;
          font-size: 18px;
          color: #737380;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        }
      }
    }

    ul{
      list-style: none;
      display: flex;
      margin-top: 40px;
      li {

        & + li {
          margin-left: 80px;
        }
        strong {
          display: block;
          color: #3d3d4d;
          font-size: 36px;
        }
        span {
          display: block;
          color: #6C6C80;
          margin-top: 4px;
        }
      }
    }

    /* img{
      width: 124px;
      height: 124px;
      border-radius: 50%;
    }
    
    strong{
      font-size: 36px;
      color: #3D3D4D;
      font-weight: 700;
    } */

`;

export const RepositoryInfoUser = styled.div `
  margin-top: 80px;
  height: 112px;

  a {
    background: #FFF;
    border-radius: 5px;
    padding: 24px;
    display: block;
    text-decoration:none;
    display:flex;
    align-items:center;
    transition: transform 0.2s;
    
    & + a {
      margin-top: 10px;
    }

     &:hover {
       transform: translateX(10px);
     }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex:1;

    strong{
      font-size: 20px;
      color: #3D3D4D;
    }
    p {
      font-size:18px;
      margin-top:4px;
      color: #A8A8B3;
    }
  }
  svg {
    margin-left: auto;
    color: #C9C9D4;
  }
`;

