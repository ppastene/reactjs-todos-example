import React from 'react';
import { Button, Container, Card, Form } from 'react-bootstrap'
import axios from 'axios';

class Register extends React.Component {

    constructor() {
        super();
        this.state = { name: null, email:null, password:null };
      }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = { name: this.state.name, email: this.state.email, password: this.state.password }

        axios.post('http://localhost:4000/register', {name: this.state.name, email: this.state.email, password: this.state.password})
            .then(res => {
                alert(res.message)
            })
            .catch(err => {
                alert("error:"+err)
            })
    }

    render() {
        return (
            <div className="Register">
                <h1>Register</h1>
                <Container>
                    <Card>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formRegisterUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter username" onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group controlId="formRegisterEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.onChange} />
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formRegisterPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter password" onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Card>
                </Container>
            </div>
          );
    }
}

/*function Register() {
  return (
    <div className="Register">
        <h1>Register</h1>
        <Container>
            <Card>
                <Form>
                    <Form.Group controlId="formRegisterEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formRegisterPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    </div>
  );
}*/

export default Register;
