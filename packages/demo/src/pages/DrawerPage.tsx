import { useState } from 'react'
import { Drawer, Button } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'

export function DrawerPage() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Drawer</h1>
        <p className="text-base-content/70">
          Sidebar drawer component for navigation and content.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic"
          description="A basic drawer that slides in from the left."
          code={`import React, { useState } from 'react'
import { Drawer, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        sidebar={
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
            <p>This is the sidebar content.</p>
          </div>
        }
        open={open}
        onOpenChange={setOpen}
      >
        <div className="p-4">
          <h1>Main Content</h1>
          <p>This is the main content area.</p>
        </div>
      </Drawer>
    </>
  )
}

export default App`}
        >
          <Button onClick={() => setOpen1(true)}>Open Drawer</Button>
          <Drawer
            sidebar={
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
                <p>This is the sidebar content.</p>
                <Button className="mt-4" onClick={() => setOpen1(false)}>
                  Close
                </Button>
              </div>
            }
            open={open1}
            onOpenChange={setOpen1}
          >
            <div className="p-4">
              <h1>Main Content</h1>
              <p>Click outside or on the overlay to close the drawer.</p>
            </div>
          </Drawer>
        </ExampleSection>

        <ExampleSection
          title="With Menu"
          description="Drawer with a navigation menu."
          code={`import React, { useState } from 'react'
import { Drawer, Button, Menu } from '@edadma/petalui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { key: 'home', label: 'Home', onClick: () => console.log('Home') },
    { key: 'about', label: 'About', onClick: () => console.log('About') },
    { key: 'contact', label: 'Contact', onClick: () => console.log('Contact') },
  ]

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Menu</Button>
      <Drawer
        sidebar={
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <Menu items={menuItems} />
          </div>
        }
        open={open}
        onOpenChange={setOpen}
      >
        <div className="p-4">
          <h1>Main Content</h1>
        </div>
      </Drawer>
    </>
  )
}

export default App`}
        >
          <Button onClick={() => setOpen2(true)}>Open Menu</Button>
          <Drawer
            sidebar={
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Navigation</h2>
                <ul className="menu">
                  <li><a>Home</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                </ul>
                <Button className="mt-4" onClick={() => setOpen2(false)}>
                  Close
                </Button>
              </div>
            }
            open={open2}
            onOpenChange={setOpen2}
          >
            <div className="p-4">
              <h1>Main Content</h1>
              <p>Drawer with navigation menu items.</p>
            </div>
          </Drawer>
        </ExampleSection>
      </div>
    </div>
  )
}
