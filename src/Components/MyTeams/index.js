import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import {PlusOutlined,CaretDownOutlined,CaretUpOutlined,DeleteFilled,ShareAltOutlined, EditFilled} from "@ant-design/icons"
import {BoxMyTeams,
        BottomPlus,
        SortTeams,
        Header,
        SortedBox,
        ListTeamsTable,
        ListTeamsItem,
        ListItemName,
        ListItemDescription,
        TimesActions
    } from './styles';
import api from '../../Helper/Api';
import ReactTooltip from 'react-tooltip';

export const MyTeams = ({data,deleteTeam}) =>{

const [teams,setTeams] = useState([]);    
const [orderByDescription,setOrderByDescripion] = useState(true);
const [orderByName,setOrderByName] = useState(true); 

useEffect(()=>{
    setTeams(data);
},[data])

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

return  <BoxMyTeams>
            <Header>
                <p>My teams</p>

                <Link to="/newteam"><BottomPlus><PlusOutlined style={{ color: '#ffffff' }} /></BottomPlus></Link>
            </Header>
            <SortedBox>
                <SortTeams type="name">
                    <p>Name</p>
                    <div onClick={()=>orderName()}>
                        <CaretUpOutlined style={{fontSize:"0.7em" ,color:"#000000"}}/>
                        <CaretDownOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                    </div>
                </SortTeams>
                <SortTeams type="description">
                    <p>Description</p>
                    <div onClick={()=>{orderDescription()}}>
                        <CaretUpOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                        <CaretDownOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                    </div>
                </SortTeams>                
            </SortedBox>
            <ListTeamsTable>
                    {
                        (teams.length > 0 &&
                        teams.map((item,key)=>{
                            return <ListTeamsItem key={key}>
                                <ListItemName>{item.name}</ListItemName>
                                <ListItemDescription>
                                    <span>{item.description}</span>
                                    <TimesActions>
                                            <DeleteFilled 
                                            data-tip="Delete" data-for="tip-top"
                                            onClick={()=>deleteTeam(item.teamId)} 
                                            />
                                            <ShareAltOutlined
                                            data-tip="Share" data-for="tip-top" />
                                            <EditFilled
                                            data-tip="Edit" data-for="tip-top"/>
                                    </TimesActions>
                                </ListItemDescription>
                                </ListTeamsItem>
                        })
                        )
                    }
            </ListTeamsTable>
    </BoxMyTeams>
}