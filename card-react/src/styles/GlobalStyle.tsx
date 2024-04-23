import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: /* Inter, Haettenschweiler, 'Arial Narrow Bold',  */sans-serif;
        transition: all 0.3s ease;
        font-size: 10px;
    }

    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        // background: #282A31;
    }

    button {
        border: none;
    }
`