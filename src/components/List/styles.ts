import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  width: min(601px, 100%);
  width: 60%;

`;

export const Title = styled.div`

  > span {
    color: #000;
    font-weight: 600;
    font-size: 18px;
  }
`

export const LinhaDivisoria = styled.div`
  margin-top: 15px;
  border: 1px solid #E3E9EC;
`

export const MensagemInicial = styled.div`
  margin-top: 15px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;

  > span {
    color: #7E8992;
    font-size: 18px;
    font-style: italic;

    >span {
      margin-right: 5px;
    }
  }
`