import React from "react";

const GameSlide = ({ game, active, handleToggle }) => {
  return (
    <div className="gameSlider">
      <img src={game.background_image} alt="GameImage" />
      <div className={`video ${active ? "active" : undefined}`}>
        <iframe
          width={1200}
          height={720}
          src={game.clip.clips.full}
          title={game.name}
          allow="accelerometer; clipboard-write; encrypted-media;gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
        <h2>{game.name}</h2>
        <p>{game.rating}</p>
        <div className="buttons">
          <a href="" className="orderBtn">
            Order Now
          </a>
          <a
            href="#"
            className={`playBtn ${active ? "active" : undefined} `}
            onClick={handleToggle}
          >
            <span className="pause">
              <i className="bi bi-pause-fill"></i>
            </span>
            <span className="play">
              <i className="bi bi-play-fill"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameSlide;
