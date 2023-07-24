import React from "react";

const BottomNavbar = () => {
     const playlists = [
          {
               playlistName: "Beğenilen Şarkılar",
               playlistImage:
                    "https://misc.scdn.co/liked-songs/liked-songs-64.png",
               playlistCreator: "",
               playlistType: "Çalma Listesi",
          },
          {
               playlistName: "Personel Harici Giremez",
               playlistImage:
                    "https://mosaic.scdn.co/60/ab67616d00001e022839fe5e29a2b62f2c516f6bab67616d00001e02768828c6867cd0472fc84e4dab67616d00001e02da6f73a25f4c79d0e6b4a8bdab67616d00001e02de03bfc2991fd5bcfde65ba3",
               playlistCreator: "Mlhcsgn",
               playlistType: "Çalma Listesi",
          },
          {
               playlistName: "Lofi Coders",
               playlistImage:
                    "https://i.scdn.co/image/ab67706c0000dec569ff1a8f2c70e34915e0283a",
               playlistCreator: "1337 Studios",
               playlistType: "Çalma Listesi",
          },
          {
               playlistName: "Reddit Zone",
               playlistImage:
                    "https://i.scdn.co/image/5607f200d29bc3c9fc3001efca139829d3178b27",
               playlistCreator: "Rekkitz",
               playlistType: "Podcast",
          },
          {
               playlistName: "Darmaduman",
               playlistImage:
                    "https://i.scdn.co/image/ab67616d000011eb690c8a1e18cebea2ecfebcd0",
               playlistCreator: "Duman",
               playlistType: "Albüm",
          },
          {
               playlistName: "Duman 1",
               playlistImage:
                    "https://i.scdn.co/image/ab67616d000011eb19a949e3e4bd668fc41106fc",
               playlistCreator: "Duman",
               playlistType: "Albüm",
          },
          {
               playlistName: "Duman 2",
               playlistImage:
                    "https://i.scdn.co/image/ab67616d000011eb1d0d71d22c8d179577756208",
               playlistCreator: "Duman",
               playlistType: "Albüm",
          },
          {
               playlistName: "Darmaduman",
               playlistImage:
                    "https://i.scdn.co/image/ab67616d000011eb690c8a1e18cebea2ecfebcd0",
               playlistCreator: "Duman",
               playlistType: "Albüm",
          },
          {
               playlistName: "Darmaduman",
               playlistImage:
                    "https://i.scdn.co/image/ab67616d000011eb690c8a1e18cebea2ecfebcd0",
               playlistCreator: "Duman",
               playlistType: "Albüm",
          },
          {
               playlistName: "Darmaduman",
               playlistImage:
                    "https://i.scdn.co/image/ab67616d000011eb690c8a1e18cebea2ecfebcd0",
               playlistCreator: "Duman",
               playlistType: "Albüm",
          },
          {
               playlistName: "Darmaduman",
               playlistImage:
                    "https://i.scdn.co/image/ab67616d000011eb690c8a1e18cebea2ecfebcd0",
               playlistCreator: "Duman",
               playlistType: "Albüm",
          },
     ];
     return (
          <div className="w-[420px] bg-[#121212] h-[749px] rounded-lg flex-col px-4 py-2 flex gap-[5px]">
               <div className="library flex px-2 py-2 justify-between">
                    <button>
                         <div className="libraryLeft flex gap-3 items-center">
                              <svg
                                   role="img"
                                   height="24"
                                   width="24"
                                   aria-hidden="true"
                                   viewBox="0 0 24 24"
                                   data-encore-id="icon"
                                   class="Svg-sc-ytk21e-0 haNxPq"
                              >
                                   <path
                                        fill="#A7A7A7"
                                        d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                                   ></path>
                              </svg>
                              <h2 className="text-gray-400 font-bold">
                                   Kitaplığın
                              </h2>
                         </div>
                    </button>
                    <div className="libraryRight flex gap-6 items-center">
                         <button>
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
                                        fill="#A7A7A7"
                                        d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"
                                   ></path>
                              </svg>
                         </button>
                         <button>
                              <svg
                                   role="img"
                                   height="16"
                                   width="16"
                                   aria-hidden="true"
                                   viewBox="0 0 16 16"
                                   data-encore-id="icon"
                                   class="Svg-sc-ytk21e-0 leya-dW"
                              >
                                   <path
                                        fill="#A7A7A7"
                                        d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"
                                   ></path>
                              </svg>
                         </button>
                    </div>
               </div>
               <div className="libraryTypes flex h-12 items-center gap-2">
                    <button>
                         <h2 className="text-white bg-[#ffffff15] text-[14px] px-3 py-1 rounded-[32px] h-auto items-center">
                              Çalma listeleri
                         </h2>
                    </button>
                    <button>
                         <h2 className="text-white bg-[#ffffff15] text-[14px] px-3 py-1 rounded-[32px] h-auto items-center">
                              Albümler
                         </h2>
                    </button>
                    <button>
                         <h2 className="text-white bg-[#ffffff15] text-[14px] px-3 py-1 rounded-[32px] h-auto items-center">
                              Podcastler ve Programlar
                         </h2>
                    </button>
               </div>
               <div className="search flex justify-between px-2 pt-2 items-center">
                    <svg
                         role="img"
                         height="16"
                         width="16"
                         aria-hidden="true"
                         class="Svg-sc-ytk21e-0 haNxPq search-icon"
                         viewBox="0 0 24 24"
                         data-encore-id="icon"
                    >
                         <path
                              fill="#A7A7A7"
                              d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
                         ></path>
                    </svg>
                    <button>
                         <div className="buttonContainer flex items-center gap-2">
                              <h2 className="text-gray-400 text-[13px] font-bold">
                                   Yakın tarihli
                              </h2>
                              <svg
                                   role="img"
                                   height="16"
                                   width="16"
                                   aria-hidden="true"
                                   class="Svg-sc-ytk21e-0 haNxPq SbDHY3fVADNJ4l9qOLQ2"
                                   viewBox="0 0 16 16"
                                   data-encore-id="icon"
                              >
                                   <path
                                        fill="#A7A7A7"
                                        d="m14 6-6 6-6-6h12z"
                                   ></path>
                              </svg>
                         </div>
                    </button>
               </div>
               <div className="libraryList flex flex-col w-full mt-2 -mx-[6px] hover:overflow-y-auto overflow-hidden">
                    {playlists.map((playlist) => (
                         <div className="listItemContainer flex flex-1 w-full">
                              <button className="flex-1">
                                   <div className="listItem flex flex-1 rounded-md  hover:bg-[#ffffff10] h-16 items-center gap-3">
                                        <div className="listItemLeft h-12 w-12 ml-2 rounded-md overflow-hidden">
                                             <img
                                                  src={playlist.playlistImage}
                                                  alt=""
                                             />
                                        </div>

                                        <div className="listItemRight flex flex-col gap-[4px]">
                                             <div className="listItemTop">
                                                  <h2 className="text-white text-md font-semibold float-left">
                                                       {playlist.playlistName}
                                                  </h2>
                                             </div>

                                             <div className="ListItemBottom flex items-center gap-2">
                                                  {playlist.playlistCreator ===
                                                       "" && (
                                                       <svg
                                                            role="img"
                                                            height="12"
                                                            width="12"
                                                            aria-hidden="false"
                                                            class="Svg-sc-ytk21e-0 ilPTuf G7aCptcOZswI1fN6dGkO"
                                                            viewBox="0 0 16 16"
                                                            data-encore-id="icon"
                                                       >
                                                            <title>
                                                                 Sabitlenenler
                                                            </title>
                                                            <path
                                                                 fill="#42e93c"
                                                                 d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"
                                                            ></path>
                                                       </svg>
                                                  )}

                                                  <div className="text flex gap-1">
                                                       <h2 className="text-currentColor font-semibold text-[13px]">
                                                            {
                                                                 playlist.playlistType
                                                            }
                                                       </h2>
                                                       <h2 className="text-currentColor font-semibold text-[13px]">
                                                            .
                                                       </h2>
                                                       <h2 className="text-currentColor font-semibold text-[13px]">
                                                            {playlist.playlistCreator ===
                                                            ""
                                                                 ? "197 Şarkı"
                                                                 : playlist.playlistCreator}
                                                       </h2>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </button>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default BottomNavbar;
