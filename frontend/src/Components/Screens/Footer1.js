import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./Footer.css";

function Footer1() {
  return (
    <footer class="footerdiv" fixed="bottom">
      <div>
        <div className="border-bottom"></div>
        <p className="d-flex justify-content-center mt-4 footer-caption">
          Receive exclusive promotions, private sales and news
        </p>

        {/* <div> */}
        {/* <form className="col-2 mx-auto mt-4 form-style">
            <input
              type="email"
              className="form-control"
              id="floatingInputValue"
              placeholder="name@example.com"
              value="Enter your e-mail"
            />
          </form> */}
        {/* </div> */}

        <div>
          <Form className="d-grid gap-3 col-2 mx-auto mt-3" id="form-control" md={8} sm={10}>
          {/* <Form className="row justify-content-lg-center col-2"> */}
            <Form.Group className="mb-2 form-style" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
        </div>

        <div className="d-grid gap-3 col-2 mx-auto mt-3">
        {/* <div className="d-flex justify-content-center"> */}
          <Button  variant="dark"
            className=" text-capitalize text-light"
            type="submit"
          >
            Subscribe
          </Button>
          </div>
          <div
            className="sg-caption-light sg-input-error fw-lighter mt-3"
            id="newsletter"
            data-testid="newsletterSubscriptionFooter.form.mailError"
          >
            By subscribing you agree to our Privacy Policy and Promotion
          </div>
        

        <div class="footernav my-5">
          <span>
            <a href="">My Purchase</a>
            <a href="">About Us</a>
            <a href="">Return</a>
          </span>
        </div>

        <p class="mt-2 mb-5">
          <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>{" "}
          <i class="bi bi-twitter"></i> <i class="bi bi-whatsapp"></i>
        </p>
      </div>
      <span className="copyright">
        <strong className="text-dark">&#169; </strong> FossilTree All Right
        Reserved <a className="copyright"> Privacy Policy</a>|
        <a className="copyright">Terms & Conditions</a>
      </span>
    </footer>
  );
}

export default Footer1;
