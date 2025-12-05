import React, { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'

export type TourPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'center'

export interface TourStepProps {
  /** Target element ref or function returning element */
  target?: React.RefObject<HTMLElement | null> | (() => HTMLElement | null) | null
  /** Step title */
  title: React.ReactNode
  /** Step description */
  description?: React.ReactNode
  /** Cover image or content above title */
  cover?: React.ReactNode
  /** Placement of popover relative to target */
  placement?: TourPlacement
  /** Custom class for this step's popover */
  className?: string
  /** Called when this step becomes active */
  onOpen?: () => void
  /** Called when leaving this step */
  onClose?: () => void
}

export interface TourProps {
  /** Whether tour is visible */
  open?: boolean
  /** Callback when tour closes */
  onClose?: () => void
  /** Callback when tour finishes (last step completed) */
  onFinish?: () => void
  /** Tour steps */
  steps: TourStepProps[]
  /** Current step (controlled) */
  current?: number
  /** Callback when step changes */
  onChange?: (current: number) => void
  /** Show mask overlay */
  mask?: boolean
  /** Type affects styling */
  type?: 'default' | 'primary'
  /** Gap between highlight and target [radius, offset] or single number */
  gap?: number | [number, number]
  /** Text for prev button */
  prevButtonText?: React.ReactNode
  /** Text for next button */
  nextButtonText?: React.ReactNode
  /** Text for finish button */
  finishButtonText?: React.ReactNode
  /** Text for skip button */
  skipButtonText?: React.ReactNode
  /** Show skip button */
  showSkip?: boolean
  /** Show step indicators */
  showIndicators?: boolean
  /** Close on mask click */
  closeOnMaskClick?: boolean
  /** Close on escape key */
  closeOnEscape?: boolean
  /** Scroll target into view */
  scrollIntoView?: boolean
  /** Z-index for tour overlay */
  zIndex?: number
}

const getTargetElement = (
  target: TourStepProps['target']
): HTMLElement | null => {
  if (!target) return null
  if (typeof target === 'function') return target()
  return target.current
}

const getPopoverPosition = (
  targetRect: DOMRect | null,
  placement: TourPlacement,
  popoverRect: DOMRect,
  gap: number
): { top: number; left: number } => {
  if (!targetRect || placement === 'center') {
    return {
      top: window.innerHeight / 2 - popoverRect.height / 2,
      left: window.innerWidth / 2 - popoverRect.width / 2,
    }
  }

  const scrollY = window.scrollY
  const scrollX = window.scrollX

  const positions: Record<TourPlacement, { top: number; left: number }> = {
    top: {
      top: targetRect.top + scrollY - popoverRect.height - gap,
      left: targetRect.left + scrollX + targetRect.width / 2 - popoverRect.width / 2,
    },
    topLeft: {
      top: targetRect.top + scrollY - popoverRect.height - gap,
      left: targetRect.left + scrollX,
    },
    topRight: {
      top: targetRect.top + scrollY - popoverRect.height - gap,
      left: targetRect.right + scrollX - popoverRect.width,
    },
    bottom: {
      top: targetRect.bottom + scrollY + gap,
      left: targetRect.left + scrollX + targetRect.width / 2 - popoverRect.width / 2,
    },
    bottomLeft: {
      top: targetRect.bottom + scrollY + gap,
      left: targetRect.left + scrollX,
    },
    bottomRight: {
      top: targetRect.bottom + scrollY + gap,
      left: targetRect.right + scrollX - popoverRect.width,
    },
    left: {
      top: targetRect.top + scrollY + targetRect.height / 2 - popoverRect.height / 2,
      left: targetRect.left + scrollX - popoverRect.width - gap,
    },
    leftTop: {
      top: targetRect.top + scrollY,
      left: targetRect.left + scrollX - popoverRect.width - gap,
    },
    leftBottom: {
      top: targetRect.bottom + scrollY - popoverRect.height,
      left: targetRect.left + scrollX - popoverRect.width - gap,
    },
    right: {
      top: targetRect.top + scrollY + targetRect.height / 2 - popoverRect.height / 2,
      left: targetRect.right + scrollX + gap,
    },
    rightTop: {
      top: targetRect.top + scrollY,
      left: targetRect.right + scrollX + gap,
    },
    rightBottom: {
      top: targetRect.bottom + scrollY - popoverRect.height,
      left: targetRect.right + scrollX + gap,
    },
    center: {
      top: window.innerHeight / 2 - popoverRect.height / 2,
      left: window.innerWidth / 2 - popoverRect.width / 2,
    },
  }

  return positions[placement]
}

export const Tour: React.FC<TourProps> = ({
  open = false,
  onClose,
  onFinish,
  steps,
  current: controlledCurrent,
  onChange,
  mask = true,
  type = 'default',
  gap = 8,
  prevButtonText = 'Previous',
  nextButtonText = 'Next',
  finishButtonText = 'Finish',
  skipButtonText = 'Skip',
  showSkip = true,
  showIndicators = true,
  closeOnMaskClick = true,
  closeOnEscape = true,
  scrollIntoView = true,
  zIndex = 1000,
}) => {
  const [internalCurrent, setInternalCurrent] = useState(0)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 })
  const popoverRef = useRef<HTMLDivElement>(null)

  const isControlled = controlledCurrent !== undefined
  const currentStep = isControlled ? controlledCurrent : internalCurrent
  const step = steps[currentStep]

  const gapRadius = Array.isArray(gap) ? gap[0] : gap
  const gapOffset = Array.isArray(gap) ? gap[1] : gap

  const updatePosition = useCallback(() => {
    if (!step) return

    const target = getTargetElement(step.target)
    const rect = target?.getBoundingClientRect() ?? null
    setTargetRect(rect)

    if (popoverRef.current) {
      const popoverRect = popoverRef.current.getBoundingClientRect()
      const placement = step.placement ?? 'bottom'
      const pos = getPopoverPosition(rect, placement, popoverRect, gapOffset + gapRadius)
      setPopoverPosition(pos)
    }
  }, [step, gapOffset, gapRadius])

  const goToStep = useCallback(
    (stepIndex: number) => {
      if (stepIndex < 0 || stepIndex >= steps.length) return

      // Call onClose for current step
      steps[currentStep]?.onClose?.()

      if (!isControlled) {
        setInternalCurrent(stepIndex)
      }
      onChange?.(stepIndex)

      // Call onOpen for new step
      steps[stepIndex]?.onOpen?.()
    },
    [steps, currentStep, isControlled, onChange]
  )

  const handlePrev = useCallback(() => {
    goToStep(currentStep - 1)
  }, [currentStep, goToStep])

  const handleNext = useCallback(() => {
    if (currentStep === steps.length - 1) {
      onFinish?.()
      onClose?.()
    } else {
      goToStep(currentStep + 1)
    }
  }, [currentStep, steps.length, goToStep, onFinish, onClose])

  const handleSkip = useCallback(() => {
    onClose?.()
  }, [onClose])

  const handleMaskClick = useCallback(() => {
    if (closeOnMaskClick) {
      onClose?.()
    }
  }, [closeOnMaskClick, onClose])

  // Reset to first step when opening
  useEffect(() => {
    if (open && !isControlled) {
      setInternalCurrent(0)
    }
  }, [open, isControlled])

  // Update position on step change or open
  useEffect(() => {
    if (!open) return

    updatePosition()

    // Scroll target into view
    if (scrollIntoView && step?.target) {
      const target = getTargetElement(step.target)
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    // Call onOpen for first step
    if (currentStep === 0) {
      step?.onOpen?.()
    }
  }, [open, currentStep, step, scrollIntoView, updatePosition])

  // Update position on resize/scroll
  useEffect(() => {
    if (!open) return

    const handleUpdate = () => updatePosition()
    window.addEventListener('resize', handleUpdate)
    window.addEventListener('scroll', handleUpdate, true)

    // Initial position after popover renders
    requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('resize', handleUpdate)
      window.removeEventListener('scroll', handleUpdate, true)
    }
  }, [open, updatePosition])

  // Keyboard handling
  useEffect(() => {
    if (!open || !closeOnEscape) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, closeOnEscape, onClose, handleNext, handlePrev])

  if (!open || !step) return null

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1

  const content = (
    <div
      className="fixed inset-0"
      style={{ zIndex }}
      data-testid="tour"
      role="dialog"
      aria-modal="true"
    >
      {/* Mask overlay with spotlight cutout */}
      {mask && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-auto"
          onClick={handleMaskClick}
          style={{ zIndex }}
        >
          <defs>
            <mask id="tour-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {targetRect && (
                <rect
                  x={targetRect.left - gapRadius}
                  y={targetRect.top - gapRadius}
                  width={targetRect.width + gapRadius * 2}
                  height={targetRect.height + gapRadius * 2}
                  rx={gapRadius}
                  fill="black"
                />
              )}
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="rgba(0, 0, 0, 0.5)"
            mask="url(#tour-mask)"
          />
        </svg>
      )}

      {/* Popover */}
      <div
        ref={popoverRef}
        className={`absolute bg-base-100 rounded-lg shadow-xl border border-base-300 max-w-sm ${step.className ?? ''}`}
        style={{
          top: popoverPosition.top,
          left: popoverPosition.left,
          zIndex: zIndex + 1,
        }}
        onClick={(e) => e.stopPropagation()}
        data-testid="tour-popover"
      >
        {/* Cover */}
        {step.cover && (
          <div className="rounded-t-lg overflow-hidden">{step.cover}</div>
        )}

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
          {step.description && (
            <p className="text-base-content/70 text-sm mb-4">{step.description}</p>
          )}

          {/* Indicators */}
          {showIndicators && steps.length > 1 && (
            <div className="flex gap-1 mb-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep
                      ? 'bg-primary'
                      : 'bg-base-300 hover:bg-base-content/30'
                  }`}
                  onClick={() => goToStep(index)}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between gap-2">
            <div>
              {showSkip && !isLastStep && (
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={handleSkip}
                  data-testid="tour-skip"
                >
                  {skipButtonText}
                </button>
              )}
            </div>
            <div className="flex gap-2">
              {!isFirstStep && (
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={handlePrev}
                  data-testid="tour-prev"
                >
                  {prevButtonText}
                </button>
              )}
              <button
                className={`btn btn-sm ${type === 'primary' ? 'btn-primary' : ''}`}
                onClick={handleNext}
                data-testid="tour-next"
              >
                {isLastStep ? finishButtonText : nextButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
