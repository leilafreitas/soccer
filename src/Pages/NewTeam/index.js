import React from 'react';
import { CreateTeam } from '../../Components/CreateTeam';
import { Footer } from '../../Components/Footer';
import { Container } from './styled';


export const NewTeam = ()=> {

    return <Container>
        <CreateTeam/>
        <Footer/>
    </Container>
}