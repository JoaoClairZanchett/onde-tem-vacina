import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 45px;
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
  color: var(--white);

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

export const Row = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  margin-left: 30px;

  > span {
    color: #262D32;
    margin-left: 5px;
    max-width: 80%;
    font-size: 14px;
  }
`

export const DateSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    
    > span {
      color: #262D32;
    }

    > strong {
      font-size: 16px;
      color: #262D32;
    }
`

export const Welcome = styled.div`
    text-align: start;
    border-bottom: 1px solid #EAEDEE;
    width: 100%;
    padding-bottom: 11px;

  > span {
    font-weight: bold;
    font-size: 14px;
    color: #262D32;
    margin-left: 15px;
  }
`

export const FooterSection = styled.div`
    width: 100%;
    background: rgba(180, 212, 238, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
`