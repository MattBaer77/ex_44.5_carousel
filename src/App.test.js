import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// SMOKE TEST
test("SMOKE - component renders without crashing", () => {
    render(<App />)
});

// WRITE ONE SNAPSHOT TEST
test("SNAPSHOT - component matches snapshot", () => {

    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot()

})