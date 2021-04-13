import React from 'react';
import {Container,
        Info,
        Title,
        Box,
        Content } from './styled';

export const Card = ({data}) =>{

    return <Container>
        <Content>
            <Box side="left">
                <p><Title>Name:</Title><Info>{data.name}</Info></p>
                <p><Title>Nationality:</Title><Info>{data.nationality}</Info></p>
            </Box>
            <Box side="right">
                <p><Title>Age:</Title><Info>{data.age}</Info></p>
            </Box>
        </Content>
    </Container>

}