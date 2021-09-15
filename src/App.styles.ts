import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/jsn.jpg'

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background: -webkit-linear-gradient(to right, #fc00ff, #00dbde); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fc00ff, #00dbde);
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  
  > p {
    color: burlywood;
  }
  
  .score {
    color: #de0797;
    font-size: 3rem;
    margin: 0;
    filter: drop-shadow(2px 2px black);
  }
  
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start {
    width: 250px;
    margin: 10px;
    border: 2px solid #0085a3;
    padding: 6px 24px;
    font-size: 1.15em;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #0085a3;
    background-color: #f1f2f2;
    transition: all 0.25s ease-in-out;
  }
  .next {
    width: 250px;
    margin: 10px;
    border: 2px solid #0085a3;
    padding: 6px 24px;
    font-size: 1.15em;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #0085a3;
    background-color: #f1f2f2;
    transition: all 0.25s ease-in-out;
  }
  .start:hover {
    background-color: #0085a3;
    border-color: #0085a3;
    color: #f1f2f2;
  }

  .next:hover {
    background-color: #de0797;
    border-color: #de0797;
    color: #f1f2f2;
  }
  .start:active {
    background-color: #de0797;
    border-color: #de0797;
    color: #f1f2f2;
    box-shadow: none;
  }

  .next:active {
    background-color: #de0797;
    border-color: #de0797;
    color: #f1f2f2;
    box-shadow: none;
  }
  .start:focus, .start:active:focus {
    background-color: #de0797;
    border-color: #de0797;
    color: #f1f2f2;
    outline: 5px auto #de0797;
  }
  
  .next:focus, .next:active:focus {
    background-color: #de0797;
    border-color: #de0797;
    color: #f1f2f2;
    outline: 5px auto #de0797;
  }
  .start:visited {
    background-color: #de0797;
    border-color: #de0797;
  }

  .next:visited {
    background-color: #de0797;
    border-color: #de0797;
  }
  `
