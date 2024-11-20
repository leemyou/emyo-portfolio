import tw from "tailwind-styled-components";

type ProfileImageStyleProps = {
  hasTags: boolean;
};

type ProfileTagStyleProps = {
  isTop: boolean;
};

export const PImageBox = tw.img<ProfileImageStyleProps>`${(hasTags) =>
  `bg-slate-400
  rounded-full
  w-full
  h-full
  ` +
  (hasTags &&
    `border-white-100
    border-4
  `)}`;

export const PImageTag = tw.span<ProfileTagStyleProps>`${({ isTop }) =>
  `absolute  
  text-primary
  text-xs 
  bg-white-100
  py-2 pl-3
  rounded-3xl
  ` +
  (isTop
    ? `top-4
      -left-14
      w-32
      -z-10`
    : `bottom-4
      left-20
      w-36
      text-center
      px-0`)}`;
