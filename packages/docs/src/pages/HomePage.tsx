import { Alert, Button, Card, Masonry } from '@edadma/petalui'

export function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">PetalUI</h1>
        <p className="text-xl text-base-content/70 mb-8">
          A modern React UI component library built with DaisyUI and Tailwind CSS
        </p>
        <div className="flex justify-center">
          <Button
            outline
            onClick={() => window.open('https://github.com/edadma/petalui', '_blank')}
          >
            View on GitHub
          </Button>
        </div>
      </div>

      <Alert type="info">
        <div>
          <div className="font-semibold">Documentation Site</div>
          <div className="text-sm">
            This is the official component documentation for PetalUI. Browse components in the sidebar
            to see live examples, API documentation, and code samples.
          </div>
        </div>
      </Alert>

      <Masonry columns={{ xs: 1, md: 2 }} gap={4}>
        <Card bordered title="Installation">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Install Tailwind CSS</h3>
              <p className="text-sm mb-2">
                Install Tailwind CSS and the Vite plugin:
              </p>
              <div className="relative group mb-2">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
                  <code>npm install tailwindcss @tailwindcss/vite</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText('npm install tailwindcss @tailwindcss/vite')}
                >
                  Copy
                </button>
              </div>
              <p className="text-sm mb-2">
                Add the plugin to your <code className="bg-base-300 px-1 rounded">vite.config.ts</code>:
              </p>
              <div className="relative group mb-2">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}`}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`import tailwindcss from '@tailwindcss/vite'\n\nexport default {\n  plugins: [tailwindcss()],\n}`)}
                >
                  Copy
                </button>
              </div>
              <p className="text-sm mb-2">
                Import Tailwind in your CSS file and configure content paths:
              </p>
              <div className="relative group mb-2">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`@import "tailwindcss";

@source "../node_modules/@edadma/petalui/dist";`}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`@import "tailwindcss";\n\n@source "../node_modules/@edadma/petalui/dist";`)}
                >
                  Copy
                </button>
              </div>
              <p className="text-sm text-base-content/70 mb-2">
                The <code className="bg-base-300 px-1 rounded">@source</code> directive tells Tailwind to scan the library files for utility classes.
              </p>
              <p className="text-sm">
                See the{' '}
                <a
                  href="https://tailwindcss.com/docs/installation/using-vite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  full Tailwind CSS with Vite guide
                </a>{' '}
                for more details.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Install DaisyUI</h3>
              <p className="text-sm mb-2">
                PetalUI is built on top of DaisyUI. Install it:
              </p>
              <div className="relative group mb-2">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
                  <code>npm i -D daisyui@latest</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText('npm i -D daisyui@latest')}
                >
                  Copy
                </button>
              </div>
              <p className="text-sm mb-2">
                Then add DaisyUI to your CSS file (e.g., <code className="bg-base-300 px-1 rounded">app.css</code>):
              </p>
              <div className="relative group mb-2">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`@import "tailwindcss";
@plugin "daisyui";`}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`@import "tailwindcss";\n@plugin "daisyui";`)}
                >
                  Copy
                </button>
              </div>
              <p className="text-sm">
                See the{' '}
                <a
                  href="https://daisyui.com/docs/install/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  DaisyUI installation guide
                </a>{' '}
                for more details.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Install PetalUI</h3>
              <div className="relative group mb-2">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
                  <code>npm install @edadma/petalui</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText('npm install @edadma/petalui')}
                >
                  Copy
                </button>
              </div>
              <p className="text-sm text-base-content/70">Or with pnpm:</p>
              <div className="relative group">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto">
                  <code>pnpm add @edadma/petalui</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText('pnpm add @edadma/petalui')}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card bordered title="Peer Dependencies">
            <div className="space-y-2">
              <p>PetalUI requires the following peer dependencies:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>React 18+ or React 19+</li>
                <li>React DOM 18+ or React DOM 19+</li>
                <li>React Hook Form 7+</li>
              </ul>
              <p className="text-sm text-base-content/70 mt-2">
                With npm 7+, peer dependencies are installed automatically.
              </p>
            </div>
        </Card>

        <Card bordered title="Quick Start">
            <div className="space-y-2">
              <p>Import and use components in your React app:</p>
              <div className="relative group">
                <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Button, Card } from '@edadma/petalui'

const App = () => {
  return (
    <Card bordered title="Hello!">
      <Button type="primary">Click me</Button>
    </Card>
  )
}

export default App`}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => {
                    navigator.clipboard.writeText(`import { Button, Card } from '@edadma/petalui'

const App = () => {
  return (
    <Card bordered title="Hello!">
      <Button type="primary">Click me</Button>
    </Card>
  )
}

export default App`)
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
        </Card>

        <Card bordered title="Features">
            <ul className="list-disc list-inside space-y-2">
              <li>70+ React components</li>
              <li>Built with DaisyUI and Tailwind CSS</li>
              <li>TypeScript support</li>
              <li>Tree-shakeable</li>
              <li>Form integration with React Hook Form</li>
              <li>Customizable themes</li>
            </ul>
        </Card>
      </Masonry>
    </div>
  )
}
