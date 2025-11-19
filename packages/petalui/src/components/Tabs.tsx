import React, { useState } from 'react'

export interface TabsProps {
  children: React.ReactNode
  activeKey?: string
  defaultActiveKey?: string
  onChange?: (key: string) => void
  variant?: 'box' | 'border' | 'lift'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export interface TabPanelProps {
  tab: React.ReactNode
  tabKey: string
  disabled?: boolean
  children?: React.ReactNode
}

function TabsRoot({
  children,
  activeKey,
  defaultActiveKey,
  onChange,
  variant,
  size,
  className = '',
}: TabsProps) {
  // Get all panel children
  const panels = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabPanelProps> =>
      React.isValidElement(child) && child.type === TabPanel
  )

  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || panels[0]?.props.tabKey || ''
  )
  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey

  const handleTabClick = (key: string) => {
    if (activeKey === undefined) {
      setInternalActiveKey(key)
    }
    onChange?.(key)
  }

  const variantClasses = {
    box: 'tabs-box',
    border: 'tabs-border',
    lift: 'tabs-lift',
  }

  const sizeClasses = {
    xs: 'tabs-xs',
    sm: 'tabs-sm',
    md: 'tabs-md',
    lg: 'tabs-lg',
    xl: 'tabs-xl',
  }

  const classes = ['tabs', variant && variantClasses[variant], size && sizeClasses[size], className]
    .filter(Boolean)
    .join(' ')

  const activePanel = panels.find((panel) => panel.props.tabKey === currentActiveKey)

  return (
    <div>
      <div role="tablist" className={classes}>
        {panels.map((panel) => (
          <button
            key={panel.props.tabKey}
            role="tab"
            className={`tab ${currentActiveKey === panel.props.tabKey ? 'tab-active' : ''} ${
              panel.props.disabled ? 'tab-disabled' : ''
            }`}
            onClick={() => !panel.props.disabled && handleTabClick(panel.props.tabKey)}
            disabled={panel.props.disabled}
          >
            {panel.props.tab}
          </button>
        ))}
      </div>
      {activePanel && <div className="mt-4">{activePanel.props.children}</div>}
    </div>
  )
}

function TabPanel({ children }: TabPanelProps) {
  // This component is only used for type checking and is not rendered directly
  // The actual rendering is done in TabsRoot
  return <>{children}</>
}

export const Tabs = Object.assign(TabsRoot, {
  Panel: TabPanel,
})
