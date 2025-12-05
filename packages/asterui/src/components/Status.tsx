import React from 'react'

export type StatusType = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
export type StatusSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface StatusProps {
  /** Status color type */
  type?: StatusType
  /** Status size */
  size?: StatusSize
  /** Ping animation effect */
  ping?: boolean
  /** Bounce animation effect */
  bounce?: boolean
  /** Accessibility label */
  label?: string
  /** Additional CSS classes */
  className?: string
}

const typeClasses: Record<StatusType, string> = {
  neutral: 'status-neutral',
  primary: 'status-primary',
  secondary: 'status-secondary',
  accent: 'status-accent',
  info: 'status-info',
  success: 'status-success',
  warning: 'status-warning',
  error: 'status-error',
}

const sizeClasses: Record<StatusSize, string> = {
  xs: 'status-xs',
  sm: 'status-sm',
  md: 'status-md',
  lg: 'status-lg',
  xl: 'status-xl',
}

export const Status: React.FC<StatusProps> = ({
  type = 'neutral',
  size = 'md',
  ping = false,
  bounce = false,
  label,
  className = '',
}) => {
  const baseClasses = `status ${typeClasses[type]} ${sizeClasses[size]} ${bounce ? 'animate-bounce' : ''} ${className}`.trim()

  if (ping) {
    return (
      <div className="inline-grid *:[grid-area:1/1]" aria-label={label}>
        <div className={`${baseClasses} animate-ping`} />
        <div className={baseClasses} />
      </div>
    )
  }

  return <div className={baseClasses} aria-label={label} />
}
