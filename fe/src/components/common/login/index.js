import React, { Component } from 'react';
import './style.scss';
import Input from '../../input';
import Button from '../../button';
import Container from './../../container';

class Login extends Component {

    onLoginButtonClick = () => {
        if(this.serialize([this.emailEle.value , this.passEle.value])) {
            console.log('asfhas safe :',this.emailEle.value , this.passEle.value)
        }
    }

    serialize = inputs => {
        return inputs.every(el => (el !== undefined && el !== ''));
    }

    render () {
        return (
            <div className='loginform'>
                <Container
                    class="container">
                    <Input
                        placeholder='Email'
                        inputRef={el => this.emailEle = el}/>
                    <Input
                        placeholder='Password'
                        inputRef={el => this.passEle = el}/>
                    <Button
                        text='login'
                        class='success'
                        onClick={this.onLoginButtonClick}/>
                </Container>
            </div>
        );
    }
}

export default Login;