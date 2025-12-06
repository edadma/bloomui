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

const shapeClasses: Record<MaskShape, string> = {
  squircle: 'mask-squircle',
  heart: 'mask-heart',
  hexagon: 'mask-hexagon',
  'hexagon-2': 'mask-hexagon-2',
  decagon: 'mask-decagon',
  pentagon: 'mask-pentagon',
  diamond: 'mask-diamond',
  square: 'mask-square',
  circle: 'mask-circle',
  star: 'mask-star',
  'star-2': 'mask-star-2',
  triangle: 'mask-triangle',
  'triangle-2': 'mask-triangle-2',
  'triangle-3': 'mask-triangle-3',
  'triangle-4': 'mask-triangle-4',
}

const halfClasses: Record<MaskHalf, string> = {
  'half-1': 'mask-half-1',
  'half-2': 'mask-half-2',
}

export const Mask = forwardRef<HTMLDivElement, MaskProps>(
  ({ shape, half, children, className = '', ...props }, ref) => {
    const classes = [
      'mask',
      shapeClasses[shape],
      half ? halfClasses[half] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  }
)

Mask.displayName = 'Mask'
