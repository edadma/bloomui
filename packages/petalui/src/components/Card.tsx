import React from 'react'

export interface CardProps {
  children: React.ReactNode
  title?: React.ReactNode
  cover?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  bordered?: boolean
  side?: boolean
  imageFull?: boolean
  actionsJustify?: 'start' | 'center' | 'end'
}

export function Card({
  children,
  title,
  cover,
  actions,
  className = '',
  style,
  size,
  bordered = false,
  side = false,
  imageFull = false,
  actionsJustify = 'end',
}: CardProps) {
  const sizeClasses: Record<string, string> = {
    xs: 'card-xs',
    sm: 'card-sm',
    md: 'card-md',
    lg: 'card-lg',
    xl: 'card-xl',
  }

  const classes = [
    'card',
    'bg-base-100',
    size && sizeClasses[size],
    bordered && 'border border-base-content/10',
    side && 'card-side',
    imageFull && 'image-full',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const justifyClasses: Record<string, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }

  return (
    <div className={classes} style={style}>
      {cover && <figure>{cover}</figure>}
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
        {actions && <div className={`card-actions ${justifyClasses[actionsJustify]}`}>{actions}</div>}
      </div>
    </div>
  )
}
