import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const storedCart =getShoppingCart()
    const ids = Object.keys(storedCart);
    console.log(ids);
 const loadedProducts = await fetch('http://localhost:5000/productsByIds',{
    method :'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(ids)
 })
const products = await loadedProducts.json();
// console.log(products);

const savedCart =[];
for (const id in storedCart){
    const addedProducts =products.find(product=>product._id === id)
    if(addedProducts){
        const quantity =storedCart[id]
        addedProducts.quantity=quantity;
        // console.log(addedProducts)
        savedCart.push(addedProducts)
    }
}

// console.log(storedCart)
return savedCart
}

export default cartProductsLoader