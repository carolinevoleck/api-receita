import styled from 'styled-components';

export const FeedContainerStyled = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80vw;
    justify-items: center;
    grid-gap: 10px;
    padding-top: 20px;
    margin: 0 auto;
    p{
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

`;

export const RecipeCardStyled = styled.div`
  width: 100%;
  max-width: 300px;
  border: 2px solid yellow;
  border-radius: 10px;
  transition: transform 0.5s;
  cursor: pointer;
  position: relative; 

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    
    max-width: 100%;
    margin: 0 auto; 
  }
  
`;