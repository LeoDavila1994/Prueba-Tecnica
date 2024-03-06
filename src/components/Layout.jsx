import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <section className="w-full ">
      <NavBar />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
