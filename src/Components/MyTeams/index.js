import { useEffect } from 'react';
import {PlusOutlined,CaretDownOutlined,CaretUpOutlined,DeleteFilled,ShareAltOutlined, EditFilled} from "@ant-design/icons"
import {BoxMyTeams,
        BoxTopFive,
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

export const MyTeams = () =>{

    const lista = [
        {
            name:"Leila",
            description:"Linda"
        },
        {
            name:"Maria",
            description:"Linda"
        },
        {
            name:"Carlos",
            description:"Doido"
        }
    ]

return  <BoxMyTeams>
            <Header>
                <p>My teams</p>
                <BottomPlus><PlusOutlined style={{ color: '#ffffff' }} /></BottomPlus>
            </Header>
            <SortedBox>
                <SortTeams type="name">
                    <p>Name</p>
                    <div>
                        <CaretUpOutlined style={{fontSize:"0.7em" ,color:"#000000"}}/>
                        <CaretDownOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                    </div>
                </SortTeams>
                <SortTeams type="description">
                    <p>Description</p>
                    <div>
                        <CaretUpOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                        <CaretDownOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                    </div>
                </SortTeams>                
            </SortedBox>
            <ListTeamsTable>
                    {
                        lista.map((item,key)=>{
                            return <ListTeamsItem>
                                <ListItemName>{item.name}</ListItemName>
                                <ListItemDescription>
                                    {item.description}
                                    <TimesActions>
                                            <DeleteFilled />
                                            <ShareAltOutlined />
                                            <EditFilled/>
                                    </TimesActions>
                                </ListItemDescription>
                                </ListTeamsItem>
                        })
                    }
            </ListTeamsTable>
    </BoxMyTeams>
}