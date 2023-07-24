import React from "react";
import { useParams } from "react-router-dom";
import MainTop from "../Main/MainTop";
import SectionList from "./SectionList";

const Section = () => {
     const { id } = useParams();
     const contentId = parseInt(id);
     return (
          <>
               <div className="w-full flex bg-[#121212] rounded-md ml-2 h-[869px] relative z-10 overflow-y-scroll pb-4">
                    <div className="container flex-1 w-full h-full px-6 opacity-100">
                         <MainTop />
                         <SectionList contentId={contentId} />
                    </div>
               </div>
          </>
     );
};

export default Section;
