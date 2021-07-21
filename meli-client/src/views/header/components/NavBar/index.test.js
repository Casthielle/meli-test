import { render } from "@testing-library/react";
import NavBar from ".";

describe("<NavBar />", () => {
  let component;
  const childrenText = "Hello Test";

  beforeEach(() => {
    component = render(<NavBar><h1>Hello Test</h1></NavBar>)
  });

  test("renders content", () => {
    component.getByText(childrenText);
  });
});


