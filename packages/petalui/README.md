# PetalUI

A React component library built with DaisyUI and Tailwind CSS.

## Installation

```bash
npm install petalui
# or
pnpm add petalui
# or
yarn add petalui
```

## Usage

```tsx
import { Button, Badge, Table } from 'petalui'

function App() {
  return (
    <div>
      <Badge count={5}>
        <Button type="primary">Notifications</Button>
      </Badge>
    </div>
  )
}
```

## Components

- **Badge** - Notification badges with count and dot indicators
- **Button** - Buttons with multiple types and sizes
- **Drawer** - Sidebar navigation drawer
- **Navbar** - Navigation bar component
- **Spin** - Loading spinners with overlay support
- **Table** - Feature-rich data table with pagination

## Demo

View live examples and documentation at [https://edadma.github.io/petalui](https://edadma.github.io/petalui)

## Requirements

- React 18 or 19
- Tailwind CSS 4+
- DaisyUI 5+

## License

ISC
