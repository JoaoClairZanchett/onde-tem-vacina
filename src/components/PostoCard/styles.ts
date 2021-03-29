import styled from 'styled-components';
import Circle from '../Circle';

export const Container = styled.div`
  margin-top: 15px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Header = styled.div`
  border-bottom: 1px solid #F7F8FA;
  padding: 10px;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;

  > span {
    color: #000;
    font-weight: 700;
    font-size: 18px;
    margin-left: 10px;
  }
`

export const Body = styled.div`
  padding: 10px;

  > span {
    color: #505861
  }
`

export const DetailsBody = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
border-bottom: 1px solid #F7F8FA;

> span {
  color: #505861
}
`

export const NomeVacina = styled.div`
margin-top: 10px;
display: flex;
border-bottom: 1px solid #F7F8FA;
padding-bottom: 10px;

> span {
  margin-left: 5px;
  font-weight: 700;
  font-size: 14px;
  color: #262d32;
}
`

export const Circulo = styled(Circle)`

`

export const ChartColumn = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >span {
    margin-left: 5px;
    font-weight: 700;
    font-size: 14px;
    color: #262d32;
  }
`

export const DetailsContainer = styled.div`
  padding: 10px;
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

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const VacinesInfo = styled.div`
  display: flex;

  > span {
    margin-right: 10px;
    color: #262D32;
  }
`

export const Badge = styled.div`
    background-color: #34A866;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px 0 0 25px;
`

