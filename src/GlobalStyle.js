import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    :root{
        --maxwidth: 1280px;
        --white: #fff;
        --black: #000;
        --darkGrey: #1c1c1c;
        --midGrey: #353535;
        --lightGrey: #eee;
        --fontHuge: 2.5rem;
        --fontBig: 1.5rem;
        --fontMid: 1.2rem;
        --fintSmall: 1rem;
    }

    *{
        box-sizing: border-box;
        font-family: 'Abel', Arial;
    }

    body{
        margin: 0 auto;
        padding: 0;
        height: 100%;
        h1{
            font-size: 2rem;
            font-weight: 700;
            color: var(--black);
        }
        h3{
            font-size: 1.1rem;
            font-weigth: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }

`;