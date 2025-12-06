import React, { forwardRef } from 'react'

export type MaskShape =
  | 'squircle'
  | 'heart'
  | 'hexagon'
  | 'hexagon-2'
  | 'decagon'
  | 'pentagon'
  | 'diamond'
  | 'square'
  | 'circle'
  | 'star'
  | 'star-2'
  | 'triangle'
  | 'triangle-2'
  | 'triangle-3'
  | 'triangle-4'

export type MaskHalf = 'half-1' | 'half-2'

export interface MaskProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape of the mask */
  shape: MaskShape
  /** Show only half of the mask */
  half?: MaskHalf
  /** Content to mask (typically an image) */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
}

export const Mask = forwardRef<HTMLDivElement, MaskProps>(
  ({ shape, half, children, className = '', ...props }, ref) => {
    const shapeClass = `mask-${shape}`
    const halfClass = half ? `mask-${half}` : ''

    const classes = ['mask', shapeClass, halfClass, className].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  }
)

Mask.displayName = 'Mask'
