import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import {Helmet} from "react-helmet";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    & * {
      box-sizing: border-box;
    }
  }
`;
ReactDOM.render(
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    </Helmet>

    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
