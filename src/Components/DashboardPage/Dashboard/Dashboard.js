import React, { useContext, useState } from 'react';
import logo from '../../../Images/Icon.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addFoods } from '../../Redux/Action/foodAction';
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';

const Dashboard = () => {
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
            foodName: data.foodName,
            from: data.from,
            price: data.price,
            image: imageURL
        }

        const url = `http://localhost:5000/addFoods`
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
        imageData.set('key', '31a13646b3a7cd53009fbf5d71f7c437');
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
            <nav class="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <div className="col-md-6 ms-3">
                        <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" />
                        <a className="navbar-brand color ms-3 h1" href="#home">Epic Eateries</a>
                    </div>
                    <button id="nav-toggle-button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                        <ul class="navbar-nav h5">
                            {display}
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/dashboard">Add Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/manage">Manage Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="nav-link color" to="/addReviews">Add Reviews</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="text-center mt-5 pt-5">
                <h1 className="mt-5 pt-5">Add Products Here ....!!!!</h1>
            </div>

            <form className="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6 mt-3">
                    <label for="foodName" className="form-label"><h4>Product Name</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Product Name" name="foodName" ref={register} className="form-control text-light" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="weight" className="form-label"><h4>Product Weight</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Product Weight" name="weight" className="form-control text-light" ref={register} />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="price" className="form-label"><h4>Price</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Product Price" name="price" className="form-control text-light" ref={register} />
                </div>
                <div className="col-md-6 mt-3">
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>Large file input example</Form.Label>
                        <Form.Control style={{ backgroundColor: "#050c1f" }} type="file" size="lg" />
                    </Form.Group>
                    <label className="form-label"><h4>Insert Product Image</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} className="form-control text-light" type="file" onChange={handleImageUpload} id="formFile" />
                </div>
                <div className="col-12 d-grid ">
                    <button className="mt-4 btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default Dashboard;