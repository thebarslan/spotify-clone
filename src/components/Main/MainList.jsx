import React, { useState } from "react";

const MainList = ({ listName, list, listID, listType }) => {
     const [style, setStyle] = useState({
          opacity: 0,
     });
     const handleButtonOpacity = () => {
          if (!isOpacity) {
               setStyle({
                    opacity: 100,
               });
               setIsOpacity(true);
          } else {
               setStyle({
                    opacity: 0,
               });
               setIsOpacity(false);
          }
     };
     const [isOpacity, setIsOpacity] = useState(false);
     const [buttonOpacity, setButtonOpacity] = useState(0);
     const [showedItems, setShowedItems] = useState(7);
     const itemList = list.slice(0, showedItems).map((item) => {
          return (
               <div className="listItemContainer relative">
                    {listType !== "show" ? (
                         <button
                              className="playbutton2 bg-[#2dc434] p-4 rounded-full absolute bottom-[84px] right-4 z-40"
                              style={style}
                              onMouseEnter={() => {
                                   setStyle({ opacity: 100 });
                              }}
                         >
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
                    ) : (
                         <></>
                    )}
                    <a
                         href={listType + "/" + item.id}
                         onMouseEnter={handleButtonOpacity}
                         onMouseLeave={handleButtonOpacity}
                    >
                         <div className="item listItem flex flex-col p-4 bg-[#181818] gap-3 pb-6 w-full max-w-[183px] rounded-md ">
                              <div className="image rounded-sm relative">
                                   <img src={item.img} />
                              </div>
                              <div className="itemNameAndCreatorContainer w-40">
                                   <h2 className="text-white font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                                        {item.name}
                                   </h2>
                                   <h5 className="text-gray-400 text-sm overflow-hidden">
                                        {item.creator}
                                   </h5>
                              </div>
                         </div>
                    </a>
               </div>
          );
     });
     return (
          <div className="list mt-[2px] w-full">
               <div className="listHeader flex-1 w-full flex justify-between items-center">
                    <a href={"section/" + listID} className="underline">
                         <h2 className="text-[21px] text-white font-bold listName">
                              {listName}
                         </h2>
                    </a>
                    <a href={"section/" + listID}>
                         <h5 className="text-gray-400 hover:underline text-sm font-bold">
                              Tümünü göster
                         </h5>
                    </a>
               </div>
               <div className="listContainer mt-6 flex gap-6">{itemList}</div>
          </div>
     );
};

export default MainList;
