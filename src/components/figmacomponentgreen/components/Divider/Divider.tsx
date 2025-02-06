import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
  rectangleClassName: any;
  rectangleClassNameOverride: any;
}

const StyledDivider = styled.div`
  height: 2px;
  position: relative;
  width: 200px;

  & .rectangle {
    background: linear-gradient(
      180deg,
      rgb(5, 26, 36) 0%,
      rgba(5, 26, 36, 0) 100%
    );
    height: 1px;
    left: 0;
    position: absolute;
    top: 0;
    width: 200px;
  }

  & .div {
    background: linear-gradient(
      180deg,
      rgb(2.19, 9.47, 13.11) 0%,
      rgba(2.19, 9.47, 13.11, 0) 100%
    );
    height: 1px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 200px;
  }
`;

export const Divider = ({
  className,
  rectangleClassName,
  rectangleClassNameOverride,
}: Props): JSX.Element => {
  return (
    <StyledDivider className={`divider ${className}`} title="Divider Component">
      <div className={`rectangle ${rectangleClassName}`} title="Divider Top Line" />
      <div className={`div ${rectangleClassNameOverride}`} title="Divider Bottom Line" />
    </StyledDivider>
  );
};
