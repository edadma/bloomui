<p align="center">
  <img src="logo.png" alt="PetalUI Logo" width="200">
</p>

# PetalUI

A React component library built with DaisyUI and Tailwind CSS.

## Demo

View the live demo at: [https://edadma.github.io/petalui](https://edadma.github.io/petalui)

## Installation

```bash
npm install @edadma/petalui
# or
pnpm add @edadma/petalui
# or
yarn add @edadma/petalui
```

## Prerequisites

PetalUI requires Tailwind CSS and DaisyUI to be configured in your project:

```bash
npm install -D tailwindcss daisyui
```

Configure your `tailwind.config.js`:

```js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
}
```

## Usage

```tsx
import { Button, Badge, Table } from '@edadma/petalui'

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
- **Card** - Composable card component with body, title, actions, and figure
- **Drawer** - Sidebar navigation drawer
- **Dropdown** - Composable dropdown menu with trigger and items
- **Loading** - Loading spinners with overlay support
- **Menu** - Vertical menu component for navigation
- **Navbar** - Navigation bar component
- **Table** - Feature-rich data table with pagination

## Development

This is a pnpm monorepo with two packages:

- `packages/@edadma/petalui` - The component library
- `packages/demo` - Demo application

### Setup

```bash
# Enable corepack (if not already enabled)
corepack enable

# Install dependencies
pnpm install

# Start demo app
pnpm dev

# Build all packages
pnpm build
```

### Publishing

```bash
cd packages/@edadma/petalui
pnpm publish
```

## License

ISC
