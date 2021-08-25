import React from "react";
import { Link } from "gatsby";

const HomePage = () => {
  function onButtonClick() {
    console.log("Hi there");
  }

  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <p>HelloHello</p>
      <button onClick={onButtonClick}>Click Me!</button>
      <Link to="/about"> Link to About Page</Link>
    </React.Fragment>
  );
};

export default HomePage;
