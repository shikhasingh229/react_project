import React from "react";
import ReactDOM from "react-dom/client";

//react element
const Title=(
  <h1>This is Title </h1>
);

//react functional component

const Foot=()=>{
  return(
    <>
    <h3>This is Footer</h3>
    </>
  );
}

const Main=()=>(
  <>
    {Title}
    <div>
    <h2>This is second title</h2>
    <p>This is body</p>
    </div>
    {Foot()}
    {<Foot/>}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main></Main>);
