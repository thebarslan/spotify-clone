import React, { useState } from "react";
import MainTop from "./MainTop";
import MainLatestPlayed from "./MainLatestPlayed";
import MainList from "./MainList";
import { contents, podcastsYouMayLike } from "../../contentlists/contents";
const Main = () => {
     return (
          <div className="w-auto flex bg-[#121212] rounded-md ml-2 h-[869px] relative z-10 overflow-y-scroll">
               <div className="gradientColor absolute top-0 w-full flex-1 h-[300px] rounded-md -z-20"></div>
               <div className="container flex-1 w-full h-full px-6 opacity-100">
                    <MainTop />
                    <div className="mainMiddle pt-2">
                         <h2 className="text-[32px] font-bold text-white mb-4">
                              İyi akşamlar
                         </h2>
                         <div className="mainPart flex flex-col gap-7 pb-8">
                              <MainLatestPlayed />
                              <MainList
                                   listName={contents[0].name}
                                   list={contents[0].content}
                                   listID={contents[0].id}
                                   listType={contents[0].type}
                              />
                              <MainList
                                   listName={contents[1].name}
                                   list={contents[1].content}
                                   listID={contents[1].id}
                                   listType={contents[1].type}
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Main;
