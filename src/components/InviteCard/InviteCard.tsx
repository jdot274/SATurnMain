import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import styled from 'styled-components';
import { CardBackground } from './CardBackground';

const StyledInviteCard = styled.div`
  background-image: url(../../../static/img/rectangle.svg);
  background-size: 100% 100%;
  height: 582px;
  position: relative;
  width: 456px;
  overflow: hidden;
  border-radius: 24px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);

  .auto-layout {
    align-items: center;
    display: inline-flex;
    gap: 16px;
    left: 24px;
    position: absolute;
    top: 542px;
  }

  .text-wrapper {
    color: #ffffff;
    font-family: "Aeonik-Light", Helvetica;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 15.6px;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  .social-icons {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 16px;
    position: relative;
  }

  .icon {
    height: 16px !important;
    width: 16px !important;
    color: white;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  .description {
    color: #ffffff;
    font-family: "Aeonik-Light", Helvetica;
    font-size: 18px;
    font-weight: 300;
    left: 24px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 238px;
    width: 328px;
  }

  .invite-text {
    color: #ffffff;
    font-family: "Aeonik-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 24px;
    letter-spacing: 0.48px;
    line-height: 32px;
    position: absolute;
    top: 190px;
    white-space: nowrap;
  }

  .we-are {
    color: #ffffff;
    font-family: "Aeonik-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 24px;
    letter-spacing: 0;
    line-height: 19.2px;
    position: absolute;
    top: 163px;
    white-space: nowrap;
  }

  .divider {
    background-color: #ffffff33;
    border-radius: 8px;
    height: 2px;
    left: 24px;
    position: absolute;
    top: 138px;
    width: 98px;
  }

  .header {
    align-items: flex-start;
    background-color: #ffffff33;
    border-radius: 16px;
    display: inline-flex;
    gap: 10px;
    left: 24px;
    padding: 16px;
    position: absolute;
    top: 24px;
  }

  .header-text {
    color: #ffffff;
    font-family: "Aeonik-Light", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 28.8px;
    margin-top: -1.00px;
    position: relative;
    width: fit-content;
  }

  .dots {
    align-items: flex-start;
    display: inline-flex;
    gap: 8px;
    left: 24px;
    position: absolute;
    top: 307px;
  }

  .dot {
    border: 1px solid;
    border-color: #ffffff;
    border-radius: 4px;
    height: 8px;
    opacity: 0.5;
    position: relative;
    width: 8px;

    &.active {
      background-color: #ffffff;
      opacity: 1;
    }
  }
`;

export const InviteCard: React.FC = () => {
  return (
    <StyledInviteCard>
      <CardBackground />
      <div className="auto-layout">
        <div className="text-wrapper">Invite your friends</div>

        <div className="social-icons">
          <Facebook className="icon" />
          <Twitter className="icon" />
          <Linkedin className="icon" />
          <Instagram className="icon" />
        </div>
      </div>

      <p className="description">
        10 Million+ people have joined our net work. We invite you to join the tribe.
      </p>

      <div className="invite-text">Invite only right now.</div>

      <div className="we-are">We are</div>

      <div className="divider" />

      <div className="header">
        <p className="header-text">
          Turn your ideas <br />
          into Reality
        </p>
      </div>

      <div className="dots">
        <div className="dot" />
        <div className="dot active" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </StyledInviteCard>
  );
};