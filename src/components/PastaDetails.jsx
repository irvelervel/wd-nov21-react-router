import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import dishes from '../data/menu.json'

const PastaDetails = () => {
  // I now have to retrieve pastaId here! So I will know which details to show

  const params = useParams()
  console.log('PARAMS', params)
  // I can retrieve pastaId from the address bar now! it's in params.pastaId

  const navigate = useNavigate()

  let [pasta, setPasta] = useState(null)

  useEffect(() => {
    // this mimics componentDidMount
    // let's do our search here!
    let rightPastaToShow = dishes.find(
      (pasta) => pasta.id.toString() === params.pastaId
    )
    console.log('PASTA FOUND?', rightPastaToShow)
    // now that we got the details, let's put them in the interface!
    // let's put our rightPastaToShow into a state variable
    if (rightPastaToShow) {
      // if I fall here it means I was able to find a match between the number
      // I grabbed from the address bar and an id from an object in the menu.json
      setPasta(rightPastaToShow)
    } else {
      // if we fall here instead, it means we haven't come here from a click of a pasta image
      // maybe the user is trying to fool us... let's redirect him/her to a not found page!
      navigate('/stefano')
    }
  }, [])

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col className="text-center" md={6}>
          <h2>PASTA DETAILS GO HERE!</h2>
          {pasta && (
            <div>
              <img src={pasta.image} alt="pasta-pic" />
              <h3>{pasta.title}</h3>
              <p>{pasta.description}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails
