import Test from "./test";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
// import React, { Component } from 'react';

function Card() {
    console.log();const [listProduct,setListProduct] = useState([]); 
    const [type, setType] = useState('') 
    const getData = () => {
    axios.get("https://61bc10c1d8542f0017824533.mockapi.io/product")
        .then((res) => {
            setListProduct(res.data);
        });
    }
     useEffect(() => {
    console.info(Math.random())
        getData()
    },[])

    const changeTypeProduct=(type)=>{

        setType(type)
    }
    return (
    <>
    <button
    onClick={() => {
        changeTypeProduct("type 5");
    }}>
        type 5
    </button>
    <button
        onClick={() => {changeTypeProduct("type");}}>type all
    </button>
    <button
        onClick={() => {
            changeTypeProduct("type 2");
        }}>type 2
    </button>
    <button
        onClick={() => {
            changeTypeProduct("type 3");
        }}>  type 3
    </button>
    <button
        onClick={() => {
            changeTypeProduct("type 4");
        }}>
            type 4
    </button>
    <div class="row">
        {type == ""?listProduct.map((product) => (
            <Test
            image={product.image} 
            name={product.name}
            price={product.price}
            />
        ))
            : listProduct.filter((product) => product.type == type).map((product) => (
            <Test
                image={product.image}
                name={product.name}
                price={product.price}
            />
            ))}
        </div>
            </>
            );
        }

export default Card;


