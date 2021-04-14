import React,{useEffect, useState} from 'react';
import api from '../../Helper/Api';
import { Camp } from '../Camp';
import { Card } from '../CardPlayer';
import {Container,
        Header,
        Title,
        TextArea,
        InputText,
        Box,
        Content,
        FormItem,
        SubTitle,
        CampContainer,
        RadioGroup,
        BoxPlayers,
        Select,
        SaveBtn,
        TagContainer,
        TagTextArea,
        Tag,
        FormItemTags} from './styled';
import {CloseOutlined} from "@ant-design/icons"
import {timeSchema} from '../../Helper/Validation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

let searchTimer = null;
    
export const CreateTeam = () =>{
    const [checkBox,setCheckBox] = useState("");
    const [players, setPlayers] = useState([]);
    const [playersSelecteds,setPlayersSelected] = useState([]);
    const [tags,setTags] = useState(["eita","preula"]);
    const [name, setName] = useState("");
    const [description,setDescription] = useState("");
    const [site,setSite] = useState("");
    const [formation,setFormation] = useState(0);
    const [search, setSearch] = useState("");
    const [activeSearch, setActiveSearch] = useState('');
    const [inputTextTag,setInputTextTag] = useState("");

    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
            setActiveSearch(search);
        },1000)
    },[search]);
    
    useEffect(()=>{

        getPlayers();
            
    },[activeSearch,playersSelecteds]);

    const addPlayer=(player)=>{
        setPlayersSelected([...playersSelecteds,player]);
    }

    const getPlayers=async()=>{
        const list = await api.getPlayers();
        let filtered=[];
        if(activeSearch != ""){
            filtered= list.filter(item => item.name.toUpperCase().includes(activeSearch.toUpperCase()));
        }else{
            filtered = list;
        }

        const finalList = filtered.filter( x => { 
            return JSON.stringify(playersSelecteds).indexOf(JSON.stringify(x)) < 0;
          }); 
          
        setPlayers(finalList);
    }

    const handleChange = (event) => {
        setCheckBox(event.target.value);
    };

    const handleChangeFormation= (event) => {
        setFormation(event.target.value);
        setPlayersSelected([]);
    };

    const deleteTag =(index)=>{
        let tagsCopy = [...tags];
        let newarray =  tagsCopy.filter((item,ix)=> ix !== index);
        setTags(newarray);
    }

    const handleSave = () =>{
        const time= {
            name:name,
            description:description,
            type:checkBox,
            site:site,
            players:playersSelecteds,
            tags:tags,
            formation:formation
        }
        timeSchema.isValid(time).then(value=>{
            if(value){
                api.postTime(time);
                setName("");
                setDescription("");
                setTags([]);
                setPlayersSelected([]);
                setSite("");
                setCheckBox("");
                setSearch("");
                toast.success('Time cadastrado com sucesso');
            }else{
                toast.error('Error: Verifique os campos');
            }
        
        })
    }

    const setPlayerCard = () =>{
        return <BoxPlayers>
            {
                players.map((item,key)=>{
                    return <Card data={item} key={key} setPlayers={addPlayer}/>
                })
            }
        </BoxPlayers>
    }

    const handleTags = (event) => {
        if(event.key === 'Enter' && inputTextTag !== ""){
            setTags([...tags,inputTextTag]);
            setInputTextTag("");
            
        }
    }

    return <Container>
        <Header>Create your team</Header>
        <Title>TEAM INFORMATION</Title>
        <Content>
            <Box side="left">
                <FormItem row="1">
                    <SubTitle>
                        Team name
                    </SubTitle>
                    <InputText placeholder="Insert team name" value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                </FormItem>

                <FormItem row="2">
                    <SubTitle>
                        Description
                    </SubTitle>
                    <TextArea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </FormItem>
            </Box>

            <Box>
                <FormItem row="1">
                    <SubTitle>
                        Team website
                    </SubTitle>
                    <InputText placeholder="www.myteam.com" value={site} 
                    onChange={(e)=>setSite(e.target.value)}/>
                </FormItem>

                <FormItem row="2">
                    <SubTitle>
                        Team type
                    </SubTitle>
                    <RadioGroup>
                        <input
                                type='radio'
                                checked={checkBox === 'Real'}
                                value="Real"
                                onChange={handleChange}
                        /><label>Real</label>
                        <input
                            type='radio'
                            checked={checkBox === 'Fantasy'}
                            value="Fantasy"
                            onChange={handleChange}
                        /><label>Fantasy</label>
                    </RadioGroup>
                </FormItem>

                <FormItemTags row="3">
                    <SubTitle>
                        Tags
                    </SubTitle>
                    <TagContainer>
                        <ul>
                            {
                                tags.length > 0 &&
                                    tags.map((item,key)=>{
                                       return <Tag key={key}>{item}<CloseOutlined 
                                        className="button"style={{color:"#ffffff"}} 
                                        onClick={()=>{deleteTag(key)}}/>
                                        </Tag>         
                                    })
                            }

                            <Tag className="input-li">
                                <TagTextArea placeholder="Tag" 
                                value={inputTextTag}
                                onChange={(e)=>{setInputTextTag(e.target.value)}}
                                onKeyPress={(e)=>handleTags(e)} 
                                />
                            </Tag>
                        </ul>
                    </TagContainer>  
                </FormItemTags>

            </Box>
                        
        </Content>

        <Title>CONFIGURE SQUAD</Title>
        <Content>
            <CampContainer>
                <SubTitle>Formation</SubTitle>
                <Select defaultValue={0} onChange={handleChangeFormation}>
                    <option value={0}>3-2-2-3</option>
                    <option value={1}>3-2-3-1</option>
                    <option value={2}>3-4-3</option>
                    <option value={3}>3-5-2</option>
                    <option value={4}>4-2-3-1</option>
                    <option value={5}>4-3-1-1</option>
                    <option value={6}>4-3-2</option>
                    <option value={7}>4-4-2</option>
                    <option value={8}>4-5-1</option>
                    <option value={9}>5-4-1</option>
                </Select>
                <Camp formation={formation}/>
                <SaveBtn onClick={()=>handleSave()}>Save</SaveBtn>
                <ToastContainer/>
            </CampContainer>
            <Box>
                <FormItem row="1">
                    <SubTitle>
                        Search Players
                    </SubTitle>
                    <InputText placeholder="" onChange={(e)=>setSearch(e.target.value)}/>
                </FormItem>
                <FormItem row="2/4">
                    {setPlayerCard()}
                </FormItem>
            </Box>
        </Content>
    </Container>
}