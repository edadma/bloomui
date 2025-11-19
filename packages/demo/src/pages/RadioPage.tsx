import { Radio, Form } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'
import { useState } from 'react'

const radioApi: ApiProperty[] = [
  {
    property: 'size',
    description: 'Radio button size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
  },
  {
    property: 'color',
    description: 'Radio button color variant',
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'",
  },
  {
    property: 'name',
    description: 'Radio group name (required)',
    type: 'string',
  },
  {
    property: 'checked',
    description: 'Checked state',
    type: 'boolean',
  },
  {
    property: 'disabled',
    description: 'Disabled state',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

export function RadioPage() {
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleSubmit = (values: { plan?: string }) => {
    alert(`Selected plan: ${values.plan}`)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Radio</h1>
        <p className="text-base-content/70">
          Radio buttons for selecting one option from a set.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic Radio"
          description="Simple radio button group."
          code={`import React, { useState } from 'react'
import { Radio } from '@edadma/petalui'

const App: React.FC = () => {
  const [selected, setSelected] = useState('option1')

  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          name="radio-1"
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        />
        <span>Option 1</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          name="radio-1"
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        />
        <span>Option 2</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          name="radio-1"
          checked={selected === 'option3'}
          onChange={() => setSelected('option3')}
        />
        <span>Option 3</span>
      </label>
    </div>
  )
}

export default App`}
        >
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio
                name="radio-1"
                checked={selectedOption === 'option1'}
                onChange={() => setSelectedOption('option1')}
              />
              <span>Option 1</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio
                name="radio-1"
                checked={selectedOption === 'option2'}
                onChange={() => setSelectedOption('option2')}
              />
              <span>Option 2</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio
                name="radio-1"
                checked={selectedOption === 'option3'}
                onChange={() => setSelectedOption('option3')}
              />
              <span>Option 3</span>
            </label>
          </div>
        </ExampleSection>

        <ExampleSection
          title="Sizes"
          description="Different radio button sizes."
          code={`import React from 'react'
import { Radio } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <Radio name="radio-size" size="xs" defaultChecked />
      <span className="text-xs">Extra Small</span>
    </div>
    <div className="flex items-center gap-2">
      <Radio name="radio-size" size="sm" />
      <span className="text-sm">Small</span>
    </div>
    <div className="flex items-center gap-2">
      <Radio name="radio-size" size="md" />
      <span>Medium</span>
    </div>
    <div className="flex items-center gap-2">
      <Radio name="radio-size" size="lg" />
      <span className="text-lg">Large</span>
    </div>
    <div className="flex items-center gap-2">
      <Radio name="radio-size" size="xl" />
      <span className="text-xl">Extra Large</span>
    </div>
  </div>
)

export default App`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Radio name="radio-size" size="xs" defaultChecked />
              <span className="text-xs">Extra Small</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio name="radio-size" size="sm" />
              <span className="text-sm">Small</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio name="radio-size" size="md" />
              <span>Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio name="radio-size" size="lg" />
              <span className="text-lg">Large</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio name="radio-size" size="xl" />
              <span className="text-xl">Extra Large</span>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection
          title="Colors"
          description="Colored radio button variants."
          code={`import React from 'react'
import { Radio } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex flex-wrap gap-4">
    <Radio name="radio-color" color="primary" defaultChecked />
    <Radio name="radio-color" color="secondary" />
    <Radio name="radio-color" color="accent" />
    <Radio name="radio-color" color="info" />
    <Radio name="radio-color" color="success" />
    <Radio name="radio-color" color="warning" />
    <Radio name="radio-color" color="error" />
  </div>
)

export default App`}
        >
          <div className="flex flex-wrap gap-4">
            <Radio name="radio-color" color="primary" defaultChecked />
            <Radio name="radio-color" color="secondary" />
            <Radio name="radio-color" color="accent" />
            <Radio name="radio-color" color="info" />
            <Radio name="radio-color" color="success" />
            <Radio name="radio-color" color="warning" />
            <Radio name="radio-color" color="error" />
          </div>
        </ExampleSection>

        <ExampleSection
          title="Disabled"
          description="Disabled radio buttons."
          code={`import React from 'react'
import { Radio } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex flex-col gap-3">
    <label className="flex items-center gap-2">
      <Radio name="radio-disabled" disabled />
      <span className="opacity-50">Disabled unchecked</span>
    </label>
    <label className="flex items-center gap-2">
      <Radio name="radio-disabled-2" disabled defaultChecked />
      <span className="opacity-50">Disabled checked</span>
    </label>
  </div>
)

export default App`}
        >
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <Radio name="radio-disabled" disabled />
              <span className="opacity-50">Disabled unchecked</span>
            </label>
            <label className="flex items-center gap-2">
              <Radio name="radio-disabled-2" disabled defaultChecked />
              <span className="opacity-50">Disabled checked</span>
            </label>
          </div>
        </ExampleSection>

        <ExampleSection
          title="In Form"
          description="Radio buttons in a form with validation."
          code={`import React from 'react'
import { Radio, Form, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const handleSubmit = (values: { plan?: string }) => {
    alert(\`Selected plan: \${values.plan}\`)
  }

  return (
    <Form onFinish={handleSubmit} initialValues={{ plan: 'basic' }}>
      <Form.Item
        name="plan"
        label="Choose a plan"
        rules={{ required: 'Please select a plan' }}
      >
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <Radio value="basic" />
            <div>
              <div className="font-semibold">Basic</div>
              <div className="text-sm opacity-70">$10/month</div>
            </div>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <Radio value="pro" />
            <div>
              <div className="font-semibold">Pro</div>
              <div className="text-sm opacity-70">$20/month</div>
            </div>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <Radio value="enterprise" />
            <div>
              <div className="font-semibold">Enterprise</div>
              <div className="text-sm opacity-70">Contact us</div>
            </div>
          </label>
        </div>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  )
}

export default App`}
        >
          <Form onFinish={handleSubmit} initialValues={{ plan: 'basic' }}>
            <Form.Item
              name="plan"
              label="Choose a plan"
              rules={{ required: 'Please select a plan' }}
            >
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Radio value="basic" />
                  <div>
                    <div className="font-semibold">Basic</div>
                    <div className="text-sm opacity-70">$10/month</div>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Radio value="pro" />
                  <div>
                    <div className="font-semibold">Pro</div>
                    <div className="text-sm opacity-70">$20/month</div>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Radio value="enterprise" />
                  <div>
                    <div className="font-semibold">Enterprise</div>
                    <div className="text-sm opacity-70">Contact us</div>
                  </div>
                </label>
              </div>
            </Form.Item>
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
          </Form>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Radio API</h2>
        <ApiTable data={radioApi} />
        <div className="alert alert-info mt-4">
          <span>
            Note: Radio buttons in the same group must share the same <code>name</code> attribute.
          </span>
        </div>
      </div>
    </div>
  )
}
