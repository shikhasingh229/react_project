import HeaderComponent from "../HeaderComponent";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo", () => {
  const heading = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const logo = heading.getAllByTestId("logo");
  // console.log(logo[0])
  //console.log(logo[0].src)
  expect(logo[0].src).toBe("http://localhost/[object%20Object]");
});

test("Online Status", () => {
  const heading = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const status = heading.getByTestId("onlineStatus");
  //console.log(status[0].innerHTML)
  expect(status.innerHTML).toBe("🟢Online");
});

test("Cart", () => {
  const heading = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const cart = heading.getByTestId("cart");
  //console.log(cart.innerHTML)
  expect(cart.innerHTML).toBe(' <a href="/cart">Cart 0</a>');
});
