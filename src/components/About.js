import { Outlet,Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from '../utils/userContext';

export const AboutUs=()=>{
     const {user}=useContext(UserContext)
    return(
        <div className="min-h-[100vh]">
          {/* {(user.name==="Login")?<>
           {alert("Please Log in First")}
          <div className="cont font-bold">
                   <h3>Not Logged In</h3>
                </div>
          </>: */}
            <Link to="profile" style={{textDecoration:"none",color:"black"}}>
                <div className="cont">
                   <h3>Shikha Singh</h3>
                   <h5>Click ' 👆🏻 ' To know more about her</h5>
                </div>
            </Link>
        </div>
    )
}

function About() {
  return (
    <>
    <Outlet></Outlet> 
    {/* //to show children */}
    </>
  )
}

export default About