export interface CardBgPopupProps {
  onClose?: () => void;
  isOpen?: boolean;
  imagePath?: string;
  allowRotate?: boolean;
  allowZoom?: boolean;
  initialScale?: number;
}