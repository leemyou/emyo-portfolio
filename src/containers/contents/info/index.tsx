import { GridBox, PorfileImg, Text } from "@/components";
import React from "react";

type InfoContainerProps = {};

export const InfoContainer: React.FC<InfoContainerProps> = ({}) => {
  return (
    <GridBox className="grid grid-cols-12 gap-6 pt-40 bg-red-100">
      <div className="col-span-3">
        <PorfileImg />
        <Text fontSize={24} fontWeight="bold" className="mt-5">
          임효현
        </Text>
        <Text fontSize={16} className="my-1">
          2001.08.09
        </Text>
        <Text fontSize={12}>#지속성장 #가치창출 #선한_영향력</Text>
      </div>
      <div className="col-start-4 col-end-13">
        <Text fontSize={24} className="mb-10">
          안녕하세요.
          <br />
          <span className="text-primary font-bold">
            끝없는 성장으로 이로운 가치를 창출
          </span>
          하는 임효현입니다.
        </Text>

        <Text className="mb-6">
          항상 고민하고 생각하는 개발자입니다.
          <br />
          단순히 필요한 기술을 적용하고 넣는 과정 뿐만 아니라,
          <br />
          해당 기술이 프로젝트에 정말 필요한 기술인지를 고민하고 분석합니다.
        </Text>
        <Text className="mb-6">
          만드는 사람과 쓰는 사람 모두 편한 시스템을 만들기 위해서 끊임없이
          노력합니다. <br />
          쓰는 사람은 당연히 편해야하고,
          <br />
          만드는 사람 또한 개발 속도를 줄이고 유지보수를 편하게 하기 위한 개발을
          하는 것이
          <br />
          개발자가 가져야할 자세 중 하나라고 생각합니다.
        </Text>
        <Text>
          원하는 것을 이룰 때까지 달려드는 끈기와 노력, 열정이 자신있는
          개발자입니다.
          <br />
          노션 개발 노트에 꾸준히 개발사항을 업로드 하고 초심을 복기합니다.
          <br />
          또한 문제가 생겼을 때, 해당 문제의 상황, 원인분석, 해결방안을 정리하여
          겉으로만 해결하는 것이 아니라
          <br />
          원초적인 문제를 파악하고 이를 해결하려는 노력을 합니다.
        </Text>
        <Text className="mt-16 mb-6">EDUCATION</Text>
        <div className="flex gap-6">
          <div className="max-w-64">
            <Text>인하공업전문대학 컴퓨터시스템과 전문학사 졸업</Text>
            <Text fontSize={12} color="lighter">
              2020.03 - 2023.02
            </Text>
          </div>
          <div className="max-w-64 flex-col">
            <Text>인하공업전문대학 컴퓨터시스템공학과 학사 졸업</Text>
            <Text fontSize={12} color="lighter">
              2023.03 - 2024.02
            </Text>
          </div>
        </div>
      </div>
    </GridBox>
  );
};
