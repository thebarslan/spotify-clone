import React from "react";
import { contents } from "./../../contentlists/contents";

const SectionList = ({ contentId }) => {
     const content = contents.find(
          (contentItem) => contentItem.id === contentId
     );
     const itemList = content.content.map((item) => {
          return (
               <a href={"/" + contents[contentId - 1].type + "/" + item.id}>
                    <div className="item listItem flex flex-col p-4 bg-[#181818] gap-3 pb-6 w-full max-w-[183px] rounded-md">
                         <div className="image overflow-hidden rounded-sm">
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
          );
     });
     return (
          <div className="mainMiddle pt-2 pb-8">
               <h2 className="text-2xl font-bold text-white mb-4">
                    {contents[contentId - 1].name}
               </h2>

               <div className="listContainer mt-6  gap-6 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-7 xl:grid-cols-5 ">
                    {itemList}
               </div>
               <div className="wrapper h-2 border-t border-t-gray-700 mt-24 mb-16"></div>
          </div>
     );
};

export default SectionList;
