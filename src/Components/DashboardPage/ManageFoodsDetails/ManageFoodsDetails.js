import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

const ManageFoodsDetails = (props) => {
    const { _id, foodName, price, weight } = props.food

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Food Has Been Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('deleted', result)
            })
        console.log(id)
    }
    return (
        <div className="m-1 mb-4 col-md-3">
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Food Name : {foodName} </span></li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Food Price : {price} $</span> </li>
                {/* <li className="list-group-item "><span className="fw-bolder text-dark">Food Weight : {weight} Kg</span> </li> */}
                <li onClick={() => handleDelete(_id)} className="list-group-item "><span className="btn btn-outline-danger fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Food</span></li>

            </ul>
        </div>
    );
};

export default ManageFoodsDetails;