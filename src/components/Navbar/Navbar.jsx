import React from "react";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
     return (
          <div className="navbar flex-col flex gap-2 w-auto">
               <TopNavbar />
               <BottomNavbar />
          </div>
     );
};

export default Navbar;
