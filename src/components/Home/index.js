import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  useCart } from "react-use-cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Header";
export default function Home() {
    const { addItem } = useCart();
    const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagesize, setPagesize] = useState(5);
  

  useEffect(() => {
    getDataFn();
  }, [pagesize]);

  const getDataFn = async () => {
    setLoading(true);
    let response = await axios.get(
      `https://fakestoreapi.com/products?limit=${pagesize}`
    );
    console.log("response", response);
    setData(response.data);
    setLoading(false);
  };
  // console.log("data", data);

  // console.log("cartdata", cartdata);
  // console.log("cart", cart);

  return (
    <>
      <Header/>


      <div className="container">
        <div className="product-container">
          {
          loading ? <>
          <div style={{width:"100%",height:"750px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p>
                Loading...
            </p>
          </div>
          </>:
          data.map((product) => (
            <div class="product-card" key={product.id}>
              <div class="product-tumb">
                <img src={product.image} alt="" />
              </div>
              <div class="product-details">
                <span class="product-catagory">{product.category}</span>
                <h4>
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h4>
                <p className="product-description">{product.description}</p>
                <div class="product-bottom-details">
                  <div class="product-price">$ {product.price}</div>
                  <div class="product-links">
                
                      <button
                        style={{
                          cursor: "pointer",
                          background: "#fbb72c",
                          border: "1px solid #fbb72c",
                          padding: "10px",
                          color: "#fff"
                        }}
                        onClick={() => {
                            addItem(product);
                            toast.success('Product Added to the Cart Successfully', {
                                position: "top-left",
                                autoClose: 2500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                })
                        }}
                      >
                        add to cart
                      </button>
                  
                  </div>
                </div>
              </div>
            </div>
          ))
          
          
          }
        </div>
        <div style={{ display: "block", textAlign: "center" }}>
          <button
            class="button-6"
            onClick={() => {
              setPagesize(pagesize + 5);
            }}
          >
            {loading ? <span class="loader"></span> : "Load more"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
