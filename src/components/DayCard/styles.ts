import styled from 'styled-components';

export const Container = styled.div`
    width: 330px;
    height: 155px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;

    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

export const Title = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid #F7F8FA;

    > span {
        font-weight: bold;
        font-size: 16px;
        color: #000;
    }
`

export const Text = styled.div`
    text-align: center;
    padding: 10px;
    >span {
        color: #262D32;
    }
`

export const Button = styled.button`
  background: #286E8C;
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
    
`