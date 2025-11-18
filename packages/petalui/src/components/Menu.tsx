import React from 'react'

export interface MenuItem {
  key: string
  label: string
  onClick?: () => void
  active?: boolean
}

export interface MenuGroup {
  title?: string
  items: MenuItem[]
}

export interface MenuProps {
  items?: MenuItem[]
  groups?: MenuGroup[]
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ items, groups, className = '' }) => {
  const menuClasses = ['menu', className].filter(Boolean).join(' ')

  if (groups) {
    return (
      <ul className={menuClasses}>
        {groups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.title && <li className="menu-title">{group.title}</li>}
            {group.items.map((item) => (
              <li key={item.key}>
                <a
                  className={item.active ? 'active' : ''}
                  onClick={item.onClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    )
  }

  if (items) {
    return (
      <ul className={menuClasses}>
        {items.map((item) => (
          <li key={item.key}>
            <a
              className={item.active ? 'active' : ''}
              onClick={item.onClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return null
}
