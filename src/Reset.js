import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
        font-family: '맑은 고딕', HelveticaNeue, DroidSans, Sans-serif, Helvetica;
    }
    *{
        box-sizing:border-box;
    }
    button{
        background: inherit ; border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible; cursor:pointer;
    } 
`;

export default globalStyles;
