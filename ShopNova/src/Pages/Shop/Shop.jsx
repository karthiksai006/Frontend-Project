import React from 'react'
import Product from '../../Components/Product/Product'
import { useState } from 'react'
import { dummydata } from '../../dummydata'
import "./Shop.css"
import { category } from '../../category'
const Shop = () => {
    let [cate,setCate] = useState(dummydata)
      function filterProducts(category){
        if(category=="All"){
            setCate(dummydata)
        }
        else{
            const updatedata=dummydata.filter((item)=>(
          item.category===category 
        ))
        setCate(updatedata)
        }
      }
  return (
    <div className='shop'>
         <div className="category-section">
                  {category.map((item)=>(
                    <div className="category-card" onClick={()=> {filterProducts(item.name)}} >
                      <img src={item.image} alt="" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                 <div className="product-section">
          {cate.map((item)=>(
            <Product name={item.name} price={item.price} image={item.image}/>
          ))}
        </div>
    </div>
  )
}

export default Shop