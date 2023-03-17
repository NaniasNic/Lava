import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }
`;