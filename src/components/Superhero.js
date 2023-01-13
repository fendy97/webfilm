import {Card, Row, Col, Container, Image } from "react-bootstrap"
import AvengerImage from "../assets/web/Superhero/Avenger.jpg"
import AntmanImage from "../assets/web/Superhero/Antman.jpg"
import HulkImage from "../assets/web/Superhero/Hulk.jpg"

const Superhero = () => {
    return (
        <div>
            <container>
                <br />
                <h1 className="text-white text-center">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="MovieWrapper" id="superhero">
                        <Card className="text-center MovieImage">
                            <Image src={AvengerImage} alt="Avenger" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">AVENGERS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="MovieWrapper">
                        <Card className="text-center MovieImage">
                            <Image src={AntmanImage} alt="Antman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">ANT MAN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="MovieWrapper">
                        <Card className="text-center MovieImage">
                            <Image src={HulkImage} alt="Hulk" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">HULK</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </container>
        </div>
    )
}

export default Superhero