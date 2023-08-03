import React from 'react'
import ProductList from '../components/ProductList'
import { NavLink } from 'react-router-dom';

const Home = () => {
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
      <ProductList />
    </>
  )
}

export default Home