import React from "react";
import Header from "../components/Header.tsx";
import { Link } from "react-router-dom";
import "./Submitted.css";

export default function Submitted() {
  //const navigate = useNavigate();
  return (
    <div className="container">
      <Header />
      <h1 className="message">
        Thanks for playing! Come back next week to see your results.
      </h1>
      <Link to="/">
        <button id="return">Home</button>{" "}
      </Link>
      <div id="space"></div>
    </div>
  );
}
