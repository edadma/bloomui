import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Tree } from 'asterui'
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/solid'

interface TreeNode {
  key: string
  title: string
  children?: TreeNode[]
  icon?: React.ReactNode
  disabled?: boolean
}

const basicTreeData: TreeNode[] = [
  {
    key: '0',
    title: 'Parent Node',
    children: [
      {
        key: '0-0',
        title: 'Child Node 1',
        children: [
          { key: '0-0-0', title: 'Leaf Node 1' },
          { key: '0-0-1', title: 'Leaf Node 2' },
        ],
      },
      {
        key: '0-1',
        title: 'Child Node 2',
        children: [{ key: '0-1-0', title: 'Leaf Node 3' }],
      },
    ],
  },
]

const fileTreeData: TreeNode[] = [
  {
    key: 'src',
    title: 'src',
    children: [
      {
        key: 'components',
        title: 'components',
        children: [
          { key: 'Button.tsx', title: 'Button.tsx' },
          { key: 'Input.tsx', title: 'Input.tsx' },
          { key: 'Modal.tsx', title: 'Modal.tsx' },
        ],
      },
      {
        key: 'pages',
        title: 'pages',
        children: [
          { key: 'Home.tsx', title: 'Home.tsx' },
          { key: 'About.tsx', title: 'About.tsx' },
        ],
      },
      { key: 'App.tsx', title: 'App.tsx' },
      { key: 'index.tsx', title: 'index.tsx' },
    ],
  },
  {
    key: 'public',
    title: 'public',
    children: [{ key: 'index.html', title: 'index.html' }],
  },
  { key: 'package.json', title: 'package.json' },
]

function BasicTree() {
  return <Tree treeData={basicTreeData} defaultExpandedKeys={['0', '0-0']} />
}

function CheckableTree() {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={basicTreeData}
        checkable
        checkedKeys={checkedKeys}
        onCheck={setCheckedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p className="mt-4 text-sm">Checked: {checkedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

function SelectableTree() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={basicTreeData}
        selectable
        selectedKeys={selectedKeys}
        onSelect={setSelectedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p className="mt-4 text-sm">Selected: {selectedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

function MultipleSelectTree() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={basicTreeData}
        selectable
        multiple
        selectedKeys={selectedKeys}
        onSelect={setSelectedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p className="mt-4 text-sm">Selected: {selectedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

function ShowLineTree() {
  return <Tree treeData={fileTreeData} showLine defaultExpandedKeys={['src', 'components', 'pages']} />
}

function ShowIconTree() {
  const treeDataWithIcons: TreeNode[] = [
    {
      key: 'src',
      title: 'src',
      icon: <FolderIcon className="w-4 h-4" />,
      children: [
        { key: 'App.tsx', title: 'App.tsx', icon: <DocumentIcon className="w-4 h-4" /> },
        { key: 'index.tsx', title: 'index.tsx', icon: <DocumentIcon className="w-4 h-4" /> },
      ],
    },
  ]

  return <Tree treeData={treeDataWithIcons} showIcon defaultExpandedKeys={['src']} />
}

function ExpandControlledTree() {
  const [expandedKeys, setExpandedKeys] = useState<string[]>(['0'])

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button className="btn btn-sm" onClick={() => setExpandedKeys(['0', '0-0', '0-1'])}>
          Expand All
        </button>
        <button className="btn btn-sm" onClick={() => setExpandedKeys([])}>
          Collapse All
        </button>
      </div>
      <Tree treeData={basicTreeData} expandedKeys={expandedKeys} onExpand={setExpandedKeys} />
    </div>
  )
}

const statefulDemos: Record<string, React.FC> = {
  basic: BasicTree,
  checkable: CheckableTree,
  selectable: SelectableTree,
  multiple: MultipleSelectTree,
  'show-line': ShowLineTree,
  'show-icon': ShowIconTree,
  'expand-controlled': ExpandControlledTree,
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.demo-container').forEach((container) => {
    const example = container.dataset.example
    if (example && statefulDemos[example]) {
      const root = createRoot(container)
      const Component = statefulDemos[example]
      root.render(<Component />)
    }
  })
})
