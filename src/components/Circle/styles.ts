import styled from 'styled-components';

interface Props {
    outlined?: boolean;
  }
  
  export const Container = styled.div<Props>`
    height: 20px;
    width: 20px;
    border-radius: 50%;
  
    background-color:  #85B7BD;
    display: flex;
    justify-content: center;
    align-items: center;
  
  `