# Segmented

Inline toggle for switching between mutually exclusive options.

**Import:** `import { Segmented } from 'asterui'`

## Examples

### Basic Usage

Simple string options.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => {
  const [view, setView] = useState('list')

  return (
    <Segmented
      options={['List', 'Grid', 'Table']}
      value={view}
      onChange={setView}
    />
  )
}

export default App
```

### With Object Options

Options with labels, values, and disabled states.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => {
  const [period, setPeriod] = useState('week')

  return (
    <Segmented
      options={[
        { label: 'Daily', value: 'day' },
        { label: 'Weekly', value: 'week' },
        { label: 'Monthly', value: 'month' },
        { label: 'Yearly', value: 'year', disabled: true },
      ]}
      value={period}
      onChange={setPeriod}
    />
  )
}

export default App
```

### With Icons

Options with icons and labels.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'

const ListIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const GridIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
)

const App: React.FC = () => {
  const [view, setView] = useState('list')

  return (
    <Segmented
      options={[
        { label: 'List', value: 'list', icon: <ListIcon /> },
        { label: 'Grid', value: 'grid', icon: <GridIcon /> },
      ]}
      value={view}
      onChange={setView}
    />
  )
}

export default App
```

### Sizes

Four size options available.

```tsx
import React from 'react'
import { Segmented, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical">
    <Segmented options={['S', 'M', 'L']} size="xs" defaultValue="M" />
    <Segmented options={['S', 'M', 'L']} size="sm" defaultValue="M" />
    <Segmented options={['S', 'M', 'L']} size="md" defaultValue="M" />
    <Segmented options={['S', 'M', 'L']} size="lg" defaultValue="M" />
  </Space>
)

export default App
```

### Block Mode

Full width with equally sized options.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => {
  const [align, setAlign] = useState('center')

  return (
    <div className="w-full max-w-md">
      <Segmented
        options={['Left', 'Center', 'Right']}
        value={align}
        onChange={setAlign}
        block
      />
    </div>
  )
}

export default App
```

### Uncontrolled

Using defaultValue without managing state.

```tsx
import React from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => (
  <Segmented
    options={['Option A', 'Option B', 'Option C']}
    defaultValue="Option A"
    onChange={(value) => console.log('Selected:', value)}
  />
)

export default App
```

## API

### Segmented Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `options` | Options to display | `(string \| number \| SegmentedOption)[]` | `-` |
| `value` | Currently selected value (controlled) | `string \| number` | `-` |
| `defaultValue` | Default selected value (uncontrolled) | `string \| number` | `-` |
| `onChange` | Callback when selection changes | `(value: string \| number) => void` | `-` |
| `size` | Size of the control | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `block` | Take full width of container | `boolean` | `false` |
| `disabled` | Disable all options | `boolean` | `false` |
| `className` | Additional CSS class | `string` | `-` |

### SegmentedOption

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `label` | Display label | `ReactNode` | `-` |
| `value` | Option value | `string \| number` | `-` |
| `disabled` | Disable this option | `boolean` | `false` |
| `icon` | Icon before label | `ReactNode` | `-` |

## When to Use

- **View toggles**: Switch between List/Grid/Table views
- **Time periods**: Day/Week/Month/Year filters
- **Size selectors**: S/M/L/XL options
- **Alignment**: Left/Center/Right controls
- **Mode switches**: Light/Dark theme toggles

## Segmented vs Radio.Group

| Segmented | Radio.Group |
|-----------|-------------|
| Immediate UI state changes | Form field values |
| Compact, button-like appearance | Traditional radio buttons |
| Always visible options | Can have many options |
| 2-5 options typically | Any number of options |
