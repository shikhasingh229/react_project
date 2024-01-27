import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BodyComponent from "./components/BodyComponent";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Form,
} from "react-router-dom";
import Error from "./components/Error";
import About, { AboutUs } from "./components/About";
import Instamart from "./components/Instamart";
import Restaurantmenu from "./components/Restaurantmenu";
//import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Login from "./components/Login";
const Profile = lazy(() => import("./components/Profile")); //Lazy Loding
import UserContext from "./utils/userContext";
import { useState } from "react";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Checkout from "./components/Checkout";
/*
Header
Main Body
Footer

*/

const MainFrame = () => {
  const [user, setUser] = useState({
    name: "Shikha Singh",
    state: "Login",
    password: "password",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <div className="bg-indigo-50 min-h-[100vh]">
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainFrame />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "",
            element: <AboutUs></AboutUs>,
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<Shimmer></Shimmer>}>
                <Profile></Profile>
              </Suspense>
            ), //suspense to avoid suspension of lodiong
            //fallback is there to show till then
          },
        ],
      },
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/instamart",
        element: <Instamart></Instamart>,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurantmenu></Restaurantmenu>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}></RouterProvider>);
