import React from "react";
import homepage from "../assets/homepage.png";

function Home() {
  return (
    <div>
      <div className="home-image">
        <img src={homepage} alt="" srcset="" />
      </div>
      <div className="entropay-banner">
        <div className="entropay-banner-inner">
          <span>Easy | Fast | Entropay</span>
          <span>Easy | Fast | Entropay</span>
          <span>Easy | Fast | Entropay</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
