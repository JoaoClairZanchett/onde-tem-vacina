import React from 'react';
import PostoCard from '../PostoCard';
import { Container, Title, LinhaDivisoria, MensagemInicial } from './styles';

const List : React.FC = () => {
    return (
      <Container>
        <Title>
          <span>
            Encontre um ponto de vacinação próximo de você.
          </span>
          <LinhaDivisoria/>
          <MensagemInicial>
            <span>
              <span>&#128072;</span>
              Pesquise por CEP / Bairro para localizar os postos próximos de você
            </span>
          </MensagemInicial>
          <PostoCard/>
        </Title>
      </Container>
    );
  }

export default List;