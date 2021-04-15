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

import Avatar3 from '../../assets/avatar3.png';
import Avatar1 from '../../assets/avatar1.png';

export const Player = () =>{
    return <Container>
        <Box type="left">
            <Titles>Most Picked Player</Titles>
            <Photos type="left">
                <img src={Avatar3}/>
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
                <img src={Avatar1}/>
                <Percent> <span>25%</span></Percent>
            </Photos>
        </Box>
    </Container>
}