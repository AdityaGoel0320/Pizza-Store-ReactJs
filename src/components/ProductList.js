import React, { useContext, useState } from 'react'
import Item from './Item'
import arr from './arr'



import {CartContext} from '../CartContext'


const ProductList = () => {

    const [list, setlist] = useState(arr)

    let {name} = useContext(CartContext)
    return (
        <>
            <h1>{name}</h1>
            <div className="flex gap-3">
                {
                    list.map((x) => {
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

export default ProductList