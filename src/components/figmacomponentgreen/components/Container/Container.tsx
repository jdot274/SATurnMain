import React from "react";
import styled from "styled-components";
import { Icon } from "../../icons/Icon";
import { Button } from "../Button";
import { Divider } from "../Divider";

interface Props {
  headerClassName: any;
}

const StyledContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 480px;

  .card-bg {
    background-color: #020c11;
    border: 1px solid;
    border-color: #051a24;
    border-radius: 16px;
    box-shadow: inset 0px 0px 32px #04161f;
    height: 300px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 480px;
  }

  .overlap-group-2 {
    background-color: #030f16;
    border: 1px solid;
    border-color: #041924;
    border-radius: 16px;
    box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
    height: 297px;
    position: relative;
  }

  .overlap {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 100% 100%;
    height: 21px;
    left: 0;
    position: absolute;
    top: 0;
    width: 480px;
    opacity: 0.5;
    backdrop-filter: blur(4px);
  }

  .top-highlight {
    height: 1px;
    left: 174px;
    position: absolute;
    top: 0;
    width: 255px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  }

  .right-highlight {
    height: 167px;
    left: 478px;
    position: absolute;
    top: 52px;
    width: 1px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.15);
  }

  .header {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    padding: 20px 30px;
    position: relative;
    width: 100%;
  }

  .icon-instance {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }

  .text-wrapper-2 {
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
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32px;
    margin-top: -1.00px;
    position: relative;
    text-fill-color: transparent;
    white-space: nowrap;
    width: fit-content;
  }

  .divider-instance {
    align-self: stretch !important;
    width: 100% !important;
  }

  .divider-2 {
    width: 480px !important;
  }

  .content {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    padding: 30px 30px 33px;
    position: relative;
    width: 100%;
  }

  .p {
    align-self: stretch;
    color: #5a7e90;
    font-family: "Onest", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: -1.00px;
    position: relative;
  }

  .button-instance {
    flex: 0 0 auto !important;
  }
`;

export const Container = ({ headerClassName }: Props): JSX.Element => {
  return (
    <StyledContainer title="Main Container">
      <div className="card-bg">
        <div className="overlap-group-2" title="Card Background Group">
          <div className="overlap" title="Card Background Overlap">
            <div className="top-highlight" title="Top Highlight Effect" />
          </div>

          <div className="right-highlight" title="Right Highlight Effect" />
        </div>
      </div>

      <div className={`header ${headerClassName}`} title="Container Header">
        <Icon className="icon-instance" title="Header Icon" />
        <div className="text-wrapper-2" title="Header Title">Title</div>
      </div>

      <Divider
        title="Section Divider"
        className="divider-instance"
        rectangleClassName="divider-2"
        rectangleClassNameOverride="divider-2"
      />
      <div className="content" title="Container Content">
        <p className="p" title="Content Text">
          Maecenas praesent sit pretium urna etiam sagittis leo. Cursus purus
          dignissim est fames nibh aliquet sed non. Vitae pellentesque sit
          tempus lectus massa volutpat tortor tellus. Tristique ullamcorper elit
          ante volutpat.
        </p>

        <Button
          title="Container Button"
          className="button-instance"
          icon1Color="url(#paint0_linear_2255_37)"
          icon1Stroke="url(#paint1_linear_2255_37)"
        />
      </div>
    </StyledContainer>
  );
};
