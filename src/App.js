import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, Table } from 'react-bootstrap';
import logo from '../src/Assets/image.png';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}
            Blood Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#about">Support</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">

              <Nav.Link href="#link"><Button variant="success">Log In</Button>{' '}</Nav.Link>
              {/* <b>Hi, <a href="#login">Ankita Joshi</a></b> */}

            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>


  );
}

export default App;
