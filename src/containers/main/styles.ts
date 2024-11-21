import tw from "tailwind-styled-components";

export const MContainerWrapper = tw.div`
  relative
  flex 
  w-full
  h-dvh
  flex-col
  items-center
  justify-center
  gap-20
`;

export const MContainerBg = tw.div`
  absolute
  w-full
  h-full
  bg-white
  opacity-50
`;

export const MContainerTitleBox = tw.h1`
  text-center
  font-extrabold
  text-6xl
  text-grey-200
  z-10`;

export const MContainerNameBox = tw.div`
  flex
  flex-col
  gap-1
  items-start
  justify-start
  absolute
  bottom-0
  left-0`;

export const MContainerName = tw.span`
  text-9xl
  font-extrabold
  leading-[100px]
  opacity-10
  text-primary`;
