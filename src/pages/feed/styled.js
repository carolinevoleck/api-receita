import styled from 'styled-components';

export const FeedContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  justify-items: center;
  grid-gap: 0.625rem;
  padding-top: 1.25rem;
  margin: 0 auto;

  p {
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
`;

export const RecipeCardStyled = styled.div`
  width: 80%;
  max-width: 18.75rem;
  border: 0.125rem solid yellow;
  border-radius: 0.625rem;
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;
