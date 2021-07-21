import { Nav, Navbar, Col } from "react-bootstrap";
import "./style.css";
import Search from "../Search";

const NavigationBar = ({ children, onSearch }) => (
  <Navbar expand="lg">
    <div className="custom-navbar">
      <Navbar.Brand>
        <img
          width="134"
          height="34"
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.0/mercadolibre/logo__large_plus.png"
          className="d-inline-block align-top"
          alt="Brand logo"
        />
      </Navbar.Brand>
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        {children}
      </Nav>
      <Col>
        <Search onSearch={onSearch} />
      </Col>
    </div>
  </Navbar>
);

export default NavigationBar;
