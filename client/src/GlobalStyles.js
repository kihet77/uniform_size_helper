import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    h1{
      font-size: 48px;
      font-weight: 500;
      color:var(--blue-300);
    }
    :root{
        --blue-50 : #E5E9ED;
        --blue-100 : #BCC7D5;
        --blue-200 : #92A3B8;
        --blue-300 : #69809B;
        --blue-400 : #496688;
        --blue-500 : #254D78;
        --blue-600 : #1E4670;
        --blue-700 : #1E4670;
        --blue-800 : #103358;
        --blue-900 : #0C2340;
      }    
      `;

export default GlobalStyles;
