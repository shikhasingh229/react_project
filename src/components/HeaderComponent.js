import { Link, useLocation } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const HeaderComponent = () => {
  const [user, setuser] = useState({
    name: "Shikha Singh",
    state: "Login",
    password: "password",
  });

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems)

  const [pass, setPass] = useState("");

  const val = useContext(UserContext);

  const userDetail = () => {
    // console.log(pass);
    // console.log(val.user.password);
    if (pass === val.user.password) {
      //console.log(val.user);
      if (user.state === "Login") {
        setuser({
          name: "Shikha Singh",
          state: "Logout",
          password: "password",
        });
        val.setUser({
          name: "Shikha Singh",
          state: "Logout",
          password: "password",
        });
      } else {
        setuser({
          name: "Shikha Singh",
          state: "Login",
          password: "password",
        });
        val.setUser({
          name: "Shikha Singh",
          state: "Login",
          password: "password",
        });
      }
    } else {
      window.alert("Wrong Password Try Again!!!");
    }
  };

  const isOnline = useOnline();
  return (
    <div className="bg-indigo-200 m-0 flex justify-between ">
      {/* <h1>Foodie Go</h1> */}
      <img
        data-testid="logo"
        className="m-4 w-[7rem] h-[4rem]"
        src={require("../../static/logo.png")}
      ></img>
      <div className="nav-items">
        <ul className="flex justify-center items-center mt-5">
          <li key="l0" className="p-2 text-lg font-bold hover:text-orange-500">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li key="l1" className="p-2 text-lg font-bold hover:text-orange-500 ">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li key="l2" className="p-2 text-lg font-bold  hover:text-orange-500">
            {" "}
            <Link to="/instamart">Instamart</Link>
          </li>
          <li
            data-testid='cart'
            key="l3"
            className="p-2 text-lg font-bold cursor-pointer hover:text-orange-500"
          >
            {" "}
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <li
            data-testid='onlineStatus'
            key="l4"
            className={
              isOnline
                ? "p-2 text-lg font-bold cursor-pointer text-green-500"
                : "p-2 text-lg font-bold cursor-pointer text-red-500"
            }
          >
            {isOnline ? "🟢Online" : "🔴Offline"}
          </li>
        </ul>
      </div>
      <div>
        <input
          className={
            user.state === "Login"
              ? "search-text-box ml-10 h-8 focus:bg-sky-100"
              : "hidden"
          }
          type="password"
          value={pass}
          placeholder="Enter Password"
          onChange={(e) => {
            setPass(e.target.value);
            //console.log(e.target.value)
          }}
        ></input>
        <button
          className="mt-5 mr-4 p-2 cursor-pointer text-lg font-bold text-red-500"
          onClick={userDetail}
        >
          <div className={user.state === "Logout" ? "text-blue-700" : "hidden"}>
            {user.name}
          </div>
          {user.state}
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
