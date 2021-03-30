import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
`;

export const Wrapper = styled.footer`
  height:65px;
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

    >strong {
        margin: 0 5px;
    }
`;

export const SocialMidiaIcon = styled.div`
    cursor: pointer;
    margin: 0 5px;
`