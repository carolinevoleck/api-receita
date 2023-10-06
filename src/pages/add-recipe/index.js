import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks';
import { validateName } from '../../constants';
import { CenteredPageContainer as AddRecipePageContainer, DescriptionTextArea, FormContainer, ImageInput, TitleInput } from '../../components';
import { Button } from '@chakra-ui/react';
import { AddRecipe } from '../../constants';
import { PageTitleStyled } from './styled';

export const AddRecipePage = () => {
    const [form, onChangeInputs] = useForm({
        title: "",
        description: "",
        imageUrl: ""
    });

    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isUrlValid, setIsUrlValid] = useState(true);

    useEffect(() => {
        setIsTitleValid(validateName(form.title, 4));
        setIsUrlValid(/http[s]?:\/\/[a-zA-Z]+\.com/.test(form.imageUrl));
    }, [form]);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isTitleValid && isUrlValid) {
                await AddRecipe({
                    title: form.title,
                    description: form.description,
                    imageUrl: form.imageUrl
                });

                alert("Receita cadastrada com sucesso!");
            }
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <AddRecipePageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <PageTitleStyled>Adicionar Nova Receita</PageTitleStyled>
                    <TitleInput
                        value={form.title}
                        onChange={onChangeInputs}
                        isValid={isTitleValid}
                    />
                    <DescriptionTextArea
                        value={form.description}
                        onChange={onChangeInputs}
                        isValid={true}
                    />
                    <ImageInput
                        value={form.imageUrl}
                        onChange={onChangeInputs}
                        isValid={isUrlValid}
                    />
                    <Button type="submit" variant="form-main">
                        Cadastrar
                    </Button>
                </form>
            </FormContainer>
        </AddRecipePageContainer>
    );
};
