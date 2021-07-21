import { render } from "@testing-library/react";
import Toast from ".";

describe("<Search />", () => {
  let component;
  const toast = {
    title: "Test",
    message: "this is a test"
  }

  beforeEach(() => {
    component = render(<Toast {...toast} />)
  });

  test("renders content", () => {
    component.getByText(toast.title);
    component.getByText(toast.message);
  });
});


