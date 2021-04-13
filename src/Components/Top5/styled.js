import styled from 'styled-components';

export const Box = styled.div`
    grid-column:1;
    grid-row:1;
    background-color:#FFFFFF;
    border-radius:0.5rem;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:4em 1fr;
`;

export const AVG = styled.div`
    grid-column:1;
    grid-row:2;
    display:grid;
    grid-template-columns:1.2em 1fr 1.5em 1fr 1.2em;
    grid-template-rows:3em 1fr 1.2em;
    
`;

export const AVGText = styled.span`
    grid-row:1;
    grid-column:${props => props.type === "left"?  2 : 4};
    display:flex;
    align-items:center;
    color:#000000;
    font-size:0.9em;
`;

export const ListContainer = styled.div`
    grid-row:2;
    grid-column:${props => props.type === "left"?  2 : 4};
    background-color:#F7F3F7;
    border-radius:0.5em;
    padding:0.1em;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`;

export const ListAVGItem = styled.div`
    flex:1;
    height:calc(100%/5);
    font-size:0.8em;
    background-color:#ffffff;
    border-radius:0.3em;
    justify-content:space-between;
    display:flex;
    margin:0.1em;
    transition: all ease 0.4s;
    span{
        display:flex;
        padding: 0 1em;
        align-items:center;
    }
    .avg{
        justify-content:end;
    }
    &:hover{
        border:0.07rem solid #B31256;
    }

`;