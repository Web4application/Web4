import Link from 'next/link';

export default function ExtensionsPage() {
  const extensions = [
    {
      name: 'Web Search Integration',
      category: 'Search',
      description: 'Search the web and integrate results into reasoning chains.',
      status: 'stable',
      icon: '🔍',
    },
    {
      name: 'Code Execution Engine',
      category: 'Tools',
      description: 'Execute and validate code as part of reasoning tasks.',
      status: 'stable',
      icon: '⚙️',
    },
    {
      name: 'Document Processing',
      category: 'Data',
      description: 'Extract and process information from various document formats.',
      status: 'stable',
      icon: '📄',
    },
    {
      name: 'Math Solver',
      category: 'Reasoning',
      description: 'Advanced mathematical reasoning and symbolic computation.',
      status: 'beta',
      icon: '∑',
    },
    {
      name: 'Image Analysis',
      category: 'Vision',
      description: 'Analyze images and integrate visual understanding.',
      status: 'beta',
      icon: '🖼️',
    },
    {
      name: 'Knowledge Graph Builder',
      category: 'Knowledge',
      description: 'Build and query knowledge graphs from text.',
      status: 'experimental',
      icon: '🧬',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Extensions</h1>
          <p className="text-lg text-gray-600">
            Extend Paperweb with powerful tools and integrations.
          </p>
        </div>

        <div className="mb-8 flex gap-2 flex-wrap">
          {['All', 'Search', 'Tools', 'Data', 'Reasoning', 'Vision'].map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                tag === 'All'
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-gray-200 text-foreground hover:border-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((ext, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{ext.icon}</div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded ${
                    ext.status === 'stable'
                      ? 'bg-green-100 text-green-800'
                      : ext.status === 'beta'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {ext.status}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2">{ext.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{ext.category}</p>
              <p className="text-gray-600 mb-6 flex-grow">{ext.description}</p>

              <Link
                href="#"
                className="text-primary font-semibold text-sm hover:gap-2 inline-flex items-center gap-1"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Create Your Own Extension</h2>
          <p className="text-gray-700 mb-4">
            Building an extension for Paperweb is simple. Follow our guide to create and publish custom extensions.
          </p>
          <Link
            href="/docs"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold inline-block"
          >
            View Extension Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
