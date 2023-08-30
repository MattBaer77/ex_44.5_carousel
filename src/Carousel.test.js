import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// SMOKE TEST
test("SMOKE - component renders without crashing", () => {
  render(<Carousel />);
})

// WRITE ONE SNAPSHOT TEST
test("SNAPSHOT - component matches snapshot", () => {

  const {asFragment} = render(<Carousel/>);
  expect(asFragment()).toMatchSnapshot()

})

// RIGHT ARROW - GOOD
it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

// LEFT ARROW - FAIL
it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

});

// EXHAUST ARRAY

test("navigation arrow disappears when image array exhausted - EITHER END,", () => {

  const { queryByTestId } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");

  expect(queryByTestId("left-arrow").style.visibility).toEqual("hidden")
  expect(queryByTestId("right-arrow").style.visibility).toEqual("visible")

  fireEvent.click(rightArrow);

  expect(queryByTestId("left-arrow").style.visibility).toEqual("visible")
  expect(queryByTestId("right-arrow").style.visibility).toEqual("visible")

  fireEvent.click(rightArrow);

  expect(queryByTestId("left-arrow").style.visibility).toEqual("visible")
  expect(queryByTestId("right-arrow").style.visibility).toEqual("hidden")

})