import React, { Component } from 'react';
import './style.scss';
import Input from '../../input';
import Button from '../../button';


class Login extends Component {
    render () {
        return (
            <div className='loginform'>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Button 
                    text='login'
                    class='success'/>
            </div>
        );
    }
}

export default Login;