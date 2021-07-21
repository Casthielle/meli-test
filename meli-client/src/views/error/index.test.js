import { render } from "@testing-library/react";
import Error from ".";

test("renders content", () => {
  const error = {
    message: "Esto es un error",
  };
  const component = render(<Error {...error} />);
  component.getByText(error.message);
});
