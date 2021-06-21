import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewInfo = (props) => {
    const { quote, name, from, img } = props.review;
    return (
        <div style={{ backgroundColor: "#12161f", color: "white" }} className="card col-md-12 w-100 h-100 mb-3  shadow-lg border-danger review-bg">
            <div className="card-footer d-flex ">
                <img className="mx-3 rounded-circle" src={img} alt="" width="60" />
                <div>
                    <h5>{name}</h5>
                    <p className="m-0">{from}</p>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff922b' }} />
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
        </div>
    );
};

export default ReviewInfo;