# Form

**Import:** `import { Form } from '@edadma/bloomui'`

## Examples

### Basic Form

Simple login form with username and password fields.

```tsx
import React from 'react'
import { Form, Input, Button } from '@edadma/bloomui'

const App: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log('Form values:', values)
  }

  return (
    <Form onFinish={handleFinish}>
      <Form.Item name="username" label="Username">
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input type="password" placeholder="Enter password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
```

### Form Validation

Form with validation rules for required fields and email pattern.

```tsx
import React from 'react'
import { Form, Input, Button } from '@edadma/bloomui'

const App: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log('Success:', values)
  }

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input placeholder="name@example.com" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 6, message: 'Password must be at least 6 characters' }
        ]}
      >
        <Input type="password" placeholder="Enter password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
```

### Form Layouts

Different form layouts: horizontal, vertical, and inline.

```tsx
import React, { useState } from 'react'
import { Form, Input, Button, Radio, Space } from '@edadma/bloomui'

const App: React.FC = () => {
  const [layout, setLayout] = useState<'horizontal' | 'vertical' | 'inline'>('vertical')

  return (
    <Space direction="vertical" size="lg" className="w-full">
      <Radio.Group
        value={layout}
        onChange={(e) => setLayout(e.target.value as typeof layout)}
      >
        <Radio value="vertical">Vertical</Radio>
        <Radio value="horizontal">Horizontal</Radio>
        <Radio value="inline">Inline</Radio>
      </Radio.Group>

      <Form layout={layout} onFinish={(values) => console.log(values)}>
        <Form.Item name="name" label="Name" required>
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item name="email" label="Email" required>
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

export default App
```

### Initial Values

Form with pre-populated initial values.

```tsx
import React from 'react'
import { Form, Input, Button } from '@edadma/bloomui'

const App: React.FC = () => {
  const initialValues = {
    username: 'john_doe',
    email: 'john@example.com',
    bio: 'Software developer'
  }

  const handleFinish = (values: any) => {
    console.log('Updated values:', values)
  }

  return (
    <Form initialValues={initialValues} onFinish={handleFinish}>
      <Form.Item name="username" label="Username">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="bio" label="Bio">
        <Input.TextArea rows={3} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update Profile
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
```

## API

### Form

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `onFinish` | Success handler (called when validation passes) | `(values: any) => void` | `-` |
| `onFinishFailed` | Failed handler (called when validation fails) | `(errorInfo: any) => void` | `-` |
| `layout` | Form layout orientation | `horizontal' \| 'vertical' \| 'inline` | `vertical` |
| `disabled` | Disable all form fields | `boolean` | `false` |
| `children` | Form content (Form.Item elements) | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Form Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `name` | Field name (required for validation) | `string` | `-` |
| `label` | Field label text | `string` | `-` |
| `rules` | Validation rules | `ValidationRule[]` | `-` |
| `required` | Mark field as required (shorthand) | `boolean` | `false` |
| `children` | Form control element (Input, Select, etc.) | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
