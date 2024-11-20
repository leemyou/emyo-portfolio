import { PImageBox, PImageTag } from "./styles";
import React, { useMemo } from "react";

type PorfileImgProps = {
  tags?: string[];
};

export const PorfileImg: React.FC<PorfileImgProps> = ({ tags = [] }) => {
  const hasTag = useMemo(() => {
    return tags.length > 0;
  }, [tags]);

  return (
    <div className={"relative z-10" + (hasTag ? " w-36 h-36" : " w-44 h-44")}>
      {/* 태그 */}
      {hasTag && (
        <>
          <PImageTag isTop={true}>{tags[0]}</PImageTag>
          <PImageTag isTop={false}>{tags[1] + " " + tags[2]}</PImageTag>
        </>
      )}
      {/* 이미지 */}
      <PImageBox hasTags={hasTag} width={"100%"} height={"100%"} />
    </div>
  );
};
