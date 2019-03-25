import React from "react";
import { Link } from "@reach/router";

const Home = () => (
  <div>
    <h2>Home</h2>
    <li>
      <Link to="/test">Test</Link>
    </li>
  </div>
);

export default Home;
