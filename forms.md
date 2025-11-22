# React DaisyUI Form Library Design

A guide for building a convenient form component library with DaisyUI, inspired by Ant Design's developer experience.

---

## Core Architecture

### 1. Form Controller Component

Create a `<Form>` wrapper that manages state and validation:

```jsx
<Form onFinish={handleSubmit} initialValues={defaults}>
  <Form.Item name="email" label="Email" rules={[{ required: true }]}>
    <Input />
  </Form.Item>
</Form>
```

**Key responsibilities:**
- Manage form-wide state
- Handle submission
- Coordinate validation
- Provide context to child components

---

### 2. Form.Item Wrapper

This is the secret sauce of Ant Design's convenience. It should handle:

- **Automatic label positioning** (top/left/inline)
- **Built-in error message display** using DaisyUI's form-control classes
- **Automatic value binding and onChange handling**
- **Visual feedback** (success/error states via DaisyUI's input-success/input-error)

**DaisyUI Structure Integration:**
```jsx
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input className="input input-bordered" />
  <label className="label">
    <span className="label-text-alt text-error">Error message</span>
  </label>
</div>
```

---

### 3. State Management Integration

Don't reinvent form state management. Wrap an existing solution:

**Option A: React Hook Form** (Recommended)
- More performant
- Smaller bundle size
- Uncontrolled components by default
- Great TypeScript support

**Option B: Formik**
- More established
- Larger ecosystem
- Controlled components
- Slightly heavier

**Benefits:**
- Validation logic
- Touched/dirty states
- Submission handling
- Field arrays
- Form reset

---

## Key Convenience Features

### Auto-binding

Users shouldn't need to manually wire onChange and value:

```jsx
// Just this:
<Form.Item name="username">
  <Input />
</Form.Item>

// Not this:
<Form.Item>
  <Input 
    value={values.username}
    onChange={e => setFieldValue('username', e.target.value)}
  />
</Form.Item>
```

---

### Validation Presets

Support common validation rules out of the box:

```jsx
<Form.Item 
  name="email"
  rules={[
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Invalid email format' },
    { min: 3, message: 'Too short' },
    { max: 50, message: 'Too long' },
    { pattern: /^[a-z]+$/, message: 'Only lowercase letters' },
    { validator: customAsyncValidator }
  ]}
>
  <Input />
</Form.Item>
```

**Built-in validators:**
- required
- type (email, url, number, etc.)
- min/max (length or value)
- pattern (regex)
- custom validator functions

---

### Form Methods API

Provide programmatic control:

```jsx
const [form] = Form.useForm();

// Set values
form.setFieldValue('name', 'John');
form.setFieldsValue({ name: 'John', email: 'john@example.com' });

// Get values
const name = form.getFieldValue('name');
const allValues = form.getFieldsValue();

// Validation
form.validateFields(); // Validate all
form.validateFields(['email', 'password']); // Validate specific fields

// Reset
form.resetFields();
form.resetFields(['email']); // Reset specific fields

// Utilities
form.isFieldTouched('email');
form.getFieldError('email');
```

---

### Dynamic Fields (Form.List)

Make it easy to add/remove fields dynamically:

```jsx
<Form.List name="users">
  {(fields, { add, remove }) => (
    <>
      {fields.map(field => (
        <div key={field.key}>
          <Form.Item name={[field.name, 'firstName']}>
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item name={[field.name, 'lastName']}>
            <Input placeholder="Last Name" />
          </Form.Item>
          <button onClick={() => remove(field.name)}>Remove</button>
        </div>
      ))}
      <button onClick={() => add()}>Add User</button>
    </>
  )}
</Form.List>
```

---

### Dependent Fields

Support fields that depend on other field values:

```jsx
<Form.Item 
  name="confirmPassword"
  dependencies={['password']}
  rules={[
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Passwords do not match'));
      },
    }),
  ]}
>
  <Input type="password" />
</Form.Item>
```

---

## DaisyUI-Specific Enhancements

### Theme-Aware Styling

Map validation states to DaisyUI classes automatically:

| State | DaisyUI Class | Usage |
|-------|---------------|-------|
| Default | `input-bordered` | Normal state |
| Error | `input-error` | Validation failed |
| Success | `input-success` | Validation passed |
| Warning | `input-warning` | Soft validation |
| Disabled | `input-disabled` | Non-editable |

---

### Form Control Wrapper

Automatically apply DaisyUI's form-control structure:

```jsx
// User writes:
<Form.Item name="email" label="Email" help="We'll never share your email">
  <Input />
</Form.Item>

// Library renders:
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input className="input input-bordered w-full" />
  <label className="label">
    <span className="label-text-alt">We'll never share your email</span>
  </label>
</div>
```

---

### Size Variants

Support DaisyUI's size classes:

```jsx
<Form size="lg"> {/* Applies to all children */}
  <Form.Item name="email">
    <Input /> {/* Automatically gets input-lg */}
  </Form.Item>
</Form>

// Or per-field:
<Form.Item name="email">
  <Input size="sm" />
</Form.Item>
```

**Size mapping:**
- xs → `input-xs`
- sm → `input-sm`
- md → (default)
- lg → `input-lg`

---

### Layout Options

Support different form layouts:

```jsx
// Vertical (default)
<Form layout="vertical">

// Horizontal
<Form layout="horizontal" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>

// Inline
<Form layout="inline">
```

---

## Component Integration

### Input Components

All DaisyUI form components should work seamlessly:

```jsx
<Form.Item name="username">
  <Input />
</Form.Item>

<Form.Item name="bio">
  <Textarea />
</Form.Item>

<Form.Item name="category">
  <Select>
    <option>Option 1</option>
    <option>Option 2</option>
  </Select>
</Form.Item>

<Form.Item name="agree" valuePropName="checked">
  <Checkbox>I agree to terms</Checkbox>
</Form.Item>

<Form.Item name="gender">
  <Radio.Group>
    <Radio value="male">Male</Radio>
    <Radio value="female">Female</Radio>
  </Radio.Group>
</Form.Item>

<Form.Item name="dateRange">
  <DatePicker.RangePicker />
</Form.Item>
```

---

### File Upload

```jsx
<Form.Item 
  name="avatar"
  valuePropName="fileList"
  getValueFromEvent={normFile}
>
  <Upload>
    <button className="btn">Upload</button>
  </Upload>
</Form.Item>
```

---

## Advanced Features

### Form Sections

Group related fields:

```jsx
<Form>
  <Form.Section title="Personal Information">
    <Form.Item name="firstName">
      <Input />
    </Form.Item>
    <Form.Item name="lastName">
      <Input />
    </Form.Item>
  </Form.Section>
  
  <Form.Section title="Account Details">
    <Form.Item name="email">
      <Input />
    </Form.Item>
    <Form.Item name="password">
      <Input type="password" />
    </Form.Item>
  </Form.Section>
</Form>
```

---

### Conditional Rendering

Show/hide fields based on values:

```jsx
<Form.Item name="hasCompany" valuePropName="checked">
  <Checkbox>I have a company</Checkbox>
</Form.Item>

<Form.Item 
  noStyle
  shouldUpdate={(prev, curr) => prev.hasCompany !== curr.hasCompany}
>
  {({ getFieldValue }) => 
    getFieldValue('hasCompany') ? (
      <Form.Item name="companyName">
        <Input placeholder="Company Name" />
      </Form.Item>
    ) : null
  }
</Form.Item>
```

---

### Loading States

Built-in submission loading:

```jsx
<Form onFinish={async (values) => {
  await submitToAPI(values);
}}>
  {/* Form automatically shows loading state */}
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</Form>
```

---

## TypeScript Support

Full type safety:

```tsx
interface LoginForm {
  username: string;
  password: string;
  remember: boolean;
}

const [form] = Form.useForm<LoginForm>();

<Form<LoginForm>
  form={form}
  onFinish={(values) => {
    // values is fully typed as LoginForm
    console.log(values.username);
  }}
>
  <Form.Item<LoginForm> 
    name="username" 
    rules={[{ required: true }]}
  >
    <Input />
  </Form.Item>
</Form>
```

---

## Usage Example

Complete form example:

```jsx
import { Form, Input, Checkbox, Button } from './components';

function LoginForm() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await login(values);
      console.log('Success!');
    } catch (error) {
      form.setFields([
        {
          name: 'password',
          errors: ['Invalid credentials']
        }
      ]);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Invalid email format' }
        ]}
      >
        <Input placeholder="you@example.com" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 8, message: 'Password must be at least 8 characters' }
        ]}
      >
        <Input type="password" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="submit" className="btn btn-primary w-full">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}
```

---

## Implementation Priorities

1. **Core Form & Form.Item** - Get the basic structure right
2. **React Hook Form integration** - Leverage existing state management
3. **Validation system** - Built-in rules + custom validators
4. **DaisyUI styling integration** - Automatic class application
5. **Form methods API** - Programmatic control
6. **TypeScript support** - Full type safety
7. **Dynamic fields (Form.List)** - Add/remove functionality
8. **Advanced features** - Sections, conditional rendering, etc.

---

## Additional Considerations

### Accessibility
- Proper label associations
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management

### Performance
- Only re-render changed fields
- Debounced validation
- Lazy validation (on blur/submit)
- Virtual scrolling for long forms

### Developer Experience
- Clear error messages
- Good TypeScript types
- Comprehensive documentation
- Storybook examples
- Migration guide from other libraries

### Testing
- Unit tests for validation
- Integration tests for form flows
- Accessibility testing
- Performance benchmarks
