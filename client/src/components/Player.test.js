// import { render } from "@testing-library/react";

import React from "react";
import Player from "./Player.js";

import * as rtl from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';

it("renders without crashing", () => {
  render(<Player />);
});


it('renders "all about kittens" text', () => {
    const players = {
        name: "Jeffrey Orndorff",
        country: "US",
        searches: 308
    }
    const wrapper = rtl.render(<Player players={players} />);
  });