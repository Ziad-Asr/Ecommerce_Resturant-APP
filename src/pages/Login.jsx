import { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  <Link to="/home">Login</Link>
                </button>
              </form>
              <p>
                Don't have an account? <br />
              </p>
              <Link
                to="/register"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
