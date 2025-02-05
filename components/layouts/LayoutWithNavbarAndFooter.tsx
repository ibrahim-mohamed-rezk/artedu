"use client";

import Footer from "../Footer";
import Navbar from "../Navbar";

const LayoutWithNavbarAndFooter = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full flex">
        <Navbar />
        <div className="w-full order-1 h-screen max-h-[1080px] overflow-auto hide-scrollbar">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWithNavbarAndFooter;
