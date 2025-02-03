import React from "react";
import styled from "styled-components";
import { Date } from "../Date";

interface Props {
  className: any;
  dateDateClassName: any;
  dateDateClassNameOverride: any;
  dateDivClassName: any;
  dateDivClassNameOverride: any;
  dateDateClassName1: any;
  dateDateClassName2: any;
  dateDateClassName3: any;
  dateDateClassName4: any;
  dateDateClassName5: any;
  dateDateClassName6: any;
  dateDateClassName7: any;
  dateDateClassName8: any;
  dateDateClassName9: any;
  dateDateClassName10: any;
  dateDateClassName11: any;
  dateDateClassName12: any;
  dateDateClassName13: any;
  dateDateClassName14: any;
  dateDateClassName15: any;
  dateDateClassName16: any;
  dateDateClassName17: any;
  dateDateClassName18: any;
  dateDateClassName19: any;
  dateDateClassName20: any;
  dateDateClassName21: any;
  dateDateClassName22: any;
  dateDateClassName23: any;
  dateDateClassName24: any;
  dateDateClassName25: any;
  dateDateClassName26: any;
  dateDateClassName27: any;
  dateDateClassName28: any;
  dateDateClassName29: any;
  dateDateClassName30: any;
  dateDateClassName31: any;
  dateDateClassName32: any;
  dateDateClassName33: any;
  dateDateClassName34: any;
  dateDateClassName35: any;
  dateDateClassName36: any;
  dateDateClassName37: any;
  dateDateClassName38: any;
  dateDateClassName39: any;
  dateDateClassName40: any;
  dateDateClassName41: any;
  dateDateClassName42: any;
}

const StyledCalDark = styled.div`
  -webkit-backdrop-filter: blur(85px) brightness(100%);
  backdrop-filter: blur(85px) brightness(100%);
  background: linear-gradient(
    180deg,
    rgba(253.51, 247.56, 255, 0.21) 0%,
    rgba(253.51, 247.56, 255, 0) 100%
  );
  border-radius: 20px;
  box-shadow: inset 5px 5px 12px #ffffff75, inset -5px -5px 15px #00000075;
  height: 382px;
  position: relative;
  width: 373px;

  .group {
    height: 33px;
    left: 37px;
    position: absolute;
    top: 28px;
    width: 303px;
  }

  .arrow-left {
    height: 5px;
    left: 126px;
    position: absolute;
    top: 14px;
    width: 8px;
  }

  .text-wrapper {
    color: #ffffff;
    font-family: "Prompt", Helvetica;
    font-size: 14px;
    font-weight: 600;
    height: 21px;
    left: 53px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 6px;
  }

  .div {
    color: #ffffff;
    font-family: "Prompt", Helvetica;
    font-size: 14px;
    font-weight: 500;
    height: 21px;
    left: 252px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 6px;
  }

  .arrow-left-wrapper {
    background-color: #f7f4fa1a;
    border-radius: 16.5px;
    height: 33px;
    left: 154px;
    position: absolute;
    top: 0;
    transform: rotate(180deg);
    width: 33px;
  }

  .img {
    height: 12px;
    left: 13px;
    position: absolute;
    top: 11px;
    transform: rotate(-180deg);
    width: 7px;
  }

  .img-wrapper {
    background-color: #f7f4fa1a;
    border-radius: 16.5px;
    height: 33px;
    left: 0;
    position: absolute;
    top: 0;
    width: 33px;
  }

  .arrow-left-2 {
    height: 12px;
    left: 13px;
    position: absolute;
    top: 10px;
    width: 7px;
  }

  .overlap-group {
    height: 269px;
    left: 28px;
    position: absolute;
    top: 85px;
    width: 321px;
  }

  .rectangle {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(232.69, 160.17, 19.39, 0.29) 0%,
      rgba(223.12, 81.25, 20.45, 0.29) 100%
    );
    border-radius: 11px;
    height: 43px;
    left: 43px;
    position: absolute;
    top: 152px;
    width: 278px;
  }

  .group-2 {
    height: 269px;
    left: 0;
    position: absolute;
    top: 0;
    width: 317px;
  }

  .component {
    color: #ffffff69 !important;
  }

  .date-instance {
    color: #ffffff !important;
    left: 8px !important;
  }

  .design-component-instance-node {
    color: #ffffff !important;
    left: 10px !important;
  }

  .component-2 {
    color: #ffffff !important;
  }

  .component-3 {
    color: #ffb775 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    height: 18px !important;
    left: 10px !important;
    top: 7px !important;
  }

  .component-4 {
    color: #ffb775 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    height: 18px !important;
    left: 8px !important;
    top: 7px !important;
  }

  .component-5 {
    color: #ffb775 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    height: 18px !important;
    left: 7px !important;
    top: 7px !important;
  }

  .component-6 {
    color: #ffb775 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    height: 18px !important;
    left: 12px !important;
    top: 7px !important;
  }

  .component-7 {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(232.69, 160.17, 19.39) 0%,
      rgb(223.12, 81.25, 20.45) 100%
    ) !important;
    border-radius: unset !important;
    box-shadow: 1px 8px 11px -1px #df501478 !important;
    left: 47px !important;
    position: absolute !important;
    top: 156px !important;
  }

  .component-8 {
    color: #ffffff !important;
    left: 11px !important;
  }

  .component-9 {
    left: 47px !important;
    position: absolute !important;
    top: 234px !important;
  }

  .component-10 {
    color: #ffffff !important;
    left: 12px !important;
  }

  .component-11 {
    color: #ffffff69 !important;
    left: 10px !important;
  }

  .component-12 {
    color: #ffffff69 !important;
    left: 8px !important;
  }

  .component-13 {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(232.69, 160.17, 19.39) 0%,
      rgb(223.12, 81.25, 20.45) 100%
    ) !important;
    border-radius: unset !important;
    box-shadow: 1px 8px 11px -1px #df501478 !important;
    left: 282px !important;
    position: absolute !important;
    top: 156px !important;
  }
`;

