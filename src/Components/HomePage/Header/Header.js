import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import fakeData from '../../fakeData/fakeData.json'
import './Header.css'
const Header = () => {

    // const addFoods = () => {

    //     const url = `http://localhost:5000/allFoods`
    //     fetch(url, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(fakeData)
    //     })
    //         .then(res => console.log('server side', res))

    // }

    return (
        <div className="header-bg mt-5 pt-5">
            <Container id="home" className="text-light " fluid>
                {/* <button onClick={addFoods}>Add Products</button> */}
                <Row className=" d-flex align-items-center text-light offset-1 mt-5">
                    <Col data-aos="zoom-out" className=" pt-5" md={6}>
                        <h1 className="display-3" >Fast Food Provider <br /> At Your Door</h1>
                        <Row>
                            <span >
                                <h1 className="ml-4 display-3" >
                                    <Typewriter
                                        options={{
                                            strings: ["Order Your Desire Foods", "From Anywhere", "At Any Time"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </span>

                        </Row>
                        <button style={{ fontSize: "30px" }} className="btn btn-danger btn-lg mr-5 mt-5"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                    </Col>
                    <Col xs={12} md={6}>
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ewndmrlq.json" background="transparent"
                            speed="1"
                            loop
                            autoplay></lottie-player>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;