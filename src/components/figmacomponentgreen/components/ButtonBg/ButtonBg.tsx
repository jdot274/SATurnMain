import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButtonBg = styled.div`
  height: 103px;
  width: 181px;

  & .overlap-group-2 {
    background-color: #030f16;
    border: 1px solid;
    border-color: #041924;
    border-radius: 16px;
    box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
    height: 368px;
    position: relative;
  }

  & .rectangle-2 {
    background-color: #061f2c;
    border: 1px solid;
    border-color: #083043;
    border-radius: 22px;
    box-shadow: inset 0px 0px 32px #062636, 0px 2px 4px #030d12;
    height: 98px;
    left: 0;
    position: absolute;
    top: 5px;
    width: 181px;
  }

  & .rectangle-3 {
    background-color: #061f2c;
    border: 1px solid;
    border-color: #083043;
    border-radius: 22px;
    box-shadow: inset 0px 0px 32px #062636, 0px 2px 4px #030d12;
    height: 100px;
    left: 0;
    position: absolute;
    top: 0;
    width: 181px;
  }
`;

interface Props {
  className: any;
  overlapGroupClassName: any;
  rectangleClassName: any;
  rectangleClassNameOverride: any;
  glowClassName: any;
}

export const ButtonBg = ({
  className,
  overlapGroupClassName,
  rectangleClassName,
  rectangleClassNameOverride,
  glowClassName,
}: Props): JSX.Element => {
  return (
    <StyledButtonBg className={`button-bg ${className}`} title="Button Background Container">
      <div className={`overlap-group-2 ${overlapGroupClassName}`} title="Button Background Group">
        <div className={`rectangle-2 ${rectangleClassName}`} title="Button Background Layer 1" />
        <div className={`rectangle-3 ${rectangleClassNameOverride}`} title="Button Background Layer 2" />
      </div>
    </StyledButtonBg>
  );
};

