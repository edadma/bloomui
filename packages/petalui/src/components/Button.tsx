import React from 'react'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const typeClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    link: 'btn-link',
  }

  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }

  const typeClass = typeClasses[type]
  const sizeClass = sizeClasses[size]

  return (
    <button
      className={`btn ${typeClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
