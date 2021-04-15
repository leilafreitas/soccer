import React, { useEffect,useState } from 'react';
import {AVG, AVGText, Box, ListAVGItem, ListContainer} from './styled';
import {Header} from '../MyTeams/styles';

export const TopFive = ({data}) => {

    const[listAvgH, setListAvgH] = useState([]);
    const[listAvgL, setListAvgL] = useState([]);

    useEffect(()=>{
        getAvg();
    },[data]);

    function somar(total, player) {
        return total + player.age
    }

    const getAvg = () => {
        if(data.length > 0){
            const lista = data.map((item,key) =>({
                ...item,
                avg:(item.players.reduce(somar,0)/item.players.length).toFixed(1),
            }));
            sortAvgH(lista);
            sortAvgL(lista);
        }
    }

    const sortAvgH=(lista)=>{
        const ordenateH = lista.sort((x, y) =>  y.avg - x.avg);
        setListAvgH(ordenateH.slice(0,5));
    }

    const sortAvgL=(lista)=>{
        const ordenateL = lista.sort((x, y) =>  x.avg - y.avg);
        setListAvgL(ordenateL.slice(0,5));
    }

    return <Box>
        <Header>Top 5</Header>
        <AVG>
            <AVGText type="left">Highest avg age</AVGText>
            <AVGText type="right">Lowest avg age</AVGText>
            <ListContainer type="left">
                {
                    listAvgH.length > 0 &&
                        listAvgH.map((item,key)=>{
                            return <ListAVGItem key={key} row={key+1}>
                                <span>{item.name}</span>
                                <span className="avg">{item.avg}</span>
                            </ListAVGItem>
                        })
                }
            </ListContainer>
            <ListContainer type="right">
                {
                    listAvgL.length > 0 &&
                        listAvgL.map((item,key)=>{
                            return <ListAVGItem key={key} row={key+1}>
                                <span>{item.name}</span>
                                <span className="avg">{item.avg}</span>
                                </ListAVGItem>
                        })
                }
                
            </ListContainer>
        </AVG>
    </Box>

}