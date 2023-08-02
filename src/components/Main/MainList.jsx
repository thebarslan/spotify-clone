import React, { useState } from "react";
import MainListItem from "./MainListItem";

const MainList = ({ listName, list, listID, listType }) => {
     const [buttonOpacity, setButtonOpacity] = useState(0);
     const [showedItems, setShowedItems] = useState(7);
     const itemList = list.slice(0, showedItems).map((item) => {
          return <MainListItem item={item} listType={listType} />;
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
