import styled from 'styled-components';

export const Container=styled.div`
    display:grid;
    grid-template-columns:1;
    grid-template-rows:3em 1fr;
    height:100vh;
    flex:1;
`;

export const PageBody=styled.div`
    grid-row:2;
    display:flex;
    flex:1;
    overflow-y:hidden;
`;