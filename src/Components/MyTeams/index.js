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
import ReactTooltip from 'react-tooltip';

export const MyTeams = ({data,orderName,orderDescription,deleteTeam}) =>{

return  <BoxMyTeams>
            <Header>
                <p>My teams</p>
                <BottomPlus><PlusOutlined style={{ color: '#ffffff' }} /></BottomPlus>
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
                    <div onClick={()=>orderDescription()}>
                        <CaretUpOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                        <CaretDownOutlined style={{fontSize:"0.7em",color:"#000000"}}/>
                    </div>
                </SortTeams>                
            </SortedBox>
            <ListTeamsTable>
                    {
                        (data.length > 0 &&
                        data.map((item,key)=>{
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