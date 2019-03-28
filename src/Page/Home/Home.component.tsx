import React from "react";
import { Link } from "@reach/router";

const Home = () => (
  <div className="flex flex-col min-h-screen">
  <div className="w-1/2">TEST</div>
  <div className="w-auto">TESt</div>
    <h1>Home</h1>
    <li>
      <Link to="/test">Test</Link>
    </li>
  </div>
);

export { Home };
