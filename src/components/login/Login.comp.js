import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginForm = ({
  handleOnChange,
  email,
  password,
  onSubmit,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr />
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleOnChange}
                  value={email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Passwrord"
                  required
                  value={password}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("reset")}>
              Forget Password?
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
