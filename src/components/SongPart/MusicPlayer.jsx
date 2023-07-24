import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
     const audioPlayer = useRef();
     const [isPlaying, setIsPlaying] = useState(false);
     const [currentTime, setCurrentTime] = useState(0);
     const [curTimeInt, setCurTimeInt] = useState(0);
     const [isDragging, setIsDragging] = useState(false);
     const editAudioDuration = (duration) => {
          if (duration < 60) {
               if (duration >= 10) {
                    duration = "0:" + Math.floor(duration).toString();
               } else {
                    duration = "0:0" + Math.floor(duration).toString();
               }
               return duration;
          } else {
               if (Math.floor(duration % 60 >= 10)) {
                    duration =
                         Math.floor(duration / 60).toString() +
                         ":" +
                         Math.floor(duration % 60).toString();
               } else {
                    duration =
                         Math.floor(duration / 60).toString() +
                         ":0" +
                         Math.floor(duration % 60).toString();
               }
               return duration;
          }
     };
     useEffect(() => {
          if (isPlaying) {
               setInterval(() => {
                    setCurrentTime(
                         editAudioDuration(audioPlayer.current.currentTime)
                    );
                    setCurTimeInt(audioPlayer.current.currentTime);
               }, 500);
          }
     }, [isPlaying]);
     const playAndStop = () => {
          if (isPlaying) {
               audioPlayer.current.pause();
               setIsPlaying(!isPlaying);
               return;
          }
          audioPlayer.current.play();
          setIsPlaying(!isPlaying);
          return;
     };
     const handleSliderChange = (event) => {
          if (audioPlayer.current) {
               audioPlayer.current.currentTime = event.target.value;
               setCurTimeInt(event.target.value);
               setCurrentTime(editAudioDuration(event.target.value));
          }
     };
     const handleMouseDown = () => {
          setIsDragging(true);
     };

     const handleMouseUp = () => {
          setIsDragging(false);
     };

     const handleMouseMove = (event) => {
          if (isDragging && audioPlayer.current) {
               const rect = event.target.getBoundingClientRect();
               const offsetX = event.clientX - rect.left;
               const width = rect.width;
               const percentage = offsetX / width;
               const time = percentage * audioPlayer.current.duration;
               setCurTimeInt(time);
               audioPlayer.current.currentTime = time;
          }
     };
     return (
          <>
               <audio
                    ref={audioPlayer}
                    src="https://cdns-preview-5.dzcdn.net/stream/c-5e1529c5e8bd52c8d5d04df256eb6cc9-15.mp3"
                    type="audio/mp3"
               ></audio>
               <div className="flex-[3] h-full w-full flex items-center flex-col py-2 gap-2">
                    <div className="icons flex gap-6 w-auto h-auto items-center">
                         <svg
                              width="16"
                              height="16"
                              aria-hidden="true"
                              class="Svg-sc-ytk21e-0 haNxPq"
                              data-encore-id="icon"
                         >
                              <path
                                   fill="#E5E7EB"
                                   d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
                              />
                              <path
                                   fill="#E5E7EB"
                                   d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
                              />
                         </svg>
                         <svg
                              role="img"
                              height="16"
                              width="16"
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              data-encore-id="icon"
                              class="Svg-sc-ytk21e-0 haNxPq"
                         >
                              <path
                                   fill="#E5E7EB"
                                   d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
                              ></path>
                         </svg>
                         <button onClick={playAndStop}>
                              <div className="start-stop-icon w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                   {!isPlaying ? (
                                        <svg
                                             role="img"
                                             height="16"
                                             width="16"
                                             aria-hidden="true"
                                             viewBox="0 0 16 16"
                                             data-encore-id="icon"
                                             class="Svg-sc-ytk21e-0 haNxPq"
                                        >
                                             <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                                        </svg>
                                   ) : (
                                        <svg
                                             role="img"
                                             height="16"
                                             width="16"
                                             aria-hidden="true"
                                             viewBox="0 0 16 16"
                                             data-encore-id="icon"
                                             class="Svg-sc-ytk21e-0 haNxPq"
                                        >
                                             <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                                        </svg>
                                   )}
                              </div>
                         </button>

                         <svg
                              role="img"
                              height="16"
                              width="16"
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              data-encore-id="icon"
                              class="Svg-sc-ytk21e-0 haNxPq"
                         >
                              <path
                                   fill="#E5E7EB"
                                   d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
                              ></path>
                         </svg>
                         <svg
                              role="img"
                              height="16"
                              width="16"
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              data-encore-id="icon"
                              class="Svg-sc-ytk21e-0 haNxPq"
                         >
                              <path
                                   fill="#E5E7EB"
                                   d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
                              ></path>
                         </svg>
                    </div>
                    <div className="music-controller flex w-full h-auto items-center gap-2 px-16">
                         <h2 className="text-xs text-gray-400">
                              {audioPlayer.current
                                   ? currentTime !== 0
                                        ? currentTime
                                        : "0:00"
                                   : "0:00"}
                         </h2>
                         <div className="music-slider flex-1 items-center flex ">
                              <input
                                   type="range"
                                   onInput={handleSliderChange}
                                   max={
                                        audioPlayer.current
                                             ? audioPlayer.current.duration
                                             : 0
                                   }
                                   min={1}
                                   value={curTimeInt}
                                   onMouseDown={handleMouseDown}
                                   onMouseUp={handleMouseUp}
                                   onMouseMove={handleMouseMove}
                                   className="w-full flex-1 bg-white h-[6px] rounded-full text-red-400"
                              />
                         </div>
                         <h2 className="text-xs text-gray-400">
                              {audioPlayer.current
                                   ? editAudioDuration(
                                          audioPlayer.current.duration
                                     )
                                   : "0:00"}
                         </h2>
                    </div>
               </div>
          </>
     );
};

export default MusicPlayer;
