import { Badge, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import dishes from '../data/menu.json'

const Menu = () => (
  <Container>
    {dishes.map((pasta) => (
      <Row key={pasta.id} className="justify-content-center my-3">
        <Col className="text-center" md={6}>
          <Link to={'/details/' + pasta.id}>
            <img src={pasta.image} alt="pasta-pic" />
          </Link>
          <div>
            <h4>{pasta.name}</h4>
            <Badge variant="warning">{pasta.price}</Badge>
            <Badge variant="danger">{pasta.label}</Badge>
          </div>
        </Col>
      </Row>
    ))}
  </Container>
)

export default Menu
