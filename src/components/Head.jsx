import React from "react";
import sunIcon from "../../images/icon-sun.svg";
import moonIcon from "../../images/icon-moon.svg";

export default function Head({ onMode, darkMode }) {
  return (
    <section className="title">
      <h1>TODO</h1>
      <button onClick={onMode}>
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt={darkMode ? "Sun icon" : "Moon icon"}
        />
      </button>
    </section>
  );
}
