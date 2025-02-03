import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { 
  PopupOverlay,
  PopupContainer,
  PopupContent,
  CloseButton,
  ImageContainer,
  CardImage,
  Caption,
  InteractionArea,
  ControlButton
} from './styles';
import { CardBgPopupProps } from './types';

const CardBgPopup: React.FC<CardBgPopupProps> = ({ 
  onClose,
  isOpen = true,
  imagePath = "/src/components/figmacomponentgreen/static/img/Design (3).svg",
  allowRotate = true,
  allowZoom = true,
  initialScale = 1
}) => {
  const [scale, setScale] = useState(initialScale);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
  const handleRotateLeft = () => setRotation(prev => prev - 90);
  const handleRotateRight = () => setRotation(prev => prev + 90);
  const handleReset = () => {
    setScale(initialScale);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  if (!isOpen) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContainer
        onClick={e => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <PopupContent>
          <CloseButton onClick={onClose}>
            <X />
          </CloseButton>
          
          <ImageContainer>
            <CardImage
              src={imagePath}
              alt="Card Background"
              className="mb-4"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) 
                           scale(${scale}) 
                           rotate(${rotation}deg)`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onMouseDown={handleMouseDown}
              draggable={false}
            />
            
            <CardImage
              src="/src/components/figmacomponentgreen/static/img/Design (3).svg"
              alt="SVG Design"
              className="mt-4"
              style={{
                transform: 'none',
                cursor: 'default'
              }}
            />
          </ImageContainer>

          <InteractionArea>
            {allowZoom && (
              <>
                <ControlButton onClick={handleZoomIn}>Zoom In</ControlButton>
                <ControlButton onClick={handleZoomOut}>Zoom Out</ControlButton>
              </>
            )}
            
            {allowRotate && (
              <>
                <ControlButton onClick={handleRotateLeft}>Rotate Left</ControlButton>
                <ControlButton onClick={handleRotateRight}>Rotate Right</ControlButton>
              </>
            )}
            
            <ControlButton onClick={handleReset}>Reset</ControlButton>
          </InteractionArea>

          <Caption>
            Click and drag to move • Use controls to zoom and rotate
          </Caption>
        </PopupContent>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default CardBgPopup;