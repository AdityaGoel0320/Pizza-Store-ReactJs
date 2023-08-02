import React from 'react'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let {
        _id, name, image, size, price
    } = props;
    return (
        <>

        
            <NavLink to={`/products/${_id}`}>
                <div id='item' className='flex flex-col gap-5 m-5 items-center justify-center border '>
                    <img id='img' src={image} alt="rffgfh" />

                    <h3>{name}</h3>
                    <span className='size'>
                    <h4>Size :- <span>{size}</span> </h4>
                    </span>
                    
                    <div className="flex items-center  justify-center gap-5" >
                        <h3>Rs. {price}</h3>
                        <button className='btn'>Add to Cart</button>
                            
                    </div>
                </div>

            </NavLink>


        </>
    )
}

export default Item