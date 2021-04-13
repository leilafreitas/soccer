import styled from 'styled-components';


export const BoxMyTeams = styled.div`
    height:100%;
    flex:1;
    background-color:#FFFFFF;
    border-radius:0.5rem;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:4em 4em 1fr;
`;

export const Header = styled.header`
    grid-column:1;
    grid-row:1;
    display:flex;
    flex:1;
    border-bottom:0.1em solid #F7F3F7;
    padding:0 1em;
    color:#714E9D;
    font-weight:bold;
    font-size:1.5em;
    align-items:center;
    justify-content:space-between;
`;

export const BottomPlus = styled.div`
    display:flex;
    height:1.5em;
    width:1.5em;
    background-image:linear-gradient(#A4387B,#883480);
    border-radius:25%;
    align-items:center;
    justify-content:center;
    box-shadow: 2px 6px 3px 2px rgba(255,209,248,0.6);
    cursor: pointer;
`

export const SortedBox = styled.div`
    grid-column:1;
    grid-row:2;
    display:flex;
    align-items:center;
    margin:0 0.5em;
`;

export const SortTeams = styled.div`
    height:2em;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 1em;
    flex:${props => props.type === "name"?  1 : 2};
    border-right:${props => props.type === "name"?  "2px solid #F7F3F7" : ""};
    p{
        color:#000000;
        font-size:0.9em;
    }
    div{
        height:0.9em;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        cursor: pointer;
    }
`;

export const ListTeamsTable = styled.div`
    grid-column:1;
    grid-row:3;
    display:flex;
    flex-direction:column;
`;

export const ListTeamsItem = styled.div`
    margin:0 0.5em;
    border-bottom:2px solid #F7F3F7;
    color:#000000;
    font-size:0.9em;
    display:grid;
    grid-template-columns:1fr 2fr;
    grid-template-rows:3em;

    &:hover{
        background-color:#F7EEF7;
        color:#B13D7C;
        border-radius:0.3em;

        div{
            display:flex;
            cursor: pointer;
        }        
    }
`;

export const ListItemName = styled.span`
    padding:0 1em;
    grid-row:1;
    grid-column:1;
    display:flex;
    align-items:center;
`;

export const ListItemDescription = styled.span`
    grid-column:2;
    padding:0 2em;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const TimesActions = styled.div`
    width:5em;
    display:none;
    justify-content:space-between;
    align-items:center;
`;
 
export const BoxTopFive = styled.div`

    background-color:#FFFFFF;
    header{

    }

`;