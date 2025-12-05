import React from 'react';
import { createRoot } from 'react-dom/client';
import { Tag, CheckableTag } from 'asterui';
import {
  ClipboardDocumentIcon,
  CheckIcon,
  XMarkIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  FireIcon,
} from '@heroicons/react/20/solid';

const demos: Record<string, React.ReactNode> = {
  basic: (
    <div className="flex gap-2 flex-wrap">
      <Tag>Default</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="secondary">Secondary</Tag>
      <Tag color="accent">Accent</Tag>
      <Tag color="info">Info</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="error">Error</Tag>
    </div>
  ),
  closable: (
    <div className="flex gap-2 flex-wrap">
      <Tag closable color="primary">
        Closable
      </Tag>
      <Tag closable color="success">
        Close Me
      </Tag>
      <Tag closable color="warning">
        Removable
      </Tag>
    </div>
  ),
  icons: (
    <div className="flex gap-2 flex-wrap">
      <Tag color="primary" icon={<ClipboardDocumentIcon className="w-3 h-3" />}>
        Document
      </Tag>
      <Tag color="success" icon={<CheckIcon className="w-3 h-3" />}>
        Done
      </Tag>
      <Tag color="error" icon={<XMarkIcon className="w-3 h-3" />}>
        Failed
      </Tag>
    </div>
  ),
  sizes: (
    <div className="flex gap-2 items-center flex-wrap">
      <Tag color="primary" size="xs">
        Extra Small
      </Tag>
      <Tag color="primary" size="sm">
        Small
      </Tag>
      <Tag color="primary" size="md">
        Medium
      </Tag>
      <Tag color="primary" size="lg">
        Large
      </Tag>
    </div>
  ),
  'custom-colors': (
    <div className="flex gap-2 flex-wrap">
      <Tag color="#f50">Red</Tag>
      <Tag color="#2db7f5">Blue</Tag>
      <Tag color="#87d068">Green</Tag>
      <Tag color="#108ee9">Cyan</Tag>
      <Tag color="#f5222d">Crimson</Tag>
    </div>
  ),
  checkable: (
    <div className="flex gap-2 flex-wrap">
      <CheckableTag checked>React</CheckableTag>
      <CheckableTag>Vue</CheckableTag>
      <CheckableTag>Angular</CheckableTag>
      <CheckableTag>Svelte</CheckableTag>
    </div>
  ),
  'checkable-icons': (
    <div className="flex gap-2 flex-wrap">
      <CheckableTag icon={<AcademicCapIcon className="w-3 h-3" />}>Education</CheckableTag>
      <CheckableTag checked icon={<CurrencyDollarIcon className="w-3 h-3" />}>
        Finance
      </CheckableTag>
      <CheckableTag icon={<FireIcon className="w-3 h-3" />}>Trending</CheckableTag>
    </div>
  ),
  'use-cases': (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-semibold mb-2">Categories:</div>
        <div className="flex gap-2 flex-wrap">
          <Tag color="primary">Technology</Tag>
          <Tag color="secondary">Design</Tag>
          <Tag color="accent">Marketing</Tag>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">Status:</div>
        <div className="flex gap-2 flex-wrap">
          <Tag color="success">Active</Tag>
          <Tag color="warning">Pending</Tag>
          <Tag color="error">Inactive</Tag>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">Skills:</div>
        <div className="flex gap-2 flex-wrap">
          <Tag closable color="info">
            React
          </Tag>
          <Tag closable color="info">
            TypeScript
          </Tag>
          <Tag closable color="info">
            Node.js
          </Tag>
        </div>
      </div>
    </div>
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
