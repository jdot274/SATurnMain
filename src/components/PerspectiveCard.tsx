import { ReactNode } from 'react'

interface PerspectiveCardProps {
  children: ReactNode
  className?: string
}

function PerspectiveCard({ children, className = '' }: PerspectiveCardProps) {
  return (
    <div 
      className={`perspective-1000 transform-style-3d backface-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export default PerspectiveCard 