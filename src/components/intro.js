import { Row, Container, Col, Button } from "react-bootstrap"

const intro = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex text-center justify-content-center align-items-center">
            <Row>
              <Col>
              <div className="title text-center">WELCOME FENDY FILM</div>
              <div className="title">NONTON FILM TANPA KARCIS</div>
              <div className="IntroButton mt-4 text-center">
                <Button variant="dark" href="#trending">Lihat List Film</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default intro