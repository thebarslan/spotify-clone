import React from "react";
import Navbar from "./Navbar/Navbar";
import MusicPlayingPart from "./SongPart/MusicPlayingPart";
import { Outlet } from "react-router-dom";

const Layout = () => {
     return (
          <>
               <Navbar />
               <MusicPlayingPart />
               <Outlet />
          </>
     );
};

export default Layout;
