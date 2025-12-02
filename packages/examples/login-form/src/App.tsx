import {
  Form,
  Input,
  Checkbox,
  Button,
  Modal,
  Divider,
  Card,
  Space,
  Flex,
  Typography,
} from '@edadma/bloomui'

const { Link, Paragraph } = Typography

const validatePassword = (value: string) => {
  if (!value || value.length < 8) return 'Password must be at least 8 characters'
  if (!/[A-Z]/.test(value)) return 'Password must contain an uppercase letter'
  if (!/[a-z]/.test(value)) return 'Password must contain a lowercase letter'
  if (!/[0-9]/.test(value)) return 'Password must contain a number'
  if (!/[!@#$%^&*.?]/.test(value)) return 'Password must contain a special character (!@#$%^&*.?)'
  return true
}

export default function App() {
  const handleSubmit = (values: { email: string; password: string; remember: boolean }) => {
    Modal.success({
      title: 'Login Successful',
      content: <pre className="text-left">{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
    <Flex justify="center" align="center" minHeight="screen" className="bg-base-200 p-4">
      <Card title="Sign In" className="w-full max-w-md">
        <Form onFinish={handleSubmit} initialValues={{ remember: false }}>
          <Form.Item name="email" label="Email" rules={{ required: true, type: 'email' }}>
            <Input placeholder="you@example.com" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={{ required: true, validate: validatePassword }}
          >
            <Input type="password" placeholder="Enter your password" />
          </Form.Item>
          <Space justify="between" align="center" className="mb-4">
            <Form.Item name="remember" valuePropName="checked" inline>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link size="sm">Forgot password?</Link>
          </Space>
          <Button type="primary" htmlType="submit" shape="block">
            Sign In
          </Button>
          <Divider>or</Divider>
          <Paragraph align="center" size="sm">
            Don't have an account? <Link>Sign up</Link>
          </Paragraph>
        </Form>
      </Card>
    </Flex>
  )
}
