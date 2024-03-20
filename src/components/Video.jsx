import React from "react";
import ReactPlayer from "react-player";
import "../App.css"; 

const Video = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-[#1B3E80] font-bold text-3xl md:text-4xl lg:text-5xl py-10 text-center">
          BMW VIDEO
        </h1>
        <div className="player-wrapper">
          {" "}
          
          <ReactPlayer
            className="react-player"
            light={true}
            controls={true}
            url="https://youtu.be/wNAmxL25Bhk"
            width="100%"
            height="100%"
          />
        </div>
      </section>
    </div>
  );
};

export default Video;
