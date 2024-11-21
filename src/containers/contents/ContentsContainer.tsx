import React from "react";
import { Navbar } from "@/components";
import {
  CareerContainer,
  InfoContainer,
  SkillContainer,
  ProjectContainer,
} from "@/containers";

export const ContentsContainer: React.FC = () => {
  const navTabs = ["info", "skill", "career", "project"];

  return (
    <div className="flex relative gap-x-12 px-12">
      <Navbar navItems={navTabs} />
      <div className="flex-col w-full">
        <InfoContainer />
        <SkillContainer />
        <CareerContainer />
        <ProjectContainer />
      </div>
    </div>
  );
};