export const CalDark = ({
  className,
  dateDateClassName,
  dateDateClassNameOverride,
  dateDivClassName,
  dateDivClassNameOverride,
  dateDateClassName1,
  dateDateClassName2,
  dateDateClassName3,
  dateDateClassName4,
  dateDateClassName5,
  dateDateClassName6,
  dateDateClassName7,
  dateDateClassName8,
  dateDateClassName9,
  dateDateClassName10,
  dateDateClassName11,
  dateDateClassName12,
  dateDateClassName13,
  dateDateClassName14,
  dateDateClassName15,
  dateDateClassName16,
  dateDateClassName17,
  dateDateClassName18,
  dateDateClassName19,
  dateDateClassName20,
  dateDateClassName21,
  dateDateClassName22,
  dateDateClassName23,
  dateDateClassName24,
  dateDateClassName25,
  dateDateClassName26,
  dateDateClassName27,
  dateDateClassName28,
  dateDateClassName29,
  dateDateClassName30,
  dateDateClassName31,
  dateDateClassName32,
  dateDateClassName33,
  dateDateClassName34,
  dateDateClassName35,
  dateDateClassName36,
  dateDateClassName37,
  dateDateClassName38,
  dateDateClassName39,
  dateDateClassName40,
  dateDateClassName41,
  dateDateClassName42,
}: Props): JSX.Element => {
  return (
    <StyledCalDark className={`cal-dark ${className}`}>
      <div className="group">
        <img
          className="arrow-left"
          alt="Arrow left"
          src="/img/arrow-left-3.svg"
        />

        <div className="text-wrapper">MAY 2021</div>

        <div className="div">TODAY</div>

        <div className="arrow-left-wrapper">
          <img className="img" alt="Arrow left" src="/img/arrow-left-2.svg" />
        </div>

        <div className="img-wrapper">
          <img
            className="arrow-left-2"
            alt="Arrow left"
            src="/img/arrow-left-2-1.svg"
          />
        </div>
      </div>

      <div className="overlap-group">
        <div className="rectangle" />

        <div className="group-2">
          <Date
            className={dateDateClassName}
            divClassName="component"
            text="25"
          />
          <Date
            className={dateDateClassNameOverride}
            divClassName="date-instance"
            text="02"
          />
          <Date
            className={dateDivClassName}
            divClassName="date-instance"
            text="09"
          />
          <Date
            className={dateDivClassNameOverride}
            divClassName="design-component-instance-node"
            text="16"
          />
          <Date
            className={dateDateClassName1}
            divClassName="component-2"
            text="23"
          />
          <Date
            className={dateDateClassName2}
            divClassName="date-instance"
            text="30"
          />
          <Date
            className={dateDateClassName3}
            divClassName="component-3"
            text="Su"
          />
          <Date
            className={dateDateClassName4}
            divClassName="component-4"
            text="Mo"
          />
          <Date
            className={dateDateClassName5}
            divClassName="component-3"
            text="Tu"
          />
          <Date
            className={dateDateClassName6}
            divClassName="component-5"
            text="We"
          />
          <Date
            className={dateDateClassName7}
            divClassName="component-3"
            text="Th"
          />
          <Date
            className={dateDateClassName8}
            divClassName="component-6"
            text="Fr"
          />
          <Date
            className={dateDateClassName9}
            divClassName="component-3"
            text="Sa"
          />
          <Date
            className={dateDateClassName10}
            divClassName="component"
            text="26"
          />
          <Date
            className={dateDateClassName11}
            divClassName="date-instance"
            text="03"
          />
          <Date
            className={dateDateClassName12}
            divClassName="design-component-instance-node"
            text="10"
          />
          <Date className="component-7" divClassName="component-8" text="17" />
          <Date
            className={dateDateClassName13}
            divClassName="component-2"
            text="24"
          />
          <Date
            className="component-9"
            divClassName="design-component-instance-node"
            text="31"
          />
          <Date
            className={dateDateClassName14}
            divClassName="component"
            text="27"
          />
          <Date
            className={dateDateClassName15}
            divClassName="date-instance"
            text="04"
          />
          <Date
            className={dateDateClassName16}
            divClassName="component-10"
            text="11"
          />
          <Date
            className={dateDateClassName17}
            divClassName="design-component-instance-node"
            text="18"
          />
          <Date
            className={dateDateClassName18}
            divClassName="component-2"
            text="25"
          />
          <Date
            className={dateDateClassName19}
            divClassName="component-11"
            text="01"
          />
          <Date
            className={dateDateClassName20}
            divClassName="component"
            text="28"
          />
          <Date
            className={dateDateClassName21}
            divClassName="date-instance"
            text="05"
          />
          <Date
            className={dateDateClassName22}
            divClassName="design-component-instance-node"
            text="12"
          />
          <Date
            className={dateDateClassName23}
            divClassName="design-component-instance-node"
            text="19"
          />
          <Date
            className={dateDateClassName24}
            divClassName="component-2"
            text="26"
          />
          <Date
            className={dateDateClassName25}
            divClassName="component-12"
            text="02"
          />
          <Date
            className={dateDateClassName26}
            divClassName="component"
            text="29"
          />
          <Date
            className={dateDateClassName27}
            divClassName="date-instance"
            text="06"
          />
          <Date
            className={dateDateClassName28}
            divClassName="design-component-instance-node"
            text="13"
          />
          <Date
            className={dateDateClassName29}
            divClassName="date-instance"
            text="20"
          />
          <Date
            className={dateDateClassName30}
            divClassName="component-2"
            text="27"
          />
          <Date
            className={dateDateClassName31}
            divClassName="component-12"
            text="03"
          />
          <Date
            className={dateDateClassName32}
            divClassName="component-12"
            text="30"
          />
          <Date
            className={dateDateClassName33}
            divClassName="date-instance"
            text="07"
          />
          <Date
            className={dateDateClassName34}
            divClassName="design-component-instance-node"
            text="14"
          />
          <Date
            className={dateDateClassName35}
            divClassName="design-component-instance-node"
            text="21"
          />
          <Date
            className={dateDateClassName36}
            divClassName="component-2"
            text="28"
          />
          <Date
            className={dateDateClassName37}
            divClassName="component-12"
            text="04"
          />
          <Date
            className={dateDateClassName38}
            divClassName="design-component-instance-node"
            text="01"
          />
          <Date
            className={dateDateClassName39}
            divClassName="date-instance"
            text="08"
          />
          <Date
            className={dateDateClassName40}
            divClassName="design-component-instance-node"
            text="15"
          />
          <Date className="component-13" divClassName="component-2" text="22" />
          <Date
            className={dateDateClassName41}
            divClassName="component-2"
            text="29"
          />
          <Date
            className={dateDateClassName42}
            divClassName="component-12"
            text="05"
          />
        </div>
      </div>
    </StyledCalDark>
  );
};
