import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import style from '../styles/navbar.module.css'

import LOGO from '../assets/logo.png';

function Navbars() {
    return (
        <div className={style.navbar_wrapper}>
            <Navbar key='navbar' bg="light" expand='md'>
                <Container fluid>
                    <Navbar.Brand href="#" className={style.navbar_logo}>
                        <img src={LOGO} alt="navbar-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'md'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className={`${style.navbar_item} justify-content-center flex-grow-1 pe-3`}>
                                <Nav.Link href="#jumbotron">Beranda</Nav.Link>
                                <Nav.Link href="#profil">Profil</Nav.Link>
                                <Nav.Link href="#footer">Kontak</Nav.Link>
                            </Nav>
                            <div className={`${style.navbar_button} d-flex`}>
                                <Button variant="outline-success">Login</Button>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbars;