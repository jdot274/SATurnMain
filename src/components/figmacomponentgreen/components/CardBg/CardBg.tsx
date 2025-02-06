import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
  overlapGroupClassName: any;
  overlapClassName: any;
  topHighlightClassName: any;
  topHighlight: string;
  topRightClassName: any;
  rightHighlightClassName: any;
  rightHighlight: string;
  bottomLeftClassName: any;
  bottomRightClassName: any;
}

const StyledCardBg = styled.div`
  position: relative;
  z-index: 1;
  padding: 1px;
  border-radius: 20px;
  background: rgba(2, 12, 17, 0.05);
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: radial-gradient(
    circle at center,
    #006496 0%,
    rgba(0, 100, 150, 0.3) 50%,
    transparent 100%
    );
    z-index: -1;
  }

  outline: 4px solid #006496;
  outline-offset: -1px;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: #030D12;
    border-radius: 20px;
    z-index: -1;
    filter: blur(8px);
  }

  box-shadow: inset 0px 0px 32px #04161f;
  height: 371px;
  overflow: hidden;
  width: 389px;

  .overlap-group {
    position: relative;
    z-index: 2;
    background-color: rgba(3, 15, 22, 0.05);
    border: 2px solid #006496;
    border-radius: 16px;
    box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
    height: 368px;
    position: relative;

    .overlap {
      background-image: url(../../../static/img/shine-1.svg);
      background-size: 100% 100%;
      height: 21px;
      left: 0;
      position: absolute;
      top: 0;
      width: 389px;
      
      &::after {
        content: '';
        position: absolute;
        top: -2px;
        right: 40px;
        width: 120px;
        height: 1px;
        background: #0088ff;
        box-shadow: 0 0 12px rgba(0, 136, 255, 0.8);
      }
    }

    .top-highlight {
      height: 1px;
      right: 40px;
      position: absolute;
      top: -2px;
      width: 120px;
      background: #0088ff;
      box-shadow: 0 0 12px rgba(0, 136, 255, 0.8);
    }

    .right-side-highlight {
      content: '';
      position: absolute;
      top: 50%;
      right: -2px;
      transform: translateY(-50%);
      width: 2px;
      height: 180px;
      background: #0088ff;
      box-shadow: 0 0 12px rgba(0, 136, 255, 0.8);
    }

    .top-left {
      background-color: rgba(3, 15, 22, 0.05);
      border: 1px solid;
      border-color: #041924;
      border-radius: 3px;
      box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
      height: 6px;
      left: 10px;
      position: absolute;
      top: 10px;
      width: 6px;
    }

    .top-right {
      background-color: rgba(3, 15, 22, 0.05);
      border: 1px solid;
      border-color: #041924;
      border-radius: 3px;
      box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
      height: 6px;
      left: 373px;
      position: absolute;
      top: 10px;
      width: 6px;
    }

    .right-highlight {
      height: 180px;
      right: -2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      background: #0088ff;
      box-shadow: 0 0 12px rgba(0, 136, 255, 0.8);
    }

    .bottom-left {
      background-color: rgba(3, 15, 22, 0.05);
      border: 1px solid;
      border-color: #041924;
      border-radius: 3px;
      box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
      height: 6px;
      left: 9px;
      position: absolute;
      top: 351px;
      width: 6px;
    }

    .bottom-right {
      background-color: rgba(3, 15, 22, 0.05);
      border: 1px solid;
      border-color: #041924;
      border-radius: 3px;
      box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
      height: 6px;
      left: 372px;
      position: absolute;
      top: 351px;
      width: 6px;
    }
  }
`;

export const CardBg = ({
  className,
  overlapGroupClassName,
  overlapClassName,
  topHighlightClassName,
  topHighlight = "/img/top-highlight-1.png",
  topRightClassName,
  rightHighlightClassName,
  rightHighlight = "/img/right-highlight-1.png",
  bottomLeftClassName,
  bottomRightClassName,
}: Props): JSX.Element => {
  return (
    <StyledCardBg className={`card-bg ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`overlap ${overlapClassName}`}>
          <img
            className={`top-highlight ${topHighlightClassName}`}
            alt="Top highlight"
            src={topHighlight}
          />

          <div className="top-left" />

          <div className={`top-right ${topRightClassName}`} />
        </div>

        <img
          className={`right-highlight ${rightHighlightClassName}`}
          alt="Right highlight"
          src={rightHighlight}
        />

        <div className={`bottom-left ${bottomLeftClassName}`} />

        <div className={`bottom-right ${bottomRightClassName}`} />
      </div>
    </StyledCardBg>
  );
};

CardBg.propTypes = {
  topHighlight: PropTypes.string,
  rightHighlight: PropTypes.string,
};
