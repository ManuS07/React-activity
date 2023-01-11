import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'
function Navigation() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{color:'yellow'}}>FunWithReact</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/register" className="nav-links" >Register</Nav.Link>
                            <Nav.Link href="/game" className="nav-links">Game</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;