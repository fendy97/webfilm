import {Card, Row, Col, Container, Image } from "react-bootstrap"
import AvatarImage from "../assets/web/Trending/Avatar.jpg"
import BatmanImage from "../assets/web/Trending/batman.jpg"
import Fantastic4Image from "../assets/web/Trending/Fantastic4.jpg"

const Trending = () => {
    return (
        <div>
            <container>
                <br />
                <h1 className="text-white text-center">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="MovieWrapper" id="trending">
                        <Card className="text-center MovieImage">
                            <Image src={AvatarImage} alt="Avatar" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">AVATAR</Card.Title>
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
                            <Image src={BatmanImage} alt="Batman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">BATMAN</Card.Title>
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
                            <Image src={Fantastic4Image} alt="Fantastic4" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">FANTASTIC 4</Card.Title>
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

export default Trending