import React from "react";
import { FaCode } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Adventure 2 Learning</span>
      </div>
      <div style={{ float: "right" }}>Copyright 2022</div>
    </>
  );
}

export default LandingPage;
