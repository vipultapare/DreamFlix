import React from "react";

const VideoContainer = () => {
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/V-mugKDQDlg?si=c_BieEw6qRovklGq&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
