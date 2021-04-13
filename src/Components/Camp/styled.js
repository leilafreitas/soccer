import styled from 'styled-components';

export const Container = styled.div`
    grid-row:2;
    aspect-ratio: 1/1.25;
    display:grid;
    margin-top:1em;
    grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    background-image:linear-gradient(#A7387C,#752C80);
    padding:0.8em;
    border-radius:0.3em;


`;

export const Box = styled.div`
    grid-row:${props=>props.row};
    grid-column:${props=>props.column};
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Content = styled.div`
    height:75%;
    aspect-ratio: 1/1;
    border-radius:50%;
    border:0.1em dashed rgba(247,243,247,0.5);
    padding:0.2em;
    display:flex;
    justify-content:center;
    align-items:center;

`;

export const Cell = styled.div`
    width:95%;
    aspect-ratio: 1;
    border-radius:50%;
    background-color:#CE9ABE;
    display:flex;
    justify-content:center;
    align-items:center;
`;


