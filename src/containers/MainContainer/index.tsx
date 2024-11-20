import {
  MContainerWrapper,
  MContainerTitleBox,
  MContainerNameBox,
  MContainerName,
} from "./styles";
import { PorfileImg } from "@/components";
import { MyInfoData } from "@/data";
import React from "react";

type MainContainerProps = {
  test?: string;
};

export const MainContainer: React.FC<MainContainerProps> = () => {
  const engNameArr = MyInfoData.engName.toUpperCase().split(" ");

  return (
    <MContainerWrapper>
      <PorfileImg tags={MyInfoData.tags} />

      <MContainerTitleBox>
        <span className="text-primary">꾸준한 성장</span>으로 <br />
        <span className="text-primary">선한 가치</span> 를 창출하는 <br />{" "}
        프론트앤드 개발자
      </MContainerTitleBox>

      <MContainerNameBox>
        {engNameArr.map((text) => (
          <MContainerName>{text}</MContainerName>
        ))}
      </MContainerNameBox>
    </MContainerWrapper>
  );
};
