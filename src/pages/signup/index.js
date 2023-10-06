import React, { useState } from 'react';
import { useForm } from '../../hooks';
import { validateEmail, validatePassword, validateName } from '../../constants';
import {
    CenteredPageContainer as SignupPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput,
    NameInput
} from '../../components';
import {
    Button
} from '@chakra-ui/react';
import logo from '../../assets/logo.jpeg';
import { Signup } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { goToFeedPage } from '../../routes';

export const SignupPage = () => {
    const navigate = useNavigate();

    const [form, onChangeInputs] = useForm({
        email: "",
        password: "",
        name: ""
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));
        setIsNameValid(validateName(form.name));

        
        try {
            const { token } = isNameValid && isEmailValid && isPasswordValid && await Signup({
                email: form.email,
                password: form.password,
                name: form.name
            });
            localStorage.setItem("cookenu.token", token);
            goToFeedPage(navigate);
            
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <SignupPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <img src={logo} alt="logoGetFood" />
                    <NameInput
                        value={form.name}
                        onChange={onChangeInputs}
                        isValid={isNameValid}
                        placeholder="Nome"
                    />
                    <EmailInput
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}
                        placeholder="E-mail"
                    />
                    <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}
                        placeholder="Senha"
                    />

                    <Button type="submit" variant="form-main">Cadastrar</Button>
                </form>
            </FormContainer>
        </SignupPageContainer>
    );
}
