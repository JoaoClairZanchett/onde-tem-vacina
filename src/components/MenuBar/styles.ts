import styled from 'styled-components';

export const Container = styled.div`
  display: none;

@media(min-width: 500px) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  top: 0;
  left: 0;

  padding: 9px 19px 20px;
  width: 20%;
  height: calc(100vh - 70px);

  max-height: 100vh;
  overflow-y: auto;
}
`;