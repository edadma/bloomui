import React, { useState, useCallback } from 'react'

export type SegmentedValue = string | number

export interface SegmentedOption {
  /** Display label */
  label: React.ReactNode
  /** Option value */
  value: SegmentedValue
  /** Disable this option */
  disabled?: boolean
  /** Icon to display before label */
  icon?: React.ReactNode
}

export interface SegmentedProps {
  /** Options to display - strings or option objects */
  options: (SegmentedValue | SegmentedOption)[]
  /** Currently selected value (controlled) */
  value?: SegmentedValue
  /** Default selected value (uncontrolled) */
  defaultValue?: SegmentedValue
  /** Callback when selection changes */
  onChange?: (value: SegmentedValue) => void
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Take full width of container */
  block?: boolean
  /** Disable all options */
  disabled?: boolean
  /** Additional CSS class */
  className?: string
}

const normalizeOption = (opt: SegmentedValue | SegmentedOption): SegmentedOption => {
  if (typeof opt === 'object' && opt !== null && 'value' in opt) {
    return opt
  }
  return { label: String(opt), value: opt }
}

const sizeClasses = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
}

export const Segmented: React.FC<SegmentedProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  size = 'md',
  block = false,
  disabled = false,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState<SegmentedValue | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleSelect = useCallback(
    (optionValue: SegmentedValue) => {
      if (!isControlled) {
        setInternalValue(optionValue)
      }
      onChange?.(optionValue)
    },
    [isControlled, onChange]
  )

  const normalizedOptions = options.map(normalizeOption)

  const containerClasses = ['join', block ? 'w-full' : '', className].filter(Boolean).join(' ')

  return (
    <div className={containerClasses} role="group" data-testid="segmented">
      {normalizedOptions.map((option, index) => {
        const isSelected = currentValue === option.value
        const isDisabled = disabled || option.disabled

        const buttonClasses = [
          'join-item',
          'btn',
          sizeClasses[size],
          isSelected ? 'btn-active' : '',
          block ? 'flex-1' : '',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <button
            key={option.value}
            type="button"
            className={buttonClasses}
            disabled={isDisabled}
            onClick={() => handleSelect(option.value)}
            aria-pressed={isSelected}
            data-testid={`segmented-option-${index}`}
          >
            {option.icon && <span className="mr-1">{option.icon}</span>}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
