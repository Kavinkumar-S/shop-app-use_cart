import React from "react";

export default function Header(){
    return(<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="col-md-9 d-flex justify-content-center" >
    <ul class="navbar-nav col-md-12 d-flex justify-content-around">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/cart">Cart</a>
      </li>
      
    </ul>
   
  </div>
</nav>
    </>)
}