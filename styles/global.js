import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: 'Open Sans' !important;
        overflowY: hidden !important;
        font-weight: 300;
        margin: 0;
    }

    body {
        overflow-X: hidden !important;

    }

    a, button {
        cursor: pointer;
    }
`;