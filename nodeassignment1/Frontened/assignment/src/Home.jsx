import React from 'react';
import abesImage from "./abes.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="image-section">
        <img src={abesImage} alt="ABES College" />
      </div>

      <div className="text-section">
        <h1>ABES Engineering College</h1>
      </div>
    </div>
  )
}
