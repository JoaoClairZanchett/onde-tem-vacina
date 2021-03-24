import React from 'react';
import { Container, Badge, SearchInput, Title, RadioButton, Item, RadioButtonLabel } from './styles';

const { useState } = React;

const SeachCard : React.FC = () => {
    const [select, setSelect] = useState("optionA");

    const handleSelectChange = () => {
    };

    return (
    <Container>
        <Badge>
            <span>
              Encontre um Posto
            </span>
          </Badge>
          <SearchInput placeholder='CEP ou Bairro' />
          <Title>
            <span>
              Distância
            </span>
          </Title>
          <Item>
            <RadioButton
              type="radio"
              name="radio"
              value="optionA"
              checked={select === "optionA"}
              onChange={event => handleSelectChange()}
            />
            <RadioButtonLabel >
              <span>
                Qualquer distância
              </span>
            </RadioButtonLabel>
          </Item>
          <Item>
            <RadioButton
              type="radio"
              name="radio"
              value="optionB"
              checked={select === "optionA"}
              onChange={event => handleSelectChange()}
            />
            <RadioButtonLabel >
              <span>
                5 Km
              </span>
            </RadioButtonLabel>
          </Item>
          <Item>
            <RadioButton
              type="radio"
              name="radio"
              value="optionC"
              checked={select === "optionA"}
              onChange={event => handleSelectChange()}
            />
            <RadioButtonLabel >
              <span>
                10 Km
              </span>
            </RadioButtonLabel>
          </Item>
          <Item>
            <RadioButton
              type="radio"
              name="radio"
              value="optionD"
              checked={select === "optionA"}
              onChange={event => handleSelectChange()}
            />
            <RadioButtonLabel >
              <span>
                25 Km
              </span>
            </RadioButtonLabel>
          </Item>
    </Container>
    );
  }

export default SeachCard;