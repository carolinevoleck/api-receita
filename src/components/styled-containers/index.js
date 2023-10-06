import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const neon = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.5),
                0 0 20px rgba(255, 255, 0, 0.5),
                0 0 30px rgba(255, 255, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 1),
                0 0 20px rgba(255, 255, 0, 1),
                0 0 30px rgba(255, 255, 0, 1);
  }
  100% {
    box-shadow: 0 0 40px rgba(255, 255, 0, 0.5),
                0 0 40px rgba(255, 255, 0, 0.5),
                0 0 80px rgba(255, 255, 0, 0.5);
  }
`;

export const CenteredPageContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
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
  animation: ${neon} 10s linear infinite;

  input,
  p,
  button {
    margin-bottom: 10px;
  }

  img {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

export const AnimatedButton = styled.button`
  animation: ${pulse} 4s ease-in-out infinite;
`;
