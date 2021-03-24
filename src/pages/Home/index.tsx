import React from 'react';
import List from '../../components/List';
import MenuBar from '../../components/MenuBar';
import News from '../../components/News';
import { Container, Wrapper } from './styles';

const Home : React.FC = () => {
    return (
    <Container>
        <Wrapper>
            <MenuBar />
            <List />
            <News />
        </Wrapper>
    </Container>
    );
  }

export default Home;