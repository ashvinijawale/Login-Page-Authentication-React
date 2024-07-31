import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button} from 'react-bootstrap';
import './App.css'; 

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase/config';


function FunctOne() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(user);
       
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
       
      });
  };

  return (
    <>
      <h2 style={{ background: '-webkit-linear-gradient(left, #d18ca8, #ae7abd, #ea7d9c, #da1b60)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', color: '#ccc', marginTop: '40px' }}>Welcome to the Login Page!</h2>

    <Container className='container'>
      <Card className='card'>
        <Card.Body>
          <div className="content">
            <Form>
              <div className="form-group-container">
                <div className="input-group">
                  <img src="https://img.icons8.com/?size=100&id=2848&format=png" alt="Logo" className="logo-image" />
                  <Form.Group controlId="formBasicUsername" className="email-input">
                    <Form.Control
                      type="email"
                      placeholder="Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid #171616',
                        borderRadius: 0,
                        outline: 'none',
                        filter: 'invert(100%)',
                        alignItems: 'center'
                      }}
                      className="dark-placeholder"

                    />
                  </Form.Group>
                </div>

                <div className="input-group">
                  <img src="https://img.icons8.com/?size=52&id=93&format=png" alt="Logo" className="logo-image" />
                  <Form.Group controlId="formBasicPassword" className="password-input">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid #171616',
                        borderRadius: 0,
                        outline: 'none',
                        filter: 'invert(100%)',
                        alignItems: 'center'
                      }}
                      className="dark-placeholder"
                    />
                    <span className="forgot-password">Forgot Password?</span>
                  </Form.Group>
                </div>
                <div className="button-container">
                  <Button className="custom-button" onClick={handleLogin}>Login</Button>
                </div>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

export { FunctOne };



