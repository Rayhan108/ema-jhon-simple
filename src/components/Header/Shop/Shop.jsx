import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../../utilities/fakedb";
import Cart from "../../Cart/Cart";
import Product from "./Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage,setCurrentPage]=useState(0);
  const [itemsPerPage,setItemPerPage]=useState(10)

  const { totalProducts } = useLoaderData();
  // console.log(totalProducts);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }
  const pageNumbers = [...Array(totalPages).keys()];
  // console.log(pageNumbers);
  //   console.log(totalPages);

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);


  useEffect(()=>{
    async function fetchData(){
      const response =await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
      const data = await response.json();
      setProducts(data)
    }
    fetchData()
  },[currentPage,itemsPerPage])

  // console.log(products);
  useEffect(() => {
    const storedCart = getShoppingCart();
const savedCart=[]

    const ids = Object.keys(storedCart);

    fetch('http://localhost:5000/productsByIds',{
      method :'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(ids)
   })
   .then(res=>res.json())
   .then(data=>{
      //  step 1:get id from the added product

      for (const id in storedCart) {
        // step 2:get product from the products state by using id
        const addedProducts = data.find((product) => product._id === id);
        //   step 3: add quantity
        if (addedProducts) {
          const quantity = storedCart[id];
          addedProducts.quantity = quantity;
          // step 4:add the added products to the saved cart
          savedCart.push(addedProducts);
        }
      }
      // step 5:set the cart
      setCart(savedCart);
   })
  
  }, []);
  const handleAddToCart = (product) => {
    let newCart = [];
    // const newCart =[...cart,product]
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product._id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const options =[5,10,20];
  function handleSelectChange(event){
    setItemPerPage(parseInt(event.target.value));
    setCurrentPage(0)
  }
  return (
    <>
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to="/order" className="proceed-link">
            <button className="btn-proceed">
              Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
                        {/* pagination */}
    <div className="pagination">
        <p>current page:{currentPage}</p>
        {
            pageNumbers.map(number=><button key={number}  className={currentPage === number?'selected':''} onClick={()=>setCurrentPage(number)}>{number}</button>)
        }
        <select value={itemsPerPage} onChange={handleSelectChange}>
            {
            options.map(option=><option key={option} value={option}>{option}</option>)
            }
        </select>
    </div>



    </>
  );
};

export default Shop;
