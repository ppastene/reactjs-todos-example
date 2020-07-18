import React, { useContext, useState, useEffect, useRef } from 'react';
import { Button, Container, Card, Form } from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

export default function Login({ history }){

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isValid: false
    })

    const onChange = ({ target: { name, value } }) => {
        //setFormData({...formData, ...{ [name]: value }})
        setFormData((prev) => {
            return {...prev, ...{ [name]: value }}
        })
    }

    const { setCookie } = useContext(AuthContext)

    const handleSubmit = async event => {
        event.preventDefault();

        const res = await axios.post('http://localhost:4000/login', {email: formData.email, password: formData.password})
            
                if(res){
                    /*setAuthData({
                        token: res.data.accessToken,
                        refreshToken: res.data.refreshToken,
                        isLoggedIn: true
                    });*/
                    await setCookie('auth', {token: res.data.accessToken,
                        refreshToken: res.data.refreshToken,
                        isLoggedIn: true}, {path: '/', secure:true})
                    history.push('/dashboard')
                }
                else {
                    history.push('/')
                }
            /*)
            .catch(err => {
                console.log(err.response)
                alert(err.response.data.error)
            })*/
            /*
            if (data.token) {
                setAuthData({
                    username,
                    token: data.token,
                    isLoggedIn: true,
                });
                props.history.push('/characters');
                } else {
                props.history.push('/');
                }
            */
    }

    /*const handleSubmit = event => {
        event.preventDefault();

        const user = { email: event.email, password: event.password }

        console.log(user);

        axios.post('http://localhost:4000/login', {email: this.state.email, password: this.state.password})
            .then(res => res.data)
            .then(res => {
                console.log(res)
                alert(res)
            })
            .catch(err => {
                console.log(err.response.data.message)
                alert(err.response.data.message)
            })
    }*/
    
    return(
        <div className="Login">
            <h1>Login</h1>
            <Container>
                <Card>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formLoginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={onChange} required />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formLoginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter password" onChange={onChange} required />
                        </Form.Group>
                        <Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

/*class Login extends React.Component {

    constructor() {
        super();
        this.state = { email:null, password:null };
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = { email: this.state.email, password: this.state.password }

        axios.post('http://localhost:4000/login', {email: this.state.email, password: this.state.password})
            .then(res => res.data)
            .then(res => {
                console.log(res)
                alert(res)
            })
            .catch(err => {
                console.log(err.response.data.message)
                alert(err.response.data.message)
            })
    }


    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <Container>
                    <Card>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formLoginEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.onChange} required />
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formLoginPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter password" onChange={this.onChange} required />
                            </Form.Group>
                            <Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
                            </Form.Group>
                        </Form>
                    </Card>
                </Container>
            </div>
          );
    }
}

export default Login;
*/