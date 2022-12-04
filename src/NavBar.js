import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import BassBosted from "./components/BassBosted";
import Contactus from "./components/Contactus";
import SleekDesign from "./components/SleekDesign";
import Sports from "./components/Sports";
import Wired from "./components/Wired";
import Wireless from "./components/Wireless";
import Workout from "./components/Workout";
function NavScrollExample() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <img
              src="https://scontent.fblr15-1.fna.fbcdn.net/v/t39.30808-6/302239307_181011197759915_1954215346597454058_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ziq9DLAHHwwAX9QcJo8&_nc_ht=scontent.fblr15-1.fna&oh=00_AfA1GsLl4BCAYZXOHC5tJeO_d-1axWzN5RDtCeSQoP9Jqg&oe=6390CB3C"
              alt="company logo"
              height="100"
              width="100"
            ></img>
            <Navbar.Brand href="#">HEADPHONES</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <NavDropdown title="Catogeries" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/Sports">
                    sports
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Workout">
                    workout
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/BassBosted">
                    Bass Bosted
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/SleekDesign">
                    sleek design
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/Wired">
                  wired
                </Nav.Link>
                <Nav.Link as={Link} to="/Wireless">
                  wireless
                </Nav.Link>
                <Nav.Link as={Link} to="/Contactus">
                  Contact us
                </Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/BassBosted" element={<BassBosted />} />
            <Route path="/SleekDesign" element={<SleekDesign />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Workout" element={<Workout />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Wired" element={<Wired />} />
            <Route path="/Wireless" element={<Wireless />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default NavScrollExample;
