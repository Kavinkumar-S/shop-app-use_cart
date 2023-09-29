import axios from "axios";

import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
export default function Product() {
  let { id } = useParams();
  console.log("data", id);
  const [data, setData] = useState();
  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const getSingleProduct = async () => {
    let response = await axios.get(` https://fakestoreapi.com/products/${id}`);
    setData(response.data);
    console.log("response", response);
  };
  console.log("data", data);

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <div class="product-card">
        <div class="product-tumb">
          <img src={data?.image} alt="" />
        </div>
        <div class="product-details">
          <span class="product-catagory">{data?.category}</span>
          <h4>
            <a href="">{data?.title}</a>
          </h4>
          <p className="product-description">{data?.description}</p>
          <div class="product-bottom-details">
            <div class="product-price">$ {data?.price}</div>
            <div class="product-links">
              <Link to="/">
                <i class="fa fa-long-arrow-left"></i>
              </Link>
              <a href="">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
