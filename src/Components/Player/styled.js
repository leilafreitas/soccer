import styled from 'styled-components';

export const Container = styled.div`
    grid-row:3;
    flex:1;
    background-image:linear-gradient(#B53C7C,#6B3087);
    border-radius:0.5rem;

    color:#ffffff;
    font-size:0.9rem;
    font-weight: 400;

    display:grid;
    grid-template-columns:1fr 4fr 1em 4em 1fr 4fr 1em ;
    grid-template-rows:1fr;
`;

export const Photos = styled.div`
    grid-row: 3/8;
    display:flex;
    justify-content:flex-start;
    align-items:center;

    img{
    background-color: red;
    border-radius: 50%;
    max-width:9em;
    max-height:9em;
    }

`;

export const Box = styled.div`
    background-color:transparent;
    grid-column:${props => props.type === "left"?  2 : 6};
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

`;

export const Middle = styled.div`
    background-color:transparent;
    grid-column:4;
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

`;

export const Cicle = styled.div`
    height:4em;
    width:4em;
    border-radius:50%;
    background-color:transparent;
    border:0.1em solid rgba(247,243,247, 0.2);

    z-index: 99;
`;

export const Line = styled.div`
    grid-column:2;
    height:100%;
    width:0.1em;
    background-color:rgba(247,243,247, 0.2);
    position: absolute;
`;

export const Titles = styled.span`
    grid-row:2;
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;

`;

export const Percent = styled.div`
    grid-row:3/8;
    height:100%;
    padding-top:1rem;
    display:flex;
    justify-content:flex-start;
    span{
    grid-row:3;
    width:3em;
    height:1.2em;
    border-bottom:0.1em solid #ffffff;
    }

`;
