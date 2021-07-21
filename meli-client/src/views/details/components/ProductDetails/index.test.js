import { render } from "@testing-library/react";
import ProductDetails from ".";

describe("<ProductDetails />", () => {
  let component;

  const product = {
    id: '001',
    title: "Table",
    price: {
      currency: "$",
      amount: 2300,
      decimals: 0.25,
    },
    city: "Mendoza",
    picture: "thumbnail.png",
    condition: "new",
    free_shipping: true
  };

  beforeEach(() => {
    component = render(<ProductDetails product={product} />);
  });

  test("renders content", () => {
    component.getAllByText(product.title);
    component.getByText(`${product.price.currency} ${product.price.amount}`);
  });
});


