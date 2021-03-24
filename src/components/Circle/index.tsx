import styled from 'styled-components';

interface Props {
    color?: string;
  }
  
  export default styled.div<Props>`
    height: 20px;
    width: 20px;
    border-radius: 50%;
  
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
  `