import { useEffect } from 'react';
import {Container,
        BoxRight,
        BoxLeft
        } from './styles';
import {MyTeams} from '../../Components/MyTeams';
import api from '../../Helper/Api';
import { TopFive } from '../../Components/Top5';
import {Player} from '../../Components/Player';

export const HomeScreen = () =>{

    useEffect(()=>{

        getTeams();
            
    },[]);

    const getTeams=async()=>{
        const taskListCopy = await api.getTeams();
        console.log(taskListCopy);
    }

    return <Container>
        <BoxLeft>
            <MyTeams/>
        </BoxLeft>
        
        <BoxRight>
            <TopFive/>
            <Player/>
        </BoxRight>
    </Container>
}