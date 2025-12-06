import React, { forwardRef } from 'react'
import {
  MonthCalendar as BaseMonthCalendar,
  WeekCalendar as BaseWeekCalendar,
  en,
  fr,
} from '@vinctus/calendar'
import type {
  MonthCalendarProps as BaseMonthCalendarProps,
  WeekCalendarProps as BaseWeekCalendarProps,
  CalendarEvent,
  CalendarLocale,
} from '@vinctus/calendar'
import '@vinctus/calendar/dist/index.css'

// Re-export types and locales
export type { CalendarEvent, CalendarLocale }
export { en, fr }

export interface MonthCalendarProps<T extends CalendarEvent = CalendarEvent>
  extends Omit<BaseMonthCalendarProps<T>, 'theme'> {
  className?: string
}

export interface WeekCalendarProps<T extends CalendarEvent = CalendarEvent>
  extends Omit<BaseWeekCalendarProps<T>, 'theme'> {
  className?: string
}

interface CalendarWrapperProps {
  children: React.ReactNode
  className?: string
}

const CalendarWrapper = forwardRef<HTMLDivElement, CalendarWrapperProps>(
  ({ children, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`calendar-daisyui ${className}`}
        data-testid="calendar"
      >
        {children}
      </div>
    )
  }
)
CalendarWrapper.displayName = 'CalendarWrapper'

const MonthCalendar = <T extends CalendarEvent = CalendarEvent>({
  className = '',
  ...props
}: MonthCalendarProps<T>) => {
  return (
    <CalendarWrapper className={className}>
      <BaseMonthCalendar {...props} />
    </CalendarWrapper>
  )
}
MonthCalendar.displayName = 'Calendar.Month'

const WeekCalendar = <T extends CalendarEvent = CalendarEvent>({
  className = '',
  ...props
}: WeekCalendarProps<T>) => {
  return (
    <CalendarWrapper className={className}>
      <BaseWeekCalendar {...props} />
    </CalendarWrapper>
  )
}
WeekCalendar.displayName = 'Calendar.Week'

interface CalendarComponent {
  Month: typeof MonthCalendar
  Week: typeof WeekCalendar
}

export const Calendar: CalendarComponent = {
  Month: MonthCalendar,
  Week: WeekCalendar,
}

export default Calendar
