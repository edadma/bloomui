import React, { forwardRef } from 'react'

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  className?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ size, color, className = '', ...props }, ref) => {
    const sizeClasses = {
      xs: 'radio-xs',
      sm: 'radio-sm',
      md: 'radio-md',
      lg: 'radio-lg',
      xl: 'radio-xl',
    }

    const colorClasses = {
      neutral: 'radio-neutral',
      primary: 'radio-primary',
      secondary: 'radio-secondary',
      accent: 'radio-accent',
      info: 'radio-info',
      success: 'radio-success',
      warning: 'radio-warning',
      error: 'radio-error',
    }

    const radioClasses = [
      'radio',
      size && sizeClasses[size],
      color && colorClasses[color],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return <input ref={ref} type="radio" className={radioClasses} {...props} />
  }
)

Radio.displayName = 'Radio'
