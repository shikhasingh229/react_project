import {CDN_LINK } from "../constant";


//used spread anddestructing
const CardComponent=({name,cuisines,avgRating,sla,cloudinaryImageId,aggregatedDiscountInfoV3})=>{
    //const restDetail=restaurant.info;
    return(
      <div className="card h-[27rem] bg-purple-50 hover:bg-indigo-100 hover:w-[23rem] hover:shadow-lg">
  {/*        
         <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ restDetail.cloudinaryImageId}></img>
         <h3>{restDetail.name}</h3>
         <h5>{restDetail.cuisines.join(", ")}</h5>
         <h5>{restDetail.avgRating} stars</h5>
         <h5>{restDetail.sla.lastMileTravelString}</h5> */}
  {/*       
        <div class="container">
       <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;"/>
    <div class="bottom-left">Bottom Left</div>
    
  </div> */}
         <div className="container">
         <img src={CDN_LINK + cloudinaryImageId}>
          {/* {aggregatedDiscountInfoV3} */}
         </img>
           <div className="bottom-left">
            {/* {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader} */}
          </div>
         </div>
         <h3 className="text-xl font-extrabold">{name}</h3>
         <h5 className="text-md font-semibold mt-3">{cuisines.join(", ")}</h5>
         <h5>⭐ {avgRating}</h5>
         <h5>{sla.lastMileTravelString}</h5>
      </div>
    );
  }

export default CardComponent;
  