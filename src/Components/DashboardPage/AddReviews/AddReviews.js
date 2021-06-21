import axios from 'axios';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../../Images/Icon.png'
import Swal from 'sweetalert2';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const AddReviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let display;
    if (loggedInUser) {
        display = <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-danger">
            {loggedInUser.name}
        </li>
    }

    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            from: data.from,
            quote: data.quote,
            img: imageURL
        }

        const url = `http://localhost:5000/addReviews`
        console.log(reviewData)

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Thanks For Your Valuable Review.',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('server side', res)
            })
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '45989dd4589e7b6e62f67e349b536454');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div style={{ backgroundColor: "#12161f", height: "925px", color: "white" }}>
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
                <h1 className="mt-5 pt-5">Add Reviews Here ....!!!!</h1>
            </div>
            <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6 mt-3">
                    <label for="name" className="form-label"><h4>Your Name</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Name" name="name" ref={register} className="form-control text-light" id="inputEmail4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="from" className="form-label"><h4>Place You Live</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Location" name="from" className="form-control text-light" ref={register} id="inputPassword4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="quote" className="form-label"><h4>Your Review About Our Service </h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Your Review" name="quote" className="form-control text-light" ref={register} id="inputEmail4" />
                </div>
                <div className="col-md-6 mt-3">
                    <label className="form-label"><h4>Insert Your Image</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} className="form-control text-light px-0 py-1" type="file" onChange={handleImageUpload} id="formFile" />
                </div>
                <div className="col-12 d-grid ">
                    <button className="mt-4 btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Reviews</button>
                </div>
            </form>
        </div>
    );
};

export default AddReviews;