import styled from 'styled-components';

export const Container = styled.div`
    width: 330px;
    height: 324px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 15px;

    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

export const Badge = styled.div`
  height: 30px;
  width: 195px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;

  background: #B4D4EE;

  > span {
    color: #262D32;
    font-size: 18px;
  }
`;

export const SearchInput = styled.input`
  height:35px;
  border: none;
  border-bottom: 1px solid #C5CACD;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
  padding: 5px;
  color: #262D32;
    font-size: 18px;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

export const Title = styled.div`
  padding-left: 15px; 
  padding-top: 10px;
  padding-bottom: 10px;
  >span {
    color: #000;
    font-weight: 500;
  }
`

export const RadioButton = styled.input`

`
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: none;
  padding-left: 15px;
`;

export const RadioButtonLabel = styled.label`
  margin-left: 10px;
  >span {
    color: #262D32;;
  }
`;