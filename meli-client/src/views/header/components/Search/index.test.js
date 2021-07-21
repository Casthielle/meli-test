import { fireEvent, render } from "@testing-library/react";
import Search from ".";

describe("<Search />", () => {
  let component;
  const mockHandler = jest.fn();
  const inputLabel = "Search Field";
  const buttonLabel = "Search Button";

  beforeEach(() => {
    component = render(<Search onSearch={mockHandler} />)
  });

  test("renders content", () => {
    component.getByLabelText(inputLabel);
    component.getByLabelText(buttonLabel);
  });

  test("searching event", () => {
    const input = component.getByLabelText(inputLabel);
    const button = component.getByLabelText(buttonLabel);
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    fireEvent.click(button);

    mockHandler.mock.calls.forEach(item => {
      expect(item).toContain('test');
    });
    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});


