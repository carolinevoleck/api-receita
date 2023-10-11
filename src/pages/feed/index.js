import React, { useEffect, useState } from "react";
import { ListRecipe } from "../../constants";
import { goToRecipeDetailPage, goToAddRecipePage } from "../../routes";
import { useNavigate } from "react-router-dom";
import { FeedContainerStyled, RecipeCardStyled } from "./styled";
import { Button } from "@chakra-ui/react";

export const FeedPage = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ListRecipe()
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  const onClickCard = (id) => {
    goToRecipeDetailPage(navigate, id);
  };

  const onClickAddButton = () => {
    goToAddRecipePage(navigate);
  }

  return (
    <FeedContainerStyled>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Ocorreu um erro.</p>
      ) : recipe.length === 0 ? (
        <p>Nenhuma receita disponível.</p>
      ) : (
        recipe.slice(0, 100)
          .filter((recipe) => isValidImageURL(recipe.imageUrl))
          .map((recipe, i) => (
            <RecipeCardStyled key={i} onClick={() => onClickCard(recipe.id)}>
              <img src={recipe.imageUrl} alt={`Receita ${i}`} />
              <h3>{recipe.title}</h3>
            </RecipeCardStyled>
          ))
      )}
      <Button onClick={() => onClickAddButton()} variant="add-recipe">+</Button>
    </FeedContainerStyled>
  );
};

// Função para verificar se a URL da imagem é válida
const isValidImageURL = (url) => {
  if (!url) return false; 

  
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif",".bmp", ".tiff", ".svg", ".webp", ".raw", ".cr2", ".nef"];
  return imageExtensions.some(extension => url.toLowerCase().endsWith(extension));
}
