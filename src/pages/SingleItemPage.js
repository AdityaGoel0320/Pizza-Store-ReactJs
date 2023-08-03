import React, { useEffect, useState } from 'react'
import arr from '../components/arr'
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import Item from '../components/Item';

const SingleItemPage = () => {



    let navigate = useNavigate();
    let param = useParams();
    let x = 0;

    for (let i = 0; i <= arr.length - 1; i++) {

        if (param._id == arr[i]._id) {
            x = i;
            break;
        }

    }


    let fnc = () => {
        navigate(-1);
    }

    return (
        <>


            <div className='flex justify-center flex-col gap-12 '>

                <NavLink className='back_btn'>
                    <button className='mt-24 ml-24 font-bold' onClick={fnc}>Go back</button></NavLink>
            </div>




            {/* <div className='box' >
                <img src={arr[x].image} alt="pizza photo" />
                <div className='box_cont'>
                    <h2 >{arr[x].name}</h2>
                    <span >Size :- {arr[x].size}</span>
                    <div className='box_btn' >
                        <span>{arr[x].price} Rs</span>
                        <NavLink to="">

                            <button id="btn" className='box_add' >Add</button>
                        </NavLink>
                    </div>
                </div>
            </div> */}



            <div id='item_single' className='flex  gap-5 m-5 items-center justify-center  '>
                <img id='img' src={arr[x].image} alt="rffgfh" />

                <h3>{arr[x].name}</h3>
                <span className='size'>
                    <h4>Size :- <span>{arr[x].size}</span> </h4>
                </span>

                <div className="flex items-center  justify-center gap-5" >
                    <h3>Rs. {arr[x].price} </h3>
                    <button className='btn'>Add to Cart</button>

                </div>
            </div>




        </>
    )
}

export default SingleItemPage