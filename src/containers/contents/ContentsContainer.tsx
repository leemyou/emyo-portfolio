import React from "react";
import { Navbar } from "@/components";
import {
  CareerContainer,
  InfoContainer,
  SkillContainer,
  ProjectContainer,
} from "@/containers";

export const ContentsContainer: React.FC = () => {
  return (
    <div className="flex relative gap-x-12 px-12">
      <Navbar />
      <div className="flex-col w-full">
        <InfoContainer />
        <SkillContainer />
        <CareerContainer />
        <ProjectContainer />
      </div>
    </div>
  );
};
