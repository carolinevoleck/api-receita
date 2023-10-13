import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  
  p {
    max-width: 30vw; 
    justify-content: center;
    margin-top: 1.25rem;
  }
  
  img {
    width: 30vw; 
    max-height: 30vw; 
    margin-top: 4.375rem; 
    border-radius: 0.5rem;
  }
  
  h1 {
    text-align: center;
    margin-top: 0.625rem;
    font-size: 1rem; /* Reduza o tamanho da fonte para dispositivos móveis */
    font-style: oblique;
    font-weight: 100;
  }
  
  h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2.5rem; 
        font-size: 1.5rem; 
        max-width: 80%; 
        margin: 0 auto;
        min-height: 12.5rem;
  }

  @media (max-width: 48rem) {
    img {
      width: 50vw; 
    }
    p {
      max-width: 50vw; 
      justify-content: center;
      margin-top: 1.25rem;
    }
  }
`;
