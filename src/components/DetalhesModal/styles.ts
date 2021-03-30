import styled from 'styled-components';

interface Props {
    color?: string;
  }

export const ModalCard = styled.div`
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;

    >span {
      color: '#c5cacd';
      margin-top: -15px;
    }
`
export const ModalContent = styled.div`
    padding: 10px 0;
    font-size: 12px;

    > span {
      color: #505861;
    }
`
export const ModalFooter = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
`
export const OutlineButton = styled.button<Props>`
  border-radius: 100px;
  width: 200px;

  padding: 8px;
  border-radius: 25px;
  padding: 5px 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;
  border: 1px solid ${props => props.color};

  >span {
    color: ${props => props.color};

    > svg {
      margin-right: 5px;
    }
  }

  &:hover {
    > span {
      color: #fff;
    }

    background-color: ${props => props.color};
  }
`
export const ModalTitle = styled.div`
    padding: 5px 20px;
    margin-left: -20px;

    >span {
      font-weight: bold;
      font-size: 20px;
      color: #262D32;
    }
`

export const Close = styled.div`
  cursor: pointer;
`

export const RadioButton = styled.input`

`
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: none;
`;

export const RadioButtonLabel = styled.label`
  margin-left: 10px;
  >span {
    color: #262D32;
    font-size: 12px;
  }
`;

export const DoseSendoAplicada = styled.div`
  margin-top: 20px;
  >span {
    font-weight: bold;
    font-size: 14px;
    color: #262D32;  
  }
`

export const Options = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`

export const InformacoesDeAplicacao = styled.div`
    display: flex;
    justify-content: space-between;
`

export const MenuItemText = styled.div`
  color: #262D32;
`

export const FormGroupArea = styled.div`
  width: 45%;
`

export const SliderContainer = styled.div`
    width: 90%;
    padding: 0 20px;`

export const TextArea = styled.textarea`
  height:55px;
  border: none;
  border-bottom: 1px solid #C5CACD;
  width: 100%;
  color: #262D32;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

export const AgeInput = styled.input`
  height:25px;
  border: none;
  border-bottom: 1px solid #C5CACD;
  width: 100%;
  color: #262D32;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }`

export const Comentarios = styled.div`
font-weight: bold;
font-size: 14px;
margin-top: 15px;

> span {
  color: #262D32;
}`

export const Label = styled.div`
font-weight: bold;
font-size: 14px;
margin-top: 10px;
margin-bottom: 5px;

> span {
  color: #262D32;
}
`

export const AvaliarPosto = styled.div`
font-weight: bold;
font-size: 14px;
display: flex;
align-items: center;

> span {
  color: #262D32;
}
`

export const TamanhoFila = styled.div`
font-weight: bold;
font-size: 14px;
margin-top: 20px;

> span {
  color: #262D32;
}
`

export const SliderGroup = styled.div`
  margin-top: 10px;
  display: flex;
`

export const RatingContainer = styled.div`
  margin-left: 10px;
`

export const Button = styled.button`
  background: #286E8C;
  border-radius: 100px;
  margin-left: 15px;
  color: var(--white);

  width: 190px;

  padding: 8px;
  border-radius: 25px;
  padding: 5px 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;
`;