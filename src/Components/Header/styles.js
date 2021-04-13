import styled from 'styled-components';

export const Header = styled.header`
    grid-row:1;
    grid-column:1;
    display:flex;
    background-image:linear-gradient(to bottom right, #BF0E4F,#A7165D,#8B1F6E);
    padding:0 3em;
    color:#ffffff;
    font-weight:bold;
    font-size:1em;
    align-items:center;
    justify-content:space-between;

    .subtitle{
        font-size:0.8em;
    }
`;