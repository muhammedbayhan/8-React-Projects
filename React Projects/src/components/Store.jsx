import axios from 'axios'
import React, { useEffect, useState } from 'react'





const Store = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        };
        getProducts();
    }, []);
    return (
<div className='bg-slate-900'>
    <div className='text-white text-5xl uppercase text-center p-8 font-bold'>SHOP</div>
<div className='grid grid-cols-5 gap-4 pr-16 pl-16 pb-16 '>
  {products.map((item) => (
    <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 flex flex-col">
      <a href="#">
        <img className="object-cover w-full h-64 " src={item.image} alt="" />
      </a>
      <div className="p-5 flex-grow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
      </div>
      <div className="flex justify-around">
        <a  className="cursor-pointer w-24 p-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4" >
          Add {`$${item.price}`}
        </a>
        <a className="p-2 text-sm font-medium text-center text-white bg-yellow-500  hover:bg-yellow-600 " >
        {item.category}
        </a>
        <p className='text-white font-bold hover:text-3xl text-green-500 '>{item.rating.rate}</p>
      </div>
      <div className="py-4"></div>
    </div>
  ))}
</div>
</div>

    )
}

export default Store