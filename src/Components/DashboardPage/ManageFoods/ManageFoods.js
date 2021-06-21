import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../../../Images/Icon.png"
import ManageFoodsDetails from '../ManageFoodsDetails/ManageFoodsDetails';
const ManageFoods = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-danger">
            {loggedInUser.name}
        </li>
    }


    const [foods, setFoods] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [foods])

    return (
        <div style={{ backgroundColor: "#12161f", color: "white" }}>
            <Navbar style={{ backgroundColor: "#050c1a", color: "white" }} collapseOnSelect expand="lg" variant="dark" fixed="top">
                <img style={{ width: '50px' }} src={logo} alt="" />
                <Navbar.Brand href="#home"><strong className="pl-1 h2">Epic Eateries</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/home' href="#Home"><strong class="h4">Home</strong></Nav.Link>
                        <Nav.Link as={Link} to='/dashboard' href="#SignIn"><strong class="h4">Add Products</strong></Nav.Link>
                        <Nav.Link as={Link} to='/manage' href="#Orders"><strong class="h4">Manage Products</strong></Nav.Link>
                        <Nav.Link as={Link} to='/addReviews' href="#SignIn"><strong class="h4">Add Reviews</strong></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="text-center mt-5 pt-5">
                <h1 className="text-center mt-5 pt-5">You Total Have {foods.length} Foods ....!!!!!</h1>
                <div className="row d-flex justify-content-center">
                    {
                        foods.map(food => <ManageFoodsDetails food={food}></ManageFoodsDetails>)
                    }
                </div>
            </div>

        </div >
    );
};

export default ManageFoods;