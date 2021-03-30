import React from 'react';
import Footer from '../../components/Footer';
import List from '../../components/List';
import MenuBar from '../../components/MenuBar';
import RightBar from '../../components/RightBar';
import { Container, Wrapper } from './styles';

const Home : React.FC = () => {
    return (
    <Container>
        <Wrapper>
            <List />
            <RightBar />
        </Wrapper>
        <Footer/>
    </Container>
    );
  }

export default Home;