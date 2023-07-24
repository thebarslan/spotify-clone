import React from "react";

const MusicInfo = () => {
     return (
          <div className="flex-[2] h-full w-full  flex items-center gap-4">
               <div className="img-container rounded overflow-hidden w-[56px] h-[56px]">
                    <img src="https://i.scdn.co/image/ab67616d00004851e4c3db3e7ebfc22bc080f334" />
               </div>
               <div className="song-and-singer-name flex flex-col gap-[2px]">
                    <h4 className="text-sm text-white font-semibold">
                         Ophelia
                    </h4>
                    <h5 className="text-[10px] text-gray-400 font-semibold">
                         The Lumineers
                    </h5>
               </div>
               <div className="icons flex gap-4 ml-3">
                    <svg
                         width="16"
                         height="16"
                         aria-hidden="true"
                         class="Svg-sc-ytk21e-0 haNxPq"
                         data-encore-id="icon"
                    >
                         <path
                              fill="white"
                              d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"
                         />
                    </svg>
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                    >
                         <g fill="currentColor" fill-rule="evenodd">
                              <path
                                   fill="white"
                                   fill-rule="nonzero"
                                   d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                              />
                              <path fill="white" d="M10 8h4v3h-4z" />
                         </g>
                    </svg>
               </div>
          </div>
     );
};

export default MusicInfo;
