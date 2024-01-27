import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeItem,emptyCart} from "../utils/cartSlice.js";
import { Link } from "react-router-dom";

function claculateSum(items){
  let sum=0
  Object.values(items).map((item)=>{
    const itemPrice=item.info.price ? (
     item.info.price / 100
    ) : (
      item.info.defaultPrice / 100
    )
     sum+=itemPrice;
     //console.log(sum)
})
  return sum;
}

function OneItem({ item,price,setPrice }) {

  const dispatch=useDispatch()

  const handleRemove=()=>{
    dispatch(removeItem(item))
    const itemPrice=item.price ? (
      item.price / 100
     ) : (
       item.defaultPrice / 100
     )
     setPrice(price-itemPrice)
   // console.log("Removed");
  }
  //console.log(item)
  return (
    <>
      <tr>
        <td>
          <h5>{item?.name}</h5>
        </td>
        <td>
          {item?.price ? (
            <h5>Rs. {item?.price / 100}</h5>
          ) : (
            <h5>Rs. {item?.defaultPrice / 100}</h5>
          )}
        </td>
        <td><button onClick={handleRemove}>❌</button></td>
      </tr>
    </>
  );
}

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const [price, setPrice]=useState(0);
  const dispatch=useDispatch();
  const handleClear=()=>{
     dispatch(emptyCart())
     setPrice(0)
  }

  useEffect(()=>{
     const val=claculateSum(cartItems);
     //console.log(val)
     setPrice(val);
  },[])

  //console.log(cartItems);
  return (
    <div className="min-h-[100vh]">
      <button className="w-[8rem] h-12 text-white bg-red-600 m-4 p-2 text-center rounded-md" onClick={handleClear}>Empty Cart</button>
      <div className="flex flex-wrap text-center justify-center text-lg font-bold"><div>{cartItems[0]?.rest.name}</div></div>
      <table className="w-[98%] border-2 border-blue-900 rounded-sm m-4 p-4 text-center">
        <thead>
          <tr>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Price</h3>
            </th>
          </tr>
        </thead>
        {cartItems.length === 0 ? <tbody></tbody> : <tbody>
        {
          (cartItems)?
            Object.values(cartItems).map((item)=>{
                //console.log(item?.card?.info)
               return <OneItem key={item?.info.id} item={item.info} price={price} setPrice={setPrice}></OneItem>
            }):<></>
        }
          </tbody>}
        <tfoot>
          <tr>
            <td>
              <h3>Sum</h3>
            </td>
            <td>
              <h3>Rs.{price}</h3>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="flex flex-wrap justify-end"><Link to="/checkout"><button className="w-[8rem] h-12 text-white bg-red-600 m-4 p-2 text-center rounded-md">Checkout</button></Link></div>
    </div>
  );
}

export default Cart;
