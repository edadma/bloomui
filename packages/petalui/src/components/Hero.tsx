import React from 'react'

export interface HeroProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface HeroContentProps {
  children: React.ReactNode
  className?: string
}

export interface HeroOverlayProps {
  className?: string
}

function HeroRoot({ children, className = '', style }: HeroProps) {
  const classes = ['hero', className].filter(Boolean).join(' ')
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

function HeroContent({ children, className = '' }: HeroContentProps) {
  return <div className={`hero-content ${className}`}>{children}</div>
}

function HeroOverlay({ className = '' }: HeroOverlayProps) {
  return <div className={`hero-overlay ${className}`} />
}

export const Hero = Object.assign(HeroRoot, {
  Content: HeroContent,
  Overlay: HeroOverlay,
})
