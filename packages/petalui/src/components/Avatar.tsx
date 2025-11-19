import React from 'react'

export interface AvatarGroupProps {
  children: React.ReactNode
  className?: string
}

export interface AvatarProps {
  children: React.ReactNode
  className?: string
  online?: boolean
  offline?: boolean
  placeholder?: boolean
}

function AvatarGroupRoot({ children, className = '' }: AvatarGroupProps) {
  return <div className={`avatar-group -space-x-6 rtl:space-x-reverse ${className}`}>{children}</div>
}

function AvatarRoot({ children, className = '', online = false, offline = false, placeholder = false }: AvatarProps) {
  const classes = [
    'avatar',
    online && 'online',
    offline && 'offline',
    placeholder && 'placeholder',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

export const AvatarGroup = AvatarGroupRoot

export const Avatar = AvatarRoot
