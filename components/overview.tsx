import Link from 'next/link';

export default function Overview() {
  const sections = [
    {
      title: 'Datasets',
      description: 'Access the AURA dataset collection with reasoning tasks across multiple domains.',
      items: ['Edge-Agent-Reasoning', 'Text & Images', 'Chain-of-Thought', '100K+ examples'],
      link: '/docs/datasets',
    },
    {
      title: 'Extensions',
      description: 'Extend Paperweb with custom logic, tools, and domain-specific knowledge.',
      items: ['Plugin System', 'Tool Integration', 'Custom Reasoning', 'Web Search'],
      link: '/extensions',
    },
    {
      title: 'Engines',
      description: 'Powerful processing engines for reasoning, inference, and data transformation.',
      items: ['XLSL Engine', 'Pipelines', 'Optimization', 'Streaming'],
      link: '/docs/engines',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Components</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the fundamental building blocks of the Paperweb ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-6">{section.description}</p>

              <ul className="space-y-2 mb-6">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={section.link}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Explore
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
