import React from 'react';
import styled from 'styled-components';
import { Play } from 'lucide-react';

const Container = styled.div`
  position: relative;
  width: 800px;
  padding: 40px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 4px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.25);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    pointer-events: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const CenterIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4));
  }
  
  svg {
    width: 32px;
    height: 32px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const FormatGroup = styled.div<{ side: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  ${props => props.side === 'left' ? 'margin-right: 40px;' : 'margin-left: 40px;'}
`;

const FormatItem = styled.div`
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3));
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

const VideoFormatDisplay: React.FC = () => {
  const leftFormats = ['MP4', 'MOV', 'MKV', 'HEVC', 'HLS'];
  const rightFormats = ['AV1', 'AVI', 'FLV', 'H.264', 'H.265'];

  return (
    <Container>
      <Content>
        <FormatGroup side="left">
          {leftFormats.map(format => (
            <FormatItem key={format}>{format}</FormatItem>
          ))}
        </FormatGroup>

        <CenterIcon>
          <Play />
        </CenterIcon>

        <FormatGroup side="right">
          {rightFormats.map(format => (
            <FormatItem key={format}>{format}</FormatItem>
          ))}
        </FormatGroup>
      </Content>
    </Container>
  );
};

export default VideoFormatDisplay;