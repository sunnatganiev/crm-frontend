import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ResetPassword = ({
  handleOnChange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            <Form onSubmit={handleOnResetSubmit}>
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

              <Button type="submit">Reset Password</Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("login")}>
              Login Now
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ResetPassword;
