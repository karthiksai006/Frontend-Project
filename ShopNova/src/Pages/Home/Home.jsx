import React from 'react'
import  { useState } from 'react';
import bg from "../../assets/bg0.gif"
import "./Home.css"
import { category } from '../../category'
import Product from '../../Components/Product/Product'
import {dummydata} from "../../dummydata"

const Home = () => {
  let [cate,setCate] = useState(dummydata)
  function filterProducts(category){
    const updatedata=dummydata.filter((item)=>(
      item.category===category 
    ))
    setCate(updatedata)
  }
  return (
    <div className='home'>
        <div className="home-bg">
          <img src={bg} alt="" />
        </div>
        <div className="category-section">
          {category.slice(0,5).map((item)=>(
            <div className="category-card" onClick={()=> {filterProducts(item.name)}} >
              <img src={item.image} alt="" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <h1>Trending :</h1>
        <div className="product-section">
          {cate.slice(0,5).map((item)=>(
            <Product id={item.id} name={item.name} price={item.price} image={item.image}/>
          ))}
        </div>
    </div>
  )
}

export default Home