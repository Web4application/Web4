'use client';

import { useState } from 'react';

interface Dataset {
  id: string;
  name: string;
  description: string;
  examples: number;
  domains: string[];
  tags: string[];
}

export default function DatasetExplorer() {
  const datasets: Dataset[] = [
    {
      id: 'ear-50k',
      name: 'Edge-Agent-Reasoning 50K',
      description: 'Reasoning tasks across diverse domains with chain-of-thought',
      examples: 50000,
      domains: ['General', 'Science', 'Math'],
      tags: ['reasoning', 'cot', 'multi-domain'],
    },
    {
      id: 'ear-medical',
      name: 'AURA Medical Reasoning',
      description: 'Medical reasoning tasks for healthcare AI applications',
      examples: 25000,
      domains: ['Medical', 'Healthcare', 'Biology'],
      tags: ['medical', 'domain-specific', 'reasoning'],
    },
    {
      id: 'ear-legal',
      name: 'AURA Legal Reasoning',
      description: 'Legal document analysis and reasoning tasks',
      examples: 15000,
      domains: ['Legal', 'Contracts', 'Compliance'],
      tags: ['legal', 'documents', 'domain-specific'],
    },
    {
      id: 'ear-code',
      name: 'Code Understanding Dataset',
      description: 'Source code reasoning and software engineering tasks',
      examples: 35000,
      domains: ['Engineering', 'Code', 'Software'],
      tags: ['code', 'engineering', 'technical'],
    },
  ];

  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [expandedDataset, setExpandedDataset] = useState<string | null>(null);

  const allDomains = ['All', ...new Set(datasets.flatMap(d => d.domains))];

  const filteredDatasets = selectedDomain === 'All'
    ? datasets
    : datasets.filter(d => d.domains.includes(selectedDomain));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Explore Datasets</h2>

        {/* Domain Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {allDomains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                selectedDomain === domain
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-gray-200 text-foreground hover:border-primary'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Datasets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDatasets.map((dataset) => (
            <div
              key={dataset.id}
              className="border border-gray-200 rounded-lg hover:shadow-lg transition-all cursor-pointer"
              onClick={() =>
                setExpandedDataset(
                  expandedDataset === dataset.id ? null : dataset.id
                )
              }
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold">{dataset.name}</h3>
                  <span className="text-2xl">
                    {expandedDataset === dataset.id ? '−' : '+'}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {dataset.description}
                </p>

                <div className="mb-3 pb-3 border-b border-gray-100">
                  <div className="text-accent font-bold text-sm">
                    {dataset.examples.toLocaleString()} examples
                  </div>
                </div>

                {expandedDataset === dataset.id && (
                  <div className="pt-3 space-y-3 animate-fade-in">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Domains</h4>
                      <div className="flex flex-wrap gap-2">
                        {dataset.domains.map((domain) => (
                          <span
                            key={domain}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {dataset.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold text-sm">
                      Download Dataset
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
