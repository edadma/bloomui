export interface ProgressProps {
  value?: number
  max?: number
  type?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  className?: string
}

export function Progress({ value, max = 100, type, className = '' }: ProgressProps) {
  const classes = [
    'progress',
    type && `progress-${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <progress className={classes} value={value} max={max} />
}
