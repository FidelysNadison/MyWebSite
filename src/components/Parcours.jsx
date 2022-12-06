import React from "react";

export default function Navbar() {
  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div id="Formations">
      <h1> Formations </h1>
        <ul>
          <li>ESGI</li>
          <li>BeCode</li>
          <li>OpenClassroom</li>
          <li>E-media</li>
          <li>NextA</li>
        </ul>
      </div>

      <div id="Expérience">
        <h1> Expérience</h1>
        <ul>
          <li>HaFe-Event</li>
          <li>Mada- Food</li>
        </ul>
      </div>
    </div>
  );
}
