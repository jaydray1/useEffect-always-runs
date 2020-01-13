import React from "react";
import { render } from "@testing-library/react";
import Check from "../Check";

it("should render the Check.js component on mount", () => {
  render(<Check labelOn="On" labelOff="Off" />);

  const container = document.body;

  expect(container).toBeTruthy();
});
