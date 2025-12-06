# Calendar

**Import:** `import { Calendar, CalendarEvent, calendarEn, calendarFr } from 'asterui'`

A month and week calendar component with event support. Wraps [@vinctus/calendar](https://github.com/vinctustech/calendar) with automatic DaisyUI theme integration.

## Examples

### Month Calendar

Full month view with events.

```tsx
import React, { useState } from 'react'
import { Calendar, CalendarEvent, notification } from 'asterui'

const App: React.FC = () => {
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

export default App
```

### Week Calendar

Weekly view with time slots.

```tsx
import React, { useState } from 'react'
import { Calendar, CalendarEvent, notification } from 'asterui'

const App: React.FC = () => {
  const [date, setDate] = useState(new Date())

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
        onSelectSlot={(slot) => notification.info({ message: 'Slot selected', description: slot.start.toLocaleTimeString() })}
      />
    </div>
  )
}

export default App
```

### Multiple Events

Calendar with multiple events and overflow handling.

```tsx
import React from 'react'
import { Calendar, CalendarEvent, notification } from 'asterui'

const App: React.FC = () => {
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
        onMoreEventsClick={(date, evts) => notification.info({ message: `${evts.length} more events`, description: date.toDateString() })}
      />
    </div>
  )
}

export default App
```

### Minimal (No Header)

Calendar without navigation header for embedding.

```tsx
import React from 'react'
import { Calendar } from 'asterui'

const App: React.FC = () => (
  <div className="h-80">
    <Calendar.Month
      date={new Date()}
      events={[]}
      header={false}
      daySelector={false}
    />
  </div>
)

export default App
```

### Locales

Use built-in or custom locales.

```tsx
import { Calendar, calendarFr } from 'asterui'

<Calendar.Month date={date} events={events} locale={calendarFr} />
```

## API

### Calendar.Month

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `date` | Currently displayed date | `Date` | - |
| `events` | Array of calendar events | `CalendarEvent[]` | `[]` |
| `maxEventsPerDay` | Maximum events shown per day cell | `number` | `3` |
| `onEventClick` | Callback when event is clicked | `(event: CalendarEvent) => void` | - |
| `onDayClick` | Callback when day is clicked | `(date: Date) => void` | - |
| `onMoreEventsClick` | Callback when "+N more" is clicked | `(date: Date, events: CalendarEvent[]) => void` | - |
| `header` | Show month/year header with navigation | `boolean` | `true` |
| `daySelector` | Show day selection highlight | `boolean` | `true` |
| `ellipsis` | Truncate long event titles | `boolean` | `true` |
| `locale` | Locale configuration | `CalendarLocale` | `en` |
| `allowPastInteraction` | Allow clicking on past dates | `boolean` | `true` |
| `className` | Additional CSS classes | `string` | - |

### Calendar.Week

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `date` | Currently displayed date | `Date` | - |
| `events` | Array of calendar events | `CalendarEvent[]` | `[]` |
| `onEventClick` | Callback when event is clicked | `(event: CalendarEvent) => void` | - |
| `onDayClick` | Callback when day header is clicked | `(date: Date) => void` | - |
| `onSelectSlot` | Callback when time slot is clicked | `(slotInfo: { start: Date; end: Date }) => void` | - |
| `locale` | Locale configuration | `CalendarLocale` | `en` |
| `allowPastInteraction` | Allow clicking on past slots | `boolean` | `true` |
| `className` | Additional CSS classes | `string` | - |

### CalendarEvent

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `date` | Event date and time | `Date` | - |
| `title` | Event title | `string` | - |
| `color` | Event dot color (CSS color) | `string` | - |
| `strikethrough` | Show event with strikethrough | `boolean` | `false` |
| `style` | Additional inline styles | `CSSProperties` | - |

## Theming

The Calendar component automatically adapts to your DaisyUI theme. Background colors, text colors, borders, and accent colors are all mapped from DaisyUI's CSS variables.

Event colors are specified per-event via the `color` property and can be any valid CSS color value.
