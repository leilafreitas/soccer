import { useEffect, useState } from 'react';
import {Container,
        BoxRight,
        BoxLeft
        } from './styles';
import {MyTeams} from '../../Components/MyTeams';
import api from '../../Helper/Api';
import { TopFive } from '../../Components/Top5';
import {Player} from '../../Components/Player';
import ReactTooltip from 'react-tooltip';
export const HomeScreen = () =>{

    const [teams,setTeams] = useState([]);
    const [orderByDescription,setOrderByDescripion] = useState(false);
    const [orderByName,setOrderByName] = useState(false);

    useEffect(()=>{
        getTeams();
        ReactTooltip.rebuild();           
    },[]);

    const orderName = () =>{
        const copyLista = [...teams];
        let ordenate=[];
        if(orderByName){
            ordenate = copyLista.sort(function(a,b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            });
            setOrderByName(false);
            
        }else{
            ordenate = copyLista.sort(function(a,b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            }).reverse();
            setOrderByName(true);
        }
        setTeams(ordenate);        
    }

    const orderDescription = () =>{
        const copyLista = [...teams];
        let ordenate=[];
        if(orderByDescription){
            ordenate = copyLista.sort(function(a,b) {
                return a.description < b.description ? -1 : a.description > b.description ? 1 : 0;
            });
            setOrderByDescripion(false);
            
        }else{
            ordenate = copyLista.sort(function(a,b) {
                return a.description < b.description ? -1 : a.description > b.description ? 1 : 0;
            }).reverse();
            setOrderByDescripion(true);
        }
        setTeams(ordenate);        
    }

    const deleteTeam = async(team) =>{
        await api.deleteTeam(team);
        getTeams();
    }
    
    const getTeams=async()=>{
        const teamsCopy = await api.getTeams();
        console.log(teamsCopy);
        setTeams(teamsCopy);
    }

    return <Container>
        <BoxLeft>
            <MyTeams data={teams}
             orderName={orderName}
             orderDescription={orderDescription}
             deleteTeam={deleteTeam}/>
        </BoxLeft>
        
        <BoxRight>
            <TopFive data={teams}/>
            <Player/>
        </BoxRight>
    </Container>
}