import React, { useEffect, useState } from 'react'
import arr from '../components/arr'
import { useParams, NavLink , useNavigate } from 'react-router-dom';
import Item from '../components/Item';

const SingleItemPage = () => {



    let navigate = useNavigate() ; 
    let param = useParams();
    let x = 0;

    for (let i = 0; i <= arr.length - 1; i++) {

        if (param._id == arr[i]._id) {
            x = i;
            break;
        }

    }


    let fnc = ()=>{
        navigate(-1);
    }

    return (
        <>


            <NavLink className='back_btn'>
                <button onClick={fnc}>Go back</button></NavLink>




            <div className='box' >
                <img src={arr[x].image} alt="pizza photo" />
                <div className='box_cont'>
                    <h2 >{arr[x].name}</h2>
                    <span >Size :- {arr[x].size}</span>
                    <div className='box_btn' >
                        <span>{arr[x].price} Rs</span>

                        <button id="btn" className='box_add' >Add</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default SingleItemPage