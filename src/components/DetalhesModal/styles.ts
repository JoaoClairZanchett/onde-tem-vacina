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
  > span {
    color: #262D32;
    font-weight: bold;
    font-size: 18px;
  }
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
`

export const AvaliarPosto = styled.div`
font-weight: bold;
font-size: 14px;

> span {
  color: #262D32;
}
`

export const Buttons = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
  background: #286E8C;
  border-radius: 100px;

  width: 165px;

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