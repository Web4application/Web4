'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface DocNavItem {
  label: string;
  href: string;
  children?: DocNavItem[];
}

const docNav: DocNavItem[] = [
  { label: 'Getting Started', href: '/docs' },
  {
    label: 'Datasets',
    href: '#',
    children: [
      { label: 'Overview', href: '/docs/datasets' },
      { label: 'Edge-Agent-Reasoning', href: '/docs/datasets/ear' },
      { label: 'Data Format', href: '/docs/datasets/format' },
      { label: 'Loading Data', href: '/docs/datasets/loading' },
    ],
  },
  {
    label: 'Extensions',
    href: '#',
    children: [
      { label: 'Overview', href: '/docs/extensions/overview' },
      { label: 'Creating Extensions', href: '/docs/extensions/creating' },
      { label: 'API Reference', href: '/docs/extensions/api' },
      { label: 'Examples', href: '/docs/extensions/examples' },
    ],
  },
  {
    label: 'Engines',
    href: '#',
    children: [
      { label: 'Overview', href: '/docs/engines/overview' },
      { label: 'XLSL Engine', href: '/docs/engines/xlsl' },
      { label: 'Pipelines', href: '/docs/engines/pipelines' },
      { label: 'Performance', href: '/docs/engines/performance' },
    ],
  },
  {
    label: 'Integration',
    href: '#',
    children: [
      { label: 'REST API', href: '/docs/integration/api' },
      { label: 'Python SDK', href: '/docs/integration/python' },
      { label: 'JavaScript SDK', href: '/docs/integration/js' },
      { label: 'Webhooks', href: '/docs/integration/webhooks' },
    ],
  },
  {
    label: 'Advanced',
    href: '#',
    children: [
      { label: 'Custom Models', href: '/docs/advanced/models' },
      { label: 'Distributed Computing', href: '/docs/advanced/distributed' },
      { label: 'Caching', href: '/docs/advanced/caching' },
      { label: 'Troubleshooting', href: '/docs/advanced/troubleshooting' },
    ],
  },
];

function DocNavigation() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Getting Started']);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <nav className="space-y-1">
      {docNav.map((item) => (
        <div key={item.label}>
          {item.children ? (
            <>
              <button
                onClick={() => toggleExpanded(item.label)}
                className="w-full text-left px-3 py-2 rounded-lg font-semibold text-foreground hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                {item.label}
                <span className={`text-sm transition-transform ${expandedItems.includes(item.label) ? 'rotate-90' : ''}`}>
                  ›
                </span>
              </button>
              {expandedItems.includes(item.label) && (
                <div className="ml-2 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        pathname === child.href
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-gray-600 hover:text-foreground hover:bg-gray-100'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className={`block px-3 py-2 rounded-lg font-semibold transition-colors ${
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <div className="md:hidden sticky top-16 z-40 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h2 className="font-semibold">Documentation</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded"
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed md:sticky top-16 md:top-16 h-[calc(100vh-4rem)] z-30 bg-white border-r border-gray-200 w-64 overflow-y-auto transition-transform md:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <DocNavigation />
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
