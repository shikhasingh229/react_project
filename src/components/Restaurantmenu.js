import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../constant";
import { addItem, emptyCart } from "../utils/cartSlice";
import { useDispatch,useSelector } from "react-redux";

const Menu=(props)=>{
    const info=props.item;
    const rest=props.rest;
    const obj={
      info:info,
      rest:rest
    }
    //console.log(resId)
    const dispatch=useDispatch()
    const cartItems=useSelector(state=>state.cart.items);
    const manageClick=()=>{
      //console.log(info);
      if(cartItems.length!==0){
         const prevId=cartItems[cartItems.length-1].rest.id;
         console.log(prevId);
         if(prevId!==obj.rest.id){
           alert("Your previous items were from a different restaurant so they were removed from the cart")
           dispatch(emptyCart())
         }
      }

      dispatch(addItem(obj));
    }
    //console.log(info)
    return(
        <div className="dabba cursor-default">
        <div className="">
          <img src={CDN_LINK + info.imageId} alt={info.name}>
          </img>
        </div>
        <div>
        <h3>{info.name}</h3>
        {
            (info.price)?<h5>Rs. {(info.price)/100}</h5>:<h5>Rs. {(info.defaultPrice)/100}</h5>
        }
        <p className="text-clip overflow-hidden text-xs text-center p-4">{info.description}</p>
        </div>
        <button className="p-1 text-lg bg-orange-200 hover:shadow-md hover:shadow-orange-500 ml-32" onClick={manageClick} >
        🛒</button>
        </div>
    );
}

function Restaurantmenu() {
  const { id } = useParams();
  //console.log(id);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu(id);
  }, []);

  async function fetchMenu(id) {
    const dataN = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6344228&lng=85.0868234&restaurantId=" +
        id
    );
    const data = await dataN.json();
    //console.log(data);
    setResMenu(data);
    //console.log(data?.data?.cards[2])
  }

  const info = resMenu?.data?.cards[0]?.card?.card?.info;
  const menuInfo=resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  
  //console.log(Object.values(menuInfo))
  return !resMenu ? (
    <Shimmer></Shimmer>
  ) : (
    <div>
      <div className="cardLabel">
        <div>
          <img className="h-[12rem] w-[15rem] m-4" src={CDN_LINK + info.cloudinaryImageId}>
          </img>
        </div>
        <div className="m-4">
        <h3 className="font-xl mt-4">{info.name}</h3>
        <h5>{info.areaName}</h5>
        <h5>{info.avgRating} stars</h5>
        <h5>{info.costForTwoMessage}</h5>
        </div>
      </div>
      <div className="menu">
        {
          (menuInfo)?
            Object.values(menuInfo).map((item)=>{
                //console.log(item?.card?.info)
               return <Menu key={item?.card?.info?.id} item={item?.card?.info} rest={info}></Menu>
            }):<></>
        }
       
      </div>
    </div>
  );
}

export default Restaurantmenu;
