import React from 'react';
import { ModalCard, ModalHeader, ModalTitle, ModalContent, ModalFooter, Buttons, OutlineButton, Button, AvaliarPosto, Item, RadioButton, RadioButtonLabel, DoseSendoAplicada, Options, InformacoesDeAplicacao } from './styles';

interface Props {
    temVacina: () => void;
    naoTemVacina: () => void;
  }

  const { useState } = React;

const DetalhesModal : React.FC<Props> = ({temVacina, naoTemVacina}) => { 

    const [rating, setRating] = useState(1);
    const [selectedDose, setSelectedDose] = useState();

    function handleOnChangeRating(value: number) {
        setRating(value);
    }

    function handleSelectChange(value: string) {
        
    }

    return (
        <ModalCard>
            <ModalHeader>
                <ModalTitle>
                    <span>
                        Eii, nos conte mais sobre a vacinação no CMS Heitor Beltrão
                    </span>
                </ModalTitle>
                    <span>
                        x
                    </span>
            </ModalHeader>
            <ModalContent>
                <AvaliarPosto>
                    <span>
                        Avalie o posto:
                    </span>
                    
                </AvaliarPosto>
                <DoseSendoAplicada>
                    <span>
                        Qual dose está sendo aplicada ?
                    </span>
                    <Options>
                        <Item>
                            <RadioButton
                            type="radio"
                            name="radio"
                            value="optionA"
                            checked={selectedDose === "optionA"}
                            />
                            <RadioButtonLabel >
                            <span>
                                Primeira dose
                            </span>
                            </RadioButtonLabel>
                        </Item>
                        <Item>
                            <RadioButton
                            type="radio"
                            name="radio"
                            value="optionA"
                            checked={selectedDose === "optionA"}
                            />
                            <RadioButtonLabel >
                            <span>
                                Segunda dose
                            </span>
                            </RadioButtonLabel>
                        </Item>
                        <Item>
                            <RadioButton
                            type="radio"
                            name="radio"
                            value="optionA"
                            checked={selectedDose === "optionA"}
                            />
                            <RadioButtonLabel >
                            <span>
                                Primeira e segunda dose
                            </span>
                            </RadioButtonLabel>
                        </Item>
                    </Options>
                </DoseSendoAplicada>
                <InformacoesDeAplicacao>
                    
                </InformacoesDeAplicacao>
            </ModalContent>
            <ModalFooter>
                <span>
                    Tem vacina nete pornto hoje ?
                </span>
                <Buttons>
                <OutlineButton color='#7E8992' onClick={() => {naoTemVacina();}}>
                    <span>
                        Não, obrigado
                    </span>
                </OutlineButton>
                <Button onClick={() => {temVacina();}}>
                    <span>
                        Enviar informações
                    </span>
                </Button>
                </Buttons>
            </ModalFooter>
        </ModalCard>
    );
}

export default DetalhesModal;