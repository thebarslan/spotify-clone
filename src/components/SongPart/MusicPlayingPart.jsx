import React from "react";
import MusicInfo from "./MusicInfo";
import MusicPlayer from "./MusicPlayer";
import MusicEdit from "./MusicEdit";

const MusicPlayingPart = () => {
     return (
          <div className="w-full flex-1 h-[72px] bg-black fixed bottom-2 flex items-center justify-between px-2 z-30">
               <MusicInfo />
               <MusicPlayer />
               <MusicEdit />
          </div>
     );
};

export default MusicPlayingPart;
