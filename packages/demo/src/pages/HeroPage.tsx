import { Hero, Button, Card, Input } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'

const heroApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Hero content',
    type: 'React.ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
  {
    property: 'style',
    description: 'Inline styles (useful for background images)',
    type: 'React.CSSProperties',
  },
]

const heroContentApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Content wrapper children',
    type: 'React.ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const heroOverlayApi: ApiProperty[] = [
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

export function HeroPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Hero</h1>
        <p className="text-base-content/70">
          Large display box for landing pages and featured content.
        </p>
      </div>

      <div className="columns-1 gap-x-4">
        <ExampleSection
          title="Centered Hero"
          description="Basic hero with centered content."
          code={`import React from 'react'
import { Hero, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Hero className="bg-base-200 min-h-[400px]">
    <Hero.Content className="text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
    </Hero.Content>
  </Hero>
)

export default App`}
        >
          <Hero className="bg-base-200 min-h-[400px]">
            <Hero.Content className="text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi.
                </p>
                <Button type="primary">Get Started</Button>
              </div>
            </Hero.Content>
          </Hero>
        </ExampleSection>

        <ExampleSection
          title="Hero with Figure"
          description="Hero with image alongside content."
          code={`import React from 'react'
import { Hero, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Hero className="bg-base-200 min-h-[400px]">
    <Hero.Content className="flex-col lg:flex-row">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
    </Hero.Content>
  </Hero>
)

export default App`}
        >
          <Hero className="bg-base-200 min-h-[400px]">
            <Hero.Content className="flex-col lg:flex-row">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-lg shadow-2xl"
                alt="Hero"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Button type="primary">Get Started</Button>
              </div>
            </Hero.Content>
          </Hero>
        </ExampleSection>

        <ExampleSection
          title="Reversed Layout"
          description="Hero with image on the right."
          code={`import React from 'react'
import { Hero, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Hero className="bg-base-200 min-h-[400px]">
    <Hero.Content className="flex-col lg:flex-row-reverse">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
    </Hero.Content>
  </Hero>
)

export default App`}
        >
          <Hero className="bg-base-200 min-h-[400px]">
            <Hero.Content className="flex-col lg:flex-row-reverse">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-lg shadow-2xl"
                alt="Hero"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Button type="primary">Get Started</Button>
              </div>
            </Hero.Content>
          </Hero>
        </ExampleSection>

        <ExampleSection
          title="Hero with Form"
          description="Hero with a login form card."
          code={`import React from 'react'
import { Hero, Card, Input, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Hero className="bg-base-200 min-h-[400px]">
    <Hero.Content className="flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <Card className="w-full max-w-sm flex-shrink-0 shadow-2xl">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <Input type="email" placeholder="email@example.com" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <Input type="password" placeholder="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <Button type="primary">Login</Button>
        </div>
      </Card>
    </Hero.Content>
  </Hero>
)

export default App`}
        >
          <Hero className="bg-base-200 min-h-[400px]">
            <Hero.Content className="flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
              </div>
              <Card className="w-full max-w-sm flex-shrink-0 shadow-2xl">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Input type="password" placeholder="password" />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <Button type="primary">Login</Button>
                </div>
              </Card>
            </Hero.Content>
          </Hero>
        </ExampleSection>

        <ExampleSection
          title="Hero with Overlay"
          description="Hero with background image and overlay."
          code={`import React from 'react'
import { Hero, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Hero
    className="min-h-[400px]"
    style={{
      backgroundImage:
        'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
    }}
  >
    <Hero.Overlay className="bg-opacity-60" />
    <Hero.Content className="text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
    </Hero.Content>
  </Hero>
)

export default App`}
        >
          <Hero
            className="min-h-[400px]"
            style={{
              backgroundImage:
                'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
            }}
          >
            <Hero.Overlay className="bg-opacity-60" />
            <Hero.Content className="text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Button type="primary">Get Started</Button>
              </div>
            </Hero.Content>
          </Hero>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Hero API</h2>
        <ApiTable data={heroApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Hero.Content API</h2>
        <ApiTable data={heroContentApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Hero.Overlay API</h2>
        <ApiTable data={heroOverlayApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Subcomponents</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>Hero.Content</code>
                </td>
                <td>Content wrapper with proper padding and centering</td>
              </tr>
              <tr>
                <td>
                  <code>Hero.Overlay</code>
                </td>
                <td>Overlay for darkening background images</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
