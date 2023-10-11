import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles';

const neon = keyframes`
  0% {
    box-shadow: 0 0 30px rgba(255, 255, 0, 0.5),
                0 0 50px rgba(255, 255, 0, 0.5),
                0 0 80px rgba(255, 255, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 255, 0, 1),
                0 0 80px rgba(255, 255, 0, 1),
                0 0 90px rgba(255, 255, 0, 1);
  }
  100% {
    box-shadow: 0 0 90px rgba(255, 255, 0, 0.5),
                0 0 90px rgba(255, 255, 0, 0.5),
                0 0 90px rgba(255, 255, 0, 0.5);
  }
`;

export const HeaderStyled = styled.header`
  height: 10vh;
  width: 100vw;
  background-color: orange;
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  position: relative; 
  &::before {
    content: '';
    position: absolute;
    top: -3px; 
    left: -3px; 
    right: -3px; 
    bottom: 1px; 
    box-shadow: 0 0 80px rgba(255, 255, 0, 0.5), 
                0 0 80px rgba(255, 255, 0, 0.5), 
                0 0 80px rgba(255, 255, 0, 0.5); 
    animation: ${neon} 10s linear infinite;
  }
`;
