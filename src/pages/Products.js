import React , {useState} from 'react'
import ProductList from '../components/ProductList'
import CategoryArray from '../components/smallNavbar';
import arr from '../components/arr';


const Products = () => {

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
      <h1 className='flex justify-center items-center'>Products</h1>
      <CategoryArray uniqueSize={uniqueSize} filterSize={filterSize} />

      <ProductList arr={newarr} />
    </>
  )
}

export default Products