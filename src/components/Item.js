import React from 'react'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let {
        _id, name, image, size, price
    } = props;
    return (
        <>
            <NavLink to={`/products/${_id}`}>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <img src={image} alt="rffgfh" />
                    <span>{name}</span>
                    <br />
                    <span>Size :- <span>{size}</span> </span>
                    <div className="flex items-center justify-between">
                        <span>{price}</span>
                        <span className='bg-red-500 text-white font-bold'>Add</span>
                    </div>
                </div>

            </NavLink>


        </>
    )
}

export default Item