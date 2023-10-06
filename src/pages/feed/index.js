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
        <p></p>
      ) : recipe.length === 0 ? (
        <p></p>
      ) : (
        recipe.slice(0, 30).map((recipe, i) => (
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
