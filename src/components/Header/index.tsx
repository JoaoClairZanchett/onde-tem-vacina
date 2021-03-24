import React from 'react';
import { Container, Wrapper } from './styles';
import {ReactComponent as Logo} from './ondeTemVacina.svg';

const Header : React.FC = () => {
    return (
      <Container>
        <Wrapper>
            <Logo/>
        </Wrapper>
      </Container>
    );
  }

export default Header;