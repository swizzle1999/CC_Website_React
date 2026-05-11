import './MainNavbar.scss';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router';

function MainNavbar() {
    return (
        <Navbar className="main-navbar" expand="lg">
            <Container>
                <Navbar.Brand href={import.meta.env.BASE_URL} className="flex-shrink-0">
                    <Image src={`${import.meta.env.BASE_URL}logo.png`} width="200" height="169"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-lg-3 gap-3">
                        <NavLink className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'} to="/">Home</NavLink>
                        {/*<NavLink className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'} to="/about">About Us</NavLink>*/}
                        <NavLink className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'} to="/news">News</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'} to="/nml4">NML4</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'} to="/weeklies">Weeklies</NavLink>
                    </Nav>

                    <div className="d-flex flex-grow-1 gap-3 justify-content-center  justify-content-lg-end mt-2 mt-lg-0">
                        <a className="nav-btn" href="https://x.com/CaledonianClash" target="_blank" rel="noopener noreferrer">
                            <Image src={`${import.meta.env.BASE_URL}x.png`} width="35" height="36" />
                        </a>
                        <a className="nav-btn" href="https://discord.gg/sx37tJw4E" target="_blank" rel="noopener noreferrer">
                            <Image src={`${import.meta.env.BASE_URL}discord.png`} width="48" height="36" />
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;