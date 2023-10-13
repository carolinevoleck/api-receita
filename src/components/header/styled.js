import styled, { keyframes } from 'styled-components';


const neon = keyframes`
  0% {
    box-shadow: 0 0 1.875rem rgba(255, 255, 0, 0.5),
                0 0 3.125rem rgba(255, 255, 0, 0.5),
                0 0 5rem rgba(255, 255, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 3.125rem rgba(255, 255, 0, 1),
                0 0 5rem rgba(255, 255, 0, 1),
                0 0 5.625rem rgba(255, 255, 0, 1);
  }
  100% {
    box-shadow: 0 0 5.625rem rgba(255, 255, 0, 0.5),
                0 0 5.625rem rgba(255, 255, 0, 0.5),
                0 0 5.625rem rgba(255, 255, 0, 0.5);
  }
`;

export const HeaderStyled = styled.header`
  height: 10vh;
  width: 100vw;
  background-color: orange;
  display: flex;
  flex-direction: row;
  padding: 0.625rem;
  justify-content: space-between;
  align-items: center;
  position: relative; 
  &::before {
    content: '';
    position: absolute;
    top: -0.1875rem; 
    left: -0.1875rem; 
    right: -0.1875rem; 
    bottom: 0.0625rem; 
    box-shadow: 0 0 5rem rgba(255, 255, 0, 0.5), 
                0 0 5rem rgba(255, 255, 0, 0.5), 
                0 0 5rem rgba(255, 255, 0, 0.5); 
    animation: ${neon} 10s linear infinite;
  }

  @media (max-width: 768px) {
  
  width: 100vw;
  padding: 1.25rem;
 
  }
`;
