import { createGlobalStyle } from 'styled-components';
import vector from '../assets/images/Vector.svg';

export default createGlobalStyle`
  * {
    margin:0px;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F3;
  }

  body, input, buttom {
    font-size: 16px sans-serif;
    font-family: Roboto Regular;
  }

  #root {
    max-width: 960px;
    min-height: 150vh;
    margin: 0 auto;
    padding: 40px 20px;
    background: url(${vector}) no-repeat top right;
  }

   button {
     cursor: pointer;
   } 
`;
