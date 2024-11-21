import React from "react";
import {
  ContactContainer,
  ContentsContainer,
  MainContainer,
} from "@/containers";

export const MainPage: React.FC = () => {
  return (
    <div className="bg-white ">
      <MainContainer />
      <ContentsContainer />
      <ContactContainer />
    </div>
  );
};
