import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import { NavLink } from 'react-router-dom';
import CategoryArray from '../components/smallNavbar';
import arr from '../components/arr';

const Home = () => {

  const [newarr, setnewarr] = useState(arr)

  let uniqueSize = [
    ... new Set(
      arr.map((x) => {
        return x.size
      })
    ), "All"
  ]
  console.log(uniqueSize)

  let filterSize = (parameter) => {

    if (parameter === "All") {
      setnewarr(arr);
    }
    else {
      let x = arr.filter((x) => {
        return x.size === parameter;
      })
      console.log("erfgrg" + x)
      setnewarr(x);
      console.log(arr)
    }

  }
  return (
    <>
      <div id='main' className='hero py-16 '>

        <div id="main" className=''>

          <div className=''>
            <h3 className=''>

              Are you Hungry ?
            </h3>
            <h1>

              Dont wait to Order.
            </h1>
            <NavLink to="/products">

              <button>Order Now :- </button>
            </NavLink>

          </div>
          <div className=''>
            <img src="./images/img.jpg" alt="" />
          </div>

        </div>

      </div>

      <h2 className='flex justify-center items-center'>Products List</h2>


      <CategoryArray uniqueSize={uniqueSize} filterSize={filterSize} />

      <ProductList arr={newarr} />
    </>
  )
}

export default Home