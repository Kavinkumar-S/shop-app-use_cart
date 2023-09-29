import { useCart } from "react-use-cart";
import React from "react";
import "./cart.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Header";
export default function Cart(params) {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();
  console.log("isEmpty", isEmpty);
  return (
    <>
      <Header />

      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-between row">
          <div class="col-md-10">
            <div class="p-2">
              <h4>Shopping cart</h4>
              <div class="d-flex flex-row align-items-center pull-right">
                {new Date().toLocaleString()}
              </div>
            </div>

            {isEmpty && (
              <div
                style={{
                  width: "100%",
                  height: "750px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>

                <p className="mt-5 mb-5">No Products in Your Cart</p>
                  <a href="/">
                <button class="btn btn-primary " >
                    back to home
                </button>
                    </a>
              </div>
              </div>
            )}

            {items.map((val) => (
              <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div class="mr-1">
                  <img class="rounded" src={val.image} width="70" />
                </div>
                <div class="d-flex flex-column align-items-center product-details">
                  <span class="font-weight-bold">{val.title}</span>
                </div>
                <div
                  class="d-flex flex-row align-items-center qty"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  <i
                    class="fa fa-minus text-danger"
                    onClick={() => {
                      updateItemQuantity(val.id, val.quantity - 1);
                      toast.success("Product Updated Successfully", {
                        position: "top-left",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }}
                  ></i>
                  <h5
                    class="text-grey mt-1 mr-1 ml-1"
                    style={{ cursor: "pointer" }}
                  >
                    {val.quantity}
                  </h5>
                  <i
                    class="fa fa-plus text-success"
                    onClick={() => {
                      updateItemQuantity(val.id, val.quantity + 1);
                      toast.success("Product Updated Successfully", {
                        position: "top-left",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }}
                  ></i>
                </div>
                <div>
                  <h5 class="text-grey">$ {val.price}</h5>
                </div>
                <div>
                  <h5 class="text-grey">
                    $ {Number((val.quantity * val.price).toFixed(2))}
                  </h5>
                </div>
                <div
                  class="d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <i
                    class="fa fa-trash mb-1 text-danger"
                    onClick={() => {
                      removeItem(val.id);
                      toast.success(
                        "Product Removed from the Cart Successfully",
                        {
                          position: "top-left",
                          autoClose: 2500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        }
                      );
                    }}
                  ></i>
                </div>
              </div>
            ))}
            <div className="col-md-6  p-2 bg-white mt-4 px-3 rounded ml-auto">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h4>total items : {totalUniqueItems}</h4>

                <h4>Total : $ {cartTotal.toFixed(2)}</h4>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center justify-content-end mt-3 p-2 bg-white rounded">
              <button
                onClick={() => {
                  emptyCart();
                  toast.success("Cart Cleared Successfully", {
                    position: "top-left",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
                class="btn btn-warning btn-block btn-lg ml-2 pay-button"
                type="button"
                style={{ width: "auto", padding: "4px", fontSize: "15px" }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
