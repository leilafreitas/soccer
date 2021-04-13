import styled from 'styled-components';

export const Container = styled.div`
    margin:3em;
    flex:1;
    background-color:#FFFFFF;
    border-radius:0.5rem;
`;
export const Header = styled.header`
    height:4em;
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

export const Title = styled.div`
    height:3em;
    display:flex;
    flex:1;
    color:#9B9B9B;
    font-weight:bold;
    font-size:1em;
    align-items:center;
    justify-content:center;
    margin:1rem 0;
`;

export const Content = styled.section`
    flex:1;
    display:grid;
    grid-template-columns:1fr 6fr 3fr 6fr 1fr;
`;

export const Box = styled.div`
    grid-column:${props => props.side === "left"?  2 : 4};
    flex:1;
    display:grid;
    grid-template-rows:${props => props.side === "left"?  "1fr 3fr" : "1fr 1fr 2fr"};
    height:17em;
`;

export const Camp = styled.div`
    grid-column:2;
    flex:1;

`;

export const FormItem = styled.label`
    grid-row:${props => props.row};
    width:100%;
    font-size:0.9em;
    display:grid;
    grid-template-rows:2em 1fr;
    margin-bottom:1rem;
    input,textarea{
        border:${props => props.error === true?  "0.15em solid #B31256" : "0.15em solid #F7F3F7"};
        resize:none;
        ::placeholder{
            color:#9B9B9B;
        }
    }

    span{
        color:${props => props.error === true?  "#B31256" : "#000000"};
    }

`;

export const SubTitle = styled.span`
    grid-row:1;
    flex:1;
    height:20%;
    font-weight:bold;
    margin-bottom:0.5em;
`;

export const InputText = styled.input`
    grid-row:2;
    flex:1;
    border-radius:0.2em;
`;

export const TextArea = styled.textarea`
    grid-row:2;
    flex:1;
    border-radius:0.2em;
    height:100%;
`;

export const RadioGroup = styled.div`
    flex:1;
    font-weight:400;
    color:#9B9B9B;
    label{
        margin-right:2em;
    }

    input[type=radio]:checked + label{
        color:#B31256;  
    }

    input[type="radio"] {
    -moz-appearance: none;
    appearance: none;
          
    width: 0.9rem;
    height: 0.9rem;
    padding: 1.5px;
    background-clip: content-box;
    border: 1px solid #9B9B9B;
    background-color: white;
    border-radius: 50%;
    }
          
    input[type="radio"]:checked {
    outline: none;
    background-color: #B31256;
    }
`;

export const BoxPlayers = styled.div`
    grid-row:1/3;
    flex:1;
    overflow:auto;
    border-bottom:0.15em solid #F7F3F7;
`;


export const CampContainer= styled.div`
    grid-column:2;
    flex:1; 
`;

export const Select= styled.select`
    margin-left:1em;
    flex:1;
    height:2em;
    min-width:10em;
`;


export const SaveBtn = styled.div`
    margin-top:1em;
    flex:1;
    height:3rem;
    border-radius:0.3em;
    margin-bottom:3em;
    color:#ffffff;
    font-size:1rem;
    font-weight:400;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:linear-gradient(#94337E,#88307E);

`;


