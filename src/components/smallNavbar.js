import React, { useState } from 'react'
import arr from './arr'



const CategoryArray = (props) => {
    let { uniqueSize   ,  filterSize } = props;


    const [uniqueSizeArray, setuniqueSizeArray] = useState(uniqueSize)


    return (
        <>
           <div className='flex items-center justify-center m-12 gap-5'>
           {uniqueSizeArray.map((x) => {
                return <button onClick={() => filterSize(x)}>{x}</button>
            })}
           </div>

        </>
    )
}

export default CategoryArray