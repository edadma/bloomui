import React from 'react'

export interface NavbarProps {
  children?: React.ReactNode
  start?: React.ReactNode
  center?: React.ReactNode
  end?: React.ReactNode
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  start,
  center,
  end,
  className = '',
}) => {
  const navbarClasses = ['navbar bg-base-100', className]
    .filter(Boolean)
    .join(' ')

  if (children) {
    return <div className={navbarClasses}>{children}</div>
  }

  return (
    <div className={navbarClasses}>
      {start && <div className="navbar-start">{start}</div>}
      {center && <div className="navbar-center">{center}</div>}
      {end && <div className="navbar-end">{end}</div>}
    </div>
  )
}
