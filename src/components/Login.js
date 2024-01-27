import { useState } from "react";

function Login() {
  const [user,setUser]=useState({
        name:"Shikha Singh",
        email:"shikha@gmail.com",
        password:"password"
  })
  return (
    <>{user.name}</>
  )
}

export default Login;
