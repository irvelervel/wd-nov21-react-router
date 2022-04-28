import { Container, Row, Col } from 'react-bootstrap'
import Reservations from './Reservations'
import ReservationForm from './ReservationForm'

const Booking = () => (
  <Container>
    <Row className="justify-content-center my-4">
      <Col xs={12} md={6} className="text-center">
        <Reservations />
      </Col>
    </Row>
    <Row className="justify-content-center my-4">
      <Col xs={12} md={6} className="text-center">
        <ReservationForm />
      </Col>
    </Row>
  </Container>
)

export default Booking
