import tw from "tailwind-styled-components";

export const NavWrapper = tw.nav`
  sticky
  top-10
  flex
  flex-col
  w-auto
  h-dvh
  overflow-[none]
`;

export const NavButton = tw.button`
  text-left
  text-5xl
  font-extrabold
  opacity-20

  hover:opacity-50
`;
