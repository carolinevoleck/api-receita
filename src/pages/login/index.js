import { useForm } from '../../hooks';
import { useState } from 'react';
import { validateEmail, validatePassword } from '../../constants';
import { CenteredPageContainer as LoginPageContainer, FormContainer, EmailInput, PasswordInput } from '../../components';
import { Button } from '@chakra-ui/react'
import logo from '../../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { goToSignupPage, goToFeedPage } from '../../routes';
import { Login } from '../../constants';


export const LoginPage = () => {
    const navigate = useNavigate ();

    const [form, onChangeInputs] = useForm({
        email: "",
        password: ""
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true); 
  

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));
        try {
                const { token } = isEmailValid && isPasswordValid && await Login ({
                email: form.email,
                password: form.password
            });
            localStorage.setItem("cookenu.token", token);
            goToFeedPage(navigate);
        
            } catch(e) {
        alert(e.response.data)
        }

    }

    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <img src={logo} alt="logoGetFood"/>
                    <EmailInput value={form.email}
                     onChange={onChangeInputs}
                     isValid={isEmailValid}
                     />
                     <PasswordInput
                     value={form.password}
                     onChange={onChangeInputs}
                     isValid={isPasswordValid}
                     />
                   
                    <Button type="submit" variant="form-main">Entrar</Button>
                    <Button onClick={()=> goToSignupPage (navigate)}type="button" variant="form-secondary">Cadastrar</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    );
}


