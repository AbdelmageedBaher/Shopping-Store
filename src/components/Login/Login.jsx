import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login() {


  return (
    <div className="login-page d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <div className="login-box shadow p-4 bg-white rounded" style={{ width: '400px' }}>
            <h3 className="mb-4 text-center">Login to Your Account</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100" >
                Login
                </Button>
            </Form>
        </div>
    </div>
    );
}

export default Login;
