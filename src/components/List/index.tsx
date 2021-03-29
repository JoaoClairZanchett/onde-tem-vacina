import React from 'react';
import PostoCard from '../PostoCard';
import { Container, Title, MensagemInicial, SearchInput } from './styles';

const List : React.FC = () => {
    return (
      <Container>
        <Title>
          <span>
            Encontre um Ponto
          </span>
          <MensagemInicial>
            <SearchInput placeholder='Pesquise pontos de vacinação pelo seu CEP ou bairro' />
          </MensagemInicial>
          <PostoCard/>
        </Title>
      </Container>
    );
  }

export default List;