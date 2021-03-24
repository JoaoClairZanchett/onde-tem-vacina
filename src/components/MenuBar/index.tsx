import React from 'react';
import SeachCard from '../SearchCard';
import { Container } from './styles';

const MenuBar : React.FC = () => {
    return (
      <Container>
        <SeachCard/>
      </Container>
    );
  }

export default MenuBar;