import BodyComponent from "../BodyComponent";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { restaurantsList } from "../../constant";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantsList);
    },
  });
});

test("Shimmer should load", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );
  
  const shimmer=body.getByTestId('shimmer')
  expect(shimmer.children.length).toBe(7);
  expect(shimmer).toBeInTheDocument();
  
  //console.log(shimmer)
});

test("Restaurant List should load", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <BodyComponent />
        </Provider>
      </StaticRouter>
    );

    await waitFor(()=>{
        expect(body.getByTestId('search-btn'))
    })
    
    const resList=body.getByTestId('res-list')
    //console.log(resList)

    expect(resList.children.length).toBe(9);
  });