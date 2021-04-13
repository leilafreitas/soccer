import styled from 'styled-components';

export const Container = styled.div`
    background-color:#F7F3F7;
    grid-row:2;
    flex:1;
    display:grid;
    grid-template-columns:3em 1fr 3em 1fr 3em;
    grid-template-rows:3em 1fr 3em;

`;

export const BoxLeft = styled.div`
    grid-column:2;
    grid-row:2;
`;

export const BoxRight = styled.div`
    grid-column:4;
    grid-row:2;

    display: grid;
    grid-template-columns:1fr;
    grid-template-rows:5fr 1em 4fr;
`;

