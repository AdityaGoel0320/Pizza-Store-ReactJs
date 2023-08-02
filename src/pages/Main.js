import React from 'react'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <>
      <div className='hero py-16 '>

        <div className='container mx-auto flex items-center justify-between '>

          <div className='w-1/2 border border-red-200 flex items-center justify-center flex-col  '>
            <h3 className=''>

              Are you Hungry ?
            </h3>
            <h1>

              Dont wait to Order.
            </h1>

            <button>Order Now :- </button>

          </div>
          <div className='w-1/2 flex items-center justify-center  border border-red-200'>
            <img src="./images/logo.jpg" alt="" />
          </div>

        </div>

      </div>

      <h1>Prdoucts List</h1>
      <ProductList/>
    </>
  )
}

export default Home