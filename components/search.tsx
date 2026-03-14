'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  href: string;
  category: string;
}

const results: SearchResult[] = [
  { title: 'Home', href: '/', category: 'Pages' },
  { title: 'Getting Started', href: '/docs', category: 'Documentation' },
  { title: 'Datasets', href: '/docs/datasets', category: 'Documentation' },
  { title: 'Extensions', href: '/extensions', category: 'Pages' },
  { title: 'API Reference', href: '/api', category: 'Documentation' },
  { title: 'About AURA', href: '/about', category: 'Pages' },
];

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const q = query.toLowerCase();
      setFiltered(
        results.filter(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.category.toLowerCase().includes(q)
        )
      );
    } else {
      setFiltered([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Search Button in Navigation */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span>Search...</span>
        <kbd className="ml-auto text-xs bg-white px-2 py-1 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-lg shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="flex-1 outline-none text-lg"
              />
              <span className="text-xs text-gray-400">ESC</span>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {filtered.length > 0 ? (
                <div>
                  {filtered.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="font-semibold">{result.title}</p>
                        <p className="text-xs text-gray-500">{result.category}</p>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              ) : query.length > 0 ? (
                <div className="px-4 py-8 text-center text-gray-500">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-gray-500">
                  <p className="text-sm">Type to search...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
