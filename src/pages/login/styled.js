import styled, { keyframes } from 'styled-components';

const neon = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.2),
                0 0 20px rgba(255, 255, 0, 0.2),
                0 0 30px rgba(255, 255, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.5),
                0 0 20px rgba(255, 255, 0, 0.5),
                0 0 30px rgba(255, 255, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.5),
                0 0 20px rgba(255, 255, 0, 0.5),
                0 0 30px rgba(255, 255, 0, 0.5);
  }
`;

export const LoginPageContainer = styled.div`
    height: 88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    width: 40vw;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    animation: ${neon} 60s linear infinite;
    
    input, p, button {
        margin-bottom: 10px;
        font-size: 3vw;
    }

    img {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 100%;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;
