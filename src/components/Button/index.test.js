import React from "react";
import { render, waitFor } from "@testing-library/react";
import Button from ".";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click if the button is disabled", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render spinner/loading... text", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag (external link)", () => {
  const { container } = render(<Button isExternal type="link"></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  waitFor(() => expect(container.querySelector("a")).toBeInTheDocument());
});
