import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const CustomNavbar = (props) => {
  const location = useLocation()
  console.log('LOCATION', location)
  const navigate = useNavigate()

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <div className="navbar-brand">
          {props.title} - {props.payoff}
        </div>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/menu">
            <div
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/reservations">
            <div
              className={
                location.pathname === '/reservations'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Reservations
            </div>
          </Link>
          <Link to="/contact">
            <div
              className={
                location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contact
            </div>
          </Link>
        </Nav>
        <Button variant="success" onClick={() => navigate('/')}>
          GO HOME
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
