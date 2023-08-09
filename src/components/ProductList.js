import React, { useContext, useState } from 'react'
import Item from './Item'
import arr from './arr'



import {CartContext} from '../CartContext'


const Productarr = (props) => {
    let {arr} = props ; 


    let {name} = useContext(CartContext)
    return (
        <>
            <div className="flex items-center justify-center gap-5 flex-wrap">
                {
                    arr.map((x) => {
                        let {
                            _id, name, image, size, price
                        } = x;
                        return <Item key={_id} _id={_id} name={name} price={price} image={image} size={size} />
                    })
                }

            </div>


            
        </>
    )
}

export default Productarr