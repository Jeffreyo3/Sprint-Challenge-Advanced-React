import { render } from "@testing-library/react";

import React from "react";
import Navbar from "./Navbar.jsx";


it("renders without crashing", () => {
  render(<Navbar />);
});
