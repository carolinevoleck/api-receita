import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  
  p {
    max-width: 30vw; /* Aumente a largura máxima para ajustar o texto em telas menores */
    text-align: center;
    margin-top: 20px;
  }
  
  img {
    width: 30vw; /* Ajuste o tamanho da imagem para se adequar a telas menores */
    max-height: 30vw; /* Remova a altura máxima da imagem para manter a proporção */
    margin-top: 70px; /* Reduza a margem superior para economizar espaço */
    border-radius: 8px;
  }
  
  h1 {
    text-align: center;
    margin-top: 10px;
    font-size: 16px; /* Reduza o tamanho da fonte para dispositivos móveis */
    font-style: oblique;
    font-weight: 100;
  }
  
  h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 40px; 
        font-size: 24px; 
        max-width: 80%; 
        margin: 0 auto;
        min-height: 200px;
  }

  @media (max-width: 768px) {
    img {
      width: 50vw; /* Ajuste ainda mais o tamanho da imagem para telas pequenas */
    }
  }
`;
