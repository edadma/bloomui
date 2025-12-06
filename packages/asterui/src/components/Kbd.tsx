import React from 'react'

export type KbdSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /** Size of the kbd */
  size?: KbdSize
  /** Key content */
  children?: React.ReactNode
}

const sizeClasses: Record<KbdSize, string> = {
  xs: 'kbd-xs',
  sm: 'kbd-sm',
  md: 'kbd-md',
  lg: 'kbd-lg',
  xl: 'kbd-xl',
}

export const Kbd: React.FC<KbdProps> = ({
  size,
  children,
  className = '',
  ...rest
}) => {
  const classes = ['kbd', size ? sizeClasses[size] : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <kbd className={classes} {...rest}>
      {children}
    </kbd>
  )
}
