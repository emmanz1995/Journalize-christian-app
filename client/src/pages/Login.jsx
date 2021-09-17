import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CustomTextFields from '../components/customTextFields/CustomTextFields';
import { AuthService } from '../service/AuthService';
import SimpleReactValidator from 'simple-react-validator';
import { Redirect, useHistory } from 'react-router-dom';

const Container = styled.main`
  margin: 90px 0;
  color: black;
`;

const BackgroundForm = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 350px;
  height: 400px;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
  border: 2px solid #ddd;
  border-radius: 4px;
`;

const LoginForm = styled.form`
  padding: 40px;
  h2 {
    margin: 0;
    padding: 0;
  }
  .form-input {
    width: 100%;
    padding: 7px;
    border: 2px solid #ddd;
    border-radius: 4px;
  }
  .reg-li {
    color: ${props => props.theme.DarkGrayLight};
    a {
      text-decoration: none;
    }
  }
`;

const StyledButton = styled.input`
  width: 100%;
  padding: 7px;
  border: 2px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator());
    const history = useHistory();

    const handleLogin = (evt) => {
        evt.preventDefault();
        if(validator.current.allValid()) {
            AuthService.onLogin(email, password)
            .then((success) => {
                console.log(success)
                history.push('/dashboard');
            })
            .catch((error) => {
                console.log(error);
            })
        } else {
            validator.current.showMessages();
            forceUpdate(1);
        }
    }
    if(AuthService.getUserInfo()) {
        return <Redirect to={{ pathname: '/dashboard' }} />
    }
    return (
        <Container>
            <BackgroundForm>
                <LoginWrapper>
                    <LoginForm onSubmit={handleLogin}>
                        <h2>Sign into Journalize</h2><br />
                        <label htmlFor="email">Email:</label>
                        <CustomTextFields type="text" className="form-input" name="email" inputValue={email} changeInput={(evt) => setEmail(evt.target.value)} placeholder="john.doe@gmail.com" />
                        <span>{validator.current.message('email', email, 'required|email', { className: 'text-danger'})}</span><br />
                        <label htmlFor="password">Password:</label>
                        <CustomTextFields type="password" className="form-input" name="password" inputValue={password} changeInput={(evt) => setPassword(evt.target.value)} placeholder="xxxxxxxxxxxxxxxxxxx" />
                        <span>{validator.current.message('password', password, 'required|min:7|max:20', { className: 'text-danger'})}</span><br />
                        <StyledButton type="submit" value="Login" />
                        <br /><br />
                        <span className="reg-li">Need an Account? <a href="">Join Now!</a></span>
                    </LoginForm>
                </LoginWrapper>
            </BackgroundForm>
        </Container>
    );
}

export default Login;
