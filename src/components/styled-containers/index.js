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
    box-shadow: 0 0 0.625rem rgba(255, 255, 0, 0.5),
                0 0 1.25rem rgba(255, 255, 0, 0.5),
                0 0 1.875rem rgba(255, 255, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 0.625rem rgba(255, 255, 0, 1),
                0 0 1.25rem rgba(255, 255, 0, 1),
                0 0 1.875rem rgba(255, 255, 0, 1);
  }
  100% {
    box-shadow: 0 0 2.5rem rgba(255, 255, 0, 0.5),
                0 0 2.5rem rgba(255, 255, 0, 0.5),
                0 0 5rem rgba(255, 255, 0, 0.5);
  }
`;

export const CenteredPageContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

export const FormContainer = styled.div`
  width: 40vw;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.625rem;
  padding: 0.625rem;
  animation: ${neon} 10s linear infinite;

  input,
  p,
  button {
    margin-bottom: 0.625rem;
  }

  img {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.625rem;
  }
`;

export const AnimatedButton = styled.button`
  animation: ${pulse} 4s ease-in-out infinite;
`;
