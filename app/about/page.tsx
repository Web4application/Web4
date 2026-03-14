import Link from 'next/link';

export default function AboutPage() {
  const team = [
    { name: 'Research & AI', role: 'Core Architecture', icon: '🧠' },
    { name: 'Data Engineering', role: 'Dataset Management', icon: '📊' },
    { name: 'Infrastructure', role: 'Scaling & Performance', icon: '⚙️' },
    { name: 'Community', role: 'Support & Documentation', icon: '👥' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Paperweb & AURA</h1>
          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              Paperweb represents the culmination of advanced research in artificial intelligence reasoning,
              bringing together state-of-the-art datasets, reasoning engines, and tools to create a
              comprehensive framework for building intelligent systems.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To democratize advanced AI reasoning capabilities and enable developers worldwide to build
              intelligent applications that understand context, reason through complex problems, and provide
              meaningful insights.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in open-source innovation and community-driven development, making cutting-edge
              AI research accessible to everyone.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Key Numbers</h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-gray-600">Reasoning Examples</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-gray-600">Extensions & Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-gray-600">Domain Specializations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            The future of AI lies in systems that can reason, adapt, and learn across domains. Paperweb
            provides the foundation for this future by offering researchers, developers, and organizations
            the tools they need to push the boundaries of what's possible in artificial intelligence.
          </p>
        </div>

        {/* Team Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Powers Paperweb</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((area, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all text-center"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold mb-2">{area.name}</h3>
                <p className="text-gray-600 text-sm">{area.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Core Systems</h3>
              <ul className="space-y-2 text-gray-600">
                <li>- Advanced Reasoning Engines</li>
                <li>- XLSL Processing Pipeline</li>
                <li>- Graph-based Knowledge Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Data & Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>- Curated Datasets</li>
                <li>- Fine-tuning Frameworks</li>
                <li>- Evaluation Metrics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Integration & APIs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>- RESTful APIs</li>
                <li>- Python & JS SDKs</li>
                <li>- Webhook Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of developers building the future with Paperweb.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/docs"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/Web4application"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 font-semibold"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
