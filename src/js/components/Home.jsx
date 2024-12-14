import React, { useState } from "react";

//include images into your bundle
import "./home.css";

//create your first component
const Home = () => {
  const [active, setActive] = useState("");

  return (
    <div className="traffic-light">
      <div
        className={active === "red" ? "red lights selected" : "red lights"}
        onClick={() => setActive("red")}
      ></div>
      <div
        className={active === "yellow" ? "yellow lights selected" : "yellow lights"}
        onClick={() => setActive("yellow")}
      ></div>
      <div
        className={active === "green" ? "green lights selected" : "green lights"}
        onClick={() => setActive("green")}
      ></div>
      
    </div>
  );
};

export default Home;
