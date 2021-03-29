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
    background: rgba(180, 212, 238, 0.25);
    border-radius: 0px 100px 100px 0px;
    padding: 5px 20px;
    margin-left: -20px;

    >span {
      font-weight: bold;
      font-size: 20px;
      color: #262D32;
    }
`
export const Buttons = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`