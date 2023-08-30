import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


// SMOKE TEST
test("SMOKE - component renders without crashing", () => {
    render(<Card />)
});

// WRITE ONE SNAPSHOT TEST
test("SNAPSHOT - component matches snapshot", () => {

    const {asFragment} = render(<Card/>);
    expect(asFragment()).toMatchSnapshot()

})