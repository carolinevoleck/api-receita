import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetRecipe } from '../../constants';
import { PageContainer } from "./styled";

export const RecipeDetailPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        
        GetRecipe(id.toString())
            .then((data) => {
                console.log("Dados da API:", data); 
                if (data && data.length > 0) {
                    setRecipe(data[0]); 
                } else {
                    
                    setRecipe(null); 
                }
            })
            .catch((e) => {
            
                alert(e.response?.data.message || "Ocorreu um erro ao carregar os detalhes da receita.");
            });
    }, [id]);

    return !recipe ? (
        <h1>......</h1>
    ) : (
        <PageContainer>
            <img src={recipe.imageUrl} alt="Imagem da receita" />
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </PageContainer>
    );
};
