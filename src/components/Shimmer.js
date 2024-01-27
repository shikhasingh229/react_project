function EmptyCard() {
  return (
    
    <div className="card-shi">
        <div className="shimmerBG media"></div>
        <div className="p-32">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end"></div>

          <div className="shimmerBG content-line m-t-24"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
  );
}

function Shimmer() {
  return (
    <div className="box flex justify-center flex-wrap" data-testid="shimmer">
    <EmptyCard/>

      {
         Array.from({length:6},(_,index)=>{
            return <EmptyCard key={index}/>
         })
      }
    </div>
  );
}

export default Shimmer;
