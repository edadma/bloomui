import React from 'react'

export interface ListProps {
  children: React.ReactNode
  className?: string
}

export interface ListRowProps {
  children: React.ReactNode
  className?: string
}

function ListRoot({ children, className = '' }: ListProps) {
  const classes = ['list', className].filter(Boolean).join(' ')
  return <ul className={classes}>{children}</ul>
}

function ListRow({ children, className = '' }: ListRowProps) {
  const classes = ['list-row', className].filter(Boolean).join(' ')
  return <li className={classes}>{children}</li>
}

export const List = Object.assign(ListRoot, {
  Row: ListRow,
})
