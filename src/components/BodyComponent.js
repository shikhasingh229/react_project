import CardComponent from "./Card";
//import * as obj from "../constant";
import { useState, useEffect } from "react";
import { restaurantsList } from "../constant";
import Shimmer from "./Shimmer";
import NoRes from "./NoRes";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterText(searchText, resList) {
  //console.log(searchText);
  let newList = resList.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  //console.log(newList);
  return newList;
}

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const dataN = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6344228&lng=85.0868234&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await dataN.json();
    //console.log(
    //   data?.data?.cards[4]
    //   //?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle ->prev 
    // );
    const mydata=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResList(
      mydata
    );
    setFilteredList(
      mydata
    );
  }
  //
  const isOnline=useOnline();

  if(!isOnline){
    return(
      <div className="flex justify-center items-center flex-col flex-wrap m-10 p-5 ">
        <h3>🔴🚫🔴 No Internet Connection 🔴🚫🔴</h3>
        <h5>Please Check your Internet Status </h5>
      </div>
    )
  }

  //.data.card[5].card.card.infoWithStyle.restaurants
  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div >
      <div className="search-box-div">
        <input
          className="search-text-box ml-10 h-8 focus:bg-sky-100 focus:ring"
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
            //console.log(e.target.value)
          }}
        ></input>
        <button
          data-testid="search-btn"
          className="h-8 w-20 m-4 text-white bg-blue-700 rounded-md hover:bg-blue-900"
          onClick={() => {
            filtext = filterText(searchText, resList);
            setFilteredList(filtext);
            //console.log("clicked");
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list" data-testid="res-list">
        {filteredList?.length === 0 ? (
          <NoRes></NoRes>
        ) : (
          filteredList?.map((res) => {
            return <Link to={"/restaurant/"+res.info.id} style={{color: "black",
              textDecoration: 'none',}}  key={res.info.id}><CardComponent {...res.info} />;</Link>
          })
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
