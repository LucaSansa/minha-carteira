import React, {useState} from 'react';

import logoimg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles';

const Signin: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    return(
        <Container>
            <Logo>
                <img src={logoimg} alt="Minha Carteira"/>
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}> 
                <FormTitle>
                    Entrar
                </FormTitle>

                <Input
                    type="email"
                    required
                    placeholder='e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    required
                    placeholder='senha'
                    onChange={(e) => setPassword(e.target.value)}
                />

               <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    )
}

export default Signin;