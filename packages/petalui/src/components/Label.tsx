import React from 'react'

export interface LabelProps {
  children: React.ReactNode
  className?: string
}

export interface FloatingLabelProps {
  children: React.ReactNode
  label: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

function LabelRoot({ children, className = '' }: LabelProps) {
  return <span className={`label ${className}`}>{children}</span>
}

function FloatingLabel({ children, label, size, className = '' }: FloatingLabelProps) {
  const sizeClasses = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
    xl: 'input-xl',
  }

  const classes = ['floating-label', size && sizeClasses[size], className].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      {children}
      <span>{label}</span>
    </label>
  )
}

export const Label = Object.assign(LabelRoot, {
  Floating: FloatingLabel,
})
