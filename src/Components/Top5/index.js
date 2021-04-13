import React, { useEffect,useState } from 'react';
import {AVG, AVGText, Box, ListAVGItem, ListContainer} from './styled';
import {Header} from '../MyTeams/styles';

export const TopFive = () => {

    const[listAvgH, setListAvgH] = useState([]);
    const[listAvgL, setListAvgL] = useState([]);

    useEffect(()=>{
        sortAvgH();
        sortAvgL();
    },[]);

    const sortAvgH=()=>{
        const ordenateH = lista.sort((x, y) =>  y.avg - x.avg);
        setListAvgH(ordenateH.slice(0,5));
    }

    const sortAvgL=()=>{
        const copyLista = lista.slice(0,lista.length);
        const ordenateL = copyLista.sort((x, y) =>  x.avg - y.avg);
        setListAvgL(ordenateL.slice(0,5));
    }

    const lista = [
        {
            name:"teste",
            avg:32.9,
        },

        {
            name:"teste",
            avg:31.9,
        },        {
            name:"teste",
            avg:34.9,
        },
        {
            name:"teste",
            avg:31.9,
        },
        {
            name:"teste",
            avg:31.9,
        },        {
            name:"teste",
            avg:28,
        },        {
            name:"teste",
            avg:24,
        },        {
            name:"teste",
            avg:26.5,
        },        {
            name:"teste",
            avg:27,
        }
    ]

    return <Box>
        <Header>Top 5</Header>
        <AVG>
            <AVGText type="left">Highest avg age</AVGText>
            <AVGText type="right">Lowest avg age</AVGText>
            <ListContainer type="left">
                {
                    listAvgH.map((item,key)=>{
                        return <ListAVGItem key={key}>
                            <span>{item.name}</span>
                            <span className="avg">{item.avg}</span>
                        </ListAVGItem>
                    })
                }
            </ListContainer>
            <ListContainer type="right">
                {
                    listAvgL.map((item,key)=>{
                        return <ListAVGItem key={key}>
                            <span>{item.name}</span>
                            <span className="avg">{item.avg}</span>
                            </ListAVGItem>
                    })
                }
                
            </ListContainer>
        </AVG>
    </Box>

}