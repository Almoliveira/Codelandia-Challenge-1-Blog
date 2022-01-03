import React from "react";
import Classes from "./NavHeader.module.css";
import SearchBar from "./SearchBar";

const NavHeader = () => {
  return (
    <div className={Classes.HeaderDiv}>
      <header className={Classes.container}>
        <div className={Classes.flexAlign}>
          <p>Codelândia</p>
          <p>Blog</p>
        </div>
        <div>
            <SearchBar />
        </div>
      </header>
    </div>
  );
};

export default NavHeader;
