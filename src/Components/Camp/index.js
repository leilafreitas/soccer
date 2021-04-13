import React from 'react';
import {PlusOutlined} from '@ant-design/icons';
import { Box, Cell, Container,Content } from './styled';
import {formacoes} from '../../Helper/Positions';

export const Camp=({formation}) =>{

    const teste= formacoes[formation];

    const setPosition=(forma)=>{
        return<>
        {
            forma.map((forma,key)=>{
                return <Box key={key} row={forma.row} column={forma.col}>
                <Content>
                    <Cell>
                        <PlusOutlined style={{color:"#F7F3F7"}}/>
                    </Cell>
                </Content>
                </Box>
            })
        }
        </>
    }

    const initial=()=>{
        return<>
        {
            teste.map((forma)=>{
                return <>{setPosition(forma)}</>
            })
        }
        </>
    }

    return <Container>
        {initial()}
        <Box row="9" column="3">
        <Content >
            <Cell>
                <PlusOutlined style={{color:"#F7F3F7"}}/>
            </Cell>
        </Content>
        </Box>
    </Container>
}