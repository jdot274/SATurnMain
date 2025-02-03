import React from "react";
import styled from "styled-components";
import { Icon2 } from "../../icons/Icon2";
import { ButtonBg } from "../ButtonBg";

export interface ButtonProps {
  className: any;
  icon: JSX.Element;
  label?: string;
  onClick?: () => void;
}

const StyledButton = styled.div`
  align-items: center;
  border-radius: 22px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  padding: 10px 15px 13px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  & .button-bg-instance {
    height: 47px !important;
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
    width: 139px !important;
  }

  & .design-component-instance-node {
    background-color: unset !important;
    border: unset !important;
    border-color: unset !important;
    border-radius: unset !important;
    box-shadow: unset !important;
    height: 47px !important;
    width: 140px !important;
  }

  & .button-bg-2 {
    height: 42px !important;
    width: 139px !important;
  }

  & .button-bg-3 {
    height: 44px !important;
    width: 139px !important;
  }

  & .button-bg-4 {
    left: 0 !important;
  }

  & .text-wrapper {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(
      180deg,
      rgb(180.5, 205.13, 217.44) 0%,
      rgb(43.26, 86.12, 105.9) 100%
    );
    background-clip: text;
    color: transparent;
    font-family: "Onest", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: -1.00px;
    position: relative;
    text-fill-color: transparent;
    text-shadow: 0px 1px 2px #030d12;
    white-space: nowrap;
    width: fit-content;
  }

  & .icon-2 {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }
`;

export const Button = ({
  className,
  icon = <Icon2 className="icon-2" />,
  label = "Label here",
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton className={`button ${className}`} onClick={onClick}>
      <ButtonBg
        title="Button Background Component"
        className="button-bg-instance"
        glowClassName="button-bg-4"
        overlapGroupClassName="design-component-instance-node"
        rectangleClassName="button-bg-2"
        rectangleClassNameOverride="button-bg-3"
      />
      <div className="text-wrapper" title="Button Label Text">{label}</div>

      <div title="Button Icon">{icon}</div>
    </StyledButton>
  );
};
