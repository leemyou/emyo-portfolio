import React from "react";
import { NavButton, NavWrapper } from "./style";

type NavbarProps = {
  navItems: string[];
};

export const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  return (
    <NavWrapper>
      {navItems.map((navItems) => {
        return <NavButton key={navItems}>{navItems.toUpperCase()}</NavButton>;
      })}
    </NavWrapper>
  );
};
