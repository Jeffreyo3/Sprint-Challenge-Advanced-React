import { render } from "@testing-library/react";

import React from "react";
import Player from "./Player.js";


it("renders without crashing", () => {
  render(<Player />);
});
