import React from 'react'

export interface FooterProps {
  children: React.ReactNode
  className?: string
  center?: boolean
  horizontal?: boolean
  vertical?: boolean
}

export interface FooterTitleProps {
  children: React.ReactNode
  className?: string
}

function FooterRoot({ children, className = '', center = false, horizontal = false, vertical = false }: FooterProps) {
  const classes = [
    'footer',
    center && 'footer-center',
    horizontal && 'footer-horizontal',
    vertical && 'footer-vertical',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <footer className={classes}>{children}</footer>
}

function FooterTitle({ children, className = '' }: FooterTitleProps) {
  return <h6 className={`footer-title ${className}`}>{children}</h6>
}

export const Footer = Object.assign(FooterRoot, {
  Title: FooterTitle,
})
