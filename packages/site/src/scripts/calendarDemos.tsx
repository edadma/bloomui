import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import { Calendar, notification } from 'asterui'
import type { CalendarEvent } from 'asterui'

const MonthBasicDemo: React.FC = () => {
  const [date, setDate] = useState(new Date())

  const events: CalendarEvent[] = [
    { date: new Date(), title: 'Team Meeting', color: '#3b82f6' },
    { date: new Date(), title: 'Lunch with Client', color: '#22c55e' },
    { date: new Date(Date.now() + 86400000), title: 'Project Deadline', color: '#ef4444' },
  ]

  return (
    <div className="h-96">
      <Calendar.Month
        date={date}
        events={events}
        onDayClick={(d) => setDate(d)}
        onEventClick={(e) => notification.info({ message: 'Event clicked', description: e.title })}
      />
    </div>
  )
}

const WeekBasicDemo: React.FC = () => {
  const [date, setDate] = useState(new Date())

  // Create event for 10 AM today
  const today10am = new Date()
  today10am.setHours(10, 0, 0, 0)

  const events: CalendarEvent[] = [
    { date: today10am, title: 'Daily Standup', color: '#8b5cf6' },
  ]

  return (
    <div className="h-[600px]">
      <Calendar.Week
        date={date}
        events={events}
        onDayClick={(d) => setDate(d)}
        onSelectSlot={(slot) => notification.info({ message: 'Slot selected', description: `${slot.start.toLocaleTimeString()} - ${slot.end.toLocaleTimeString()}` })}
      />
    </div>
  )
}

const EventsDemo: React.FC = () => {
  const today = new Date()

  const events: CalendarEvent[] = [
    { date: today, title: 'Morning Yoga', color: '#22c55e' },
    { date: today, title: 'Team Standup', color: '#3b82f6' },
    { date: today, title: 'Client Call', color: '#f59e0b' },
    { date: today, title: 'Code Review', color: '#8b5cf6' },
    { date: today, title: 'Lunch Break', color: '#ec4899' },
  ]

  return (
    <div className="h-96">
      <Calendar.Month
        date={today}
        events={events}
        maxEventsPerDay={3}
        onMoreEventsClick={(d, evts) => notification.info({ message: `${evts.length} more events`, description: d.toDateString() })}
      />
    </div>
  )
}

const NoHeaderDemo: React.FC = () => (
  <div className="h-80">
    <Calendar.Month
      date={new Date()}
      events={[]}
      header={false}
      daySelector={false}
    />
  </div>
)

const statefulDemos: Record<string, React.FC> = {
  'month-basic': MonthBasicDemo,
  'week-basic': WeekBasicDemo,
  events: EventsDemo,
  'no-header': NoHeaderDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    const Component = statefulDemos[exampleId]
    root.render(<Component />)
  }
})

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      btn.classList.add('btn-success')
      setTimeout(() => btn.classList.remove('btn-success'), 1000)
    }
  })
})
