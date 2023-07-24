import React from "react";

const MainLatestPlayed = ({ onColorExtracted }) => {
     const handleColorExtraction = (color) => {
          onColorExtracted(color);
     };
     const latestPlayed = [
          {
               image: "https://mosaic.scdn.co/640/ab67616d00001e022839fe5e29a2b62f2c516f6bab67616d00001e02768828c6867cd0472fc84e4dab67616d00001e02da6f73a25f4c79d0e6b4a8bdab67616d00001e02de03bfc2991fd5bcfde65ba3",
               name: "Personel Harici Giremez",
          },
          {
               image: "https://i.scdn.co/image/ab6761610000e5ebc79f78fd72a3e5faf699a8be",
               name: "The Lumineers",
          },
          {
               image: "https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696",
               name: "Coding Mode",
          },
          {
               image: "https://i.scdn.co/image/ab67656300005f1f887244a85c4cea27fa3afa47",
               name: "Farazi V Kayra - Dobro Vecer",
          },
          {
               image: "https://mosaic.scdn.co/640/ab67616d00001e020a787972d5156ba10cb12b56ab67616d00001e021773d8c5158bab36592b24cbab67616d00001e02d28234f00eb7e02763fd7f7fab67616d00001e02f3ced05792546f8eae493fb5",
               name: "Dedim dedim inanmadınız",
          },
          {
               image: "https://i.scdn.co/image/ab67656300005f1fad162e301f336a7cdff77c67",
               name: "Cartel bir numara en büyük",
          },
     ];
     return (
          <div className="mainLatestPlayed flex flex-1 w-full">
               <div className="specialgrid grid 2xl:grid-cols-3 grid-cols-2 flex-1 w-full">
                    {latestPlayed.map((latest) => (
                         <button className="latestPlayedButton">
                              <div className="latestPlayedContainer w-full h-20 max-h-20 min-h-20 flex bg-[#ffffff17] rounded-[4px] justify-between">
                                   <div className="left-side flex gap-4 items-center">
                                        <div className="img h-20 w-20 rounded-[4px] overflow-hidden">
                                             <img
                                                  src={latest.image}
                                                  alt=""
                                                  srcset=""
                                             />
                                        </div>
                                        <div className="title">
                                             <h2 className="text-white font-bold text-[0.8rem] lg:text-[1rem]">
                                                  {latest.name}
                                             </h2>
                                        </div>
                                   </div>
                                   <div className="right-side flex items-center pr-4">
                                        <button className="playbutton bg-[#2dc434] p-4 rounded-full">
                                             <svg
                                                  role="img"
                                                  height="24"
                                                  width="24"
                                                  aria-hidden="true"
                                                  viewBox="0 0 24 24"
                                                  data-encore-id="icon"
                                                  class="Svg-sc-ytk21e-0 haNxPq"
                                             >
                                                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                             </svg>
                                        </button>
                                   </div>
                              </div>
                         </button>
                    ))}
               </div>
          </div>
     );
};

export default MainLatestPlayed;
