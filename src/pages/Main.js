import React from 'react'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <>
      {/* <div id='main' className='hero py-16 '> */}

        <div id="main" className='flex items-center justify-between flex-wrap'>

          <div className=' border border-red-200 flex items-center justify-center flex-col  '>
            <h3 className=''>

              Are you Hungry ?
            </h3>
            <h1>

              Dont wait to Order.
            </h1>

            <button>Order Now :- </button>

          </div>
          {/* <div className='w-1/4 items-center justify-center  border border-red-200'>
            <img src="./images/logo.jpg" alt="" />
          </div> */}

        </div>

      {/* </div> */}

      <h2 className='flex justify-center items-center'>Products List</h2>
      <ProductList/>
    </>
  )
}

export default Home