import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, emptyCart } from "../utils/cartSlice.js";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

function claculateSum(items) {
  let sum = 0;
  Object.values(items).map((item) => {
    const itemPrice = item.info.price
      ? item.info.price / 100
      : item.info.defaultPrice / 100;
    sum += itemPrice;
  });
  return sum;
}
function OneItem({ item }) {
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
      </tr>
    </>
  );
}

function Checkout() {
  const cartItems = useSelector((store) => store.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const value = useContext(UserContext);

  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const val = claculateSum(cartItems);
    setPrice(val);
  }, []);

  const manageOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const closeCart = () => {
    dispatch(emptyCart());
  };

  return cartItems.length === 0 ? (
    <div className="min-h-[100vh]">
      <div className="flex justify-center items-center flex-col">
        <img
          className="w-[25rem] h-[20rem] m-4 p-2 align-middle"
          src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png"
        ></img>{" "}
        <Link to="/">
          <button className="bg-blue-800 text-white w-48 h-16">
            <h3>Return to Store</h3>
          </button>
        </Link>
      </div>
    </div>
  ) : value.user.state === "Login" ? (
    <div className="min-h-[100vh]">
      <div className="flex justify-center items-center flex-col">
        <img
          className="w-[25rem] h-[20rem] m-4 p-2 align-middle"
          src="https://i.pinimg.com/736x/82/91/9f/82919f7871b92a0ec0a19eb565676732--computer-humor-computer-technology.jpg"
        ></img>{" "}
        <Link to="/">
          <button className="bg-blue-800 text-white w-48 h-16">
            <h3>Return to Store</h3>
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="min-h-[100vh]">
      <div className="flex justify-center items-center flex-col">
        <img
          className="w-[20rem] h-[20rem] m-4 p-2 align-middle"
          src="https://www.melbournecurrencyexchange.com/wp-content/uploads/order-confirmed.png"
        ></img>{" "}
        <div>
          <button
            className="bg-blue-800 text-white w-48 h-16 m-4"
            onClick={manageOpen}
          >
            {isOpen ? <h3>Close</h3> : <h3>Open Invoice</h3>}
          </button>

          <Link to="/">
            <button
              className="bg-blue-800 text-white w-48 h-16 m-4"
              onClick={closeCart}
            >
              <h3>Return to Store</h3>
            </button>
          </Link>
        </div>
        <div className={isOpen ? "w-[40rem]" : "hidden"}>
          <div className="flex flex-wrap text-center justify-center text-lg font-bold m-4">
            <div>{cartItems[0]?.rest.name}</div>
          </div>
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
            {cartItems.length === 0 ? (
              <tbody></tbody>
            ) : (
              <tbody>
                {cartItems ? (
                  Object.values(cartItems).map((item) => {
                    //console.log(item?.card?.info)
                    return (
                      <OneItem key={item?.info.id} item={item.info}></OneItem>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            )}
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
        </div>
      </div>
    </div>
  );
}

export default Checkout;
