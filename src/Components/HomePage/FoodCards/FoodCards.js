import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFoods } from '../../Redux/Action/foodAction';
import FoodsInfo from '../FoodsInfo/FoodsInfo';
import './FoodCards.css'

const FoodCards = () => {


    const foods = useSelector((state) => {
        return state.foods.foodsList;
    })
    console.log("Food", foods);

    const dispatch = useDispatch()

    useEffect(() => dispatch(loadFoods()), [dispatch])
    return (

        <div id="Foods" className="  mt-5 pt-5">
            <h1 className="text-center text-light display-2 mt-5 pt-5">Foods We Provide</h1>
            <div className="row d-flex justify-content-center ">

                {
                    foods.map((food) => (<FoodsInfo food={food} key={food.name}></FoodsInfo>))
                }
            </div >
        </div>
    );
};

export default FoodCards;