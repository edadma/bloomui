# Space

Set consistent spacing between components.

**Import:** `import { Space } from '@edadma/bloomui'`

## Examples

### Vertical

```tsx
import React from 'react'
import { Space, Button } from '@edadma/bloomui'

const App: React.FC = () => (
  <Space>
    <Button type="primary">Button 1</Button>
    <Button type="secondary">Button 2</Button>
    <Button type="accent">Button 3</Button>
  </Space>
)

export default App
```

### Horizontal

```tsx
import React from 'react'
import { Space, Button } from '@edadma/bloomui'

const App: React.FC = () => (
  <Space direction="horizontal">
    <Button type="primary">Button 1</Button>
    <Button type="secondary">Button 2</Button>
    <Button type="accent">Button 3</Button>
  </Space>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Space, Badge } from '@edadma/bloomui'

const App: React.FC = () => (
  <>
    <Space size="xs" direction="horizontal">
      <Badge>Extra Small</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="sm" direction="horizontal">
      <Badge>Small</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="md" direction="horizontal">
      <Badge>Medium</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="lg" direction="horizontal">
      <Badge>Large</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="xl" direction="horizontal">
      <Badge>Extra Large</Badge>
      <Badge>Spacing</Badge>
    </Space>
  </>
)

export default App
```

### Alignment

```tsx
import React from 'react'
import { Space, Button } from '@edadma/bloomui'

const App: React.FC = () => (
  <Space direction="horizontal" align="center">
    <Button type="primary" size="xs">Small</Button>
    <Button type="secondary" size="md">Medium</Button>
    <Button type="accent" size="lg">Large</Button>
  </Space>
)

export default App
```

### Wrap

```tsx
import React from 'react'
import { Space, Badge } from '@edadma/bloomui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap>
    <Badge>Tag 1</Badge>
    <Badge>Tag 2</Badge>
    <Badge>Tag 3</Badge>
    <Badge>Tag 4</Badge>
    <Badge>Tag 5</Badge>
    <Badge>Tag 6</Badge>
    <Badge>Tag 7</Badge>
    <Badge>Tag 8</Badge>
  </Space>
)

export default App
```

### Nested

```tsx
import React from 'react'
import { Space, Card, Button } from '@edadma/bloomui'

const App: React.FC = () => (
  <Space>
    <Card title="Card 1">
      <Space direction="horizontal">
        <Button type="primary" size="sm">Action 1</Button>
        <Button type="secondary" size="sm">Action 2</Button>
      </Space>
    </Card>

    <Card title="Card 2">
      <Space direction="horizontal">
        <Button type="primary" size="sm">Action 1</Button>
        <Button type="secondary" size="sm">Action 2</Button>
      </Space>
    </Card>
  </Space>
)

export default App
```
