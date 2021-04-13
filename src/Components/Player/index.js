import React from 'react';
import { 
        Container,
        Box,
        Line,
        Photos,
        Middle,
        Cicle, 
        Titles,
        Percent} from './styled';



export const Player = () =>{
    return <Container>
        <Box type="left">
            <Titles>Most Picked Player</Titles>
            <Photos type="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Senadora_Leila_Barros.jpg"/>
                <Percent> <span>75%</span></Percent>
            </Photos>
            
        </Box>
        <Middle>
            <Line/>
            <Cicle/>
        </Middle>
        <Box type="right">
            <Titles>Less Picked Player</Titles>
            <Photos type="right">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Senadora_Leila_Barros.jpg"/>
                <Percent> <span>25%</span></Percent>
            </Photos>
        </Box>
    </Container>
}