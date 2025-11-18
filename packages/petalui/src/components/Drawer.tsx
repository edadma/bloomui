import React from 'react'

export interface DrawerProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  end?: boolean
  className?: string
  sidebarClassName?: string
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  sidebar,
  open = false,
  onOpenChange,
  end = false,
  className = '',
  sidebarClassName = '',
}) => {
  const drawerId = React.useId()

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onOpenChange?.(e.target.checked)
  }

  const drawerClasses = ['drawer', end && 'drawer-end', className]
    .filter(Boolean)
    .join(' ')

  const sidebarClasses = ['menu bg-base-200 min-h-full w-80 p-4', sidebarClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={drawerClasses}>
      <input
        id={drawerId}
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={handleToggle}
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className={sidebarClasses}>{sidebar}</div>
      </div>
    </div>
  )
}
