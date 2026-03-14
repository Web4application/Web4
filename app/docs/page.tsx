export default function DocsIndexPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Paperweb documentation. Here you'll find everything you need to get started with the AURA framework.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">What is Paperweb?</h2>
          <p className="text-gray-700 mb-4">
            Paperweb is a comprehensive platform for advanced AI reasoning built on the AURA (Advanced Unified Reasoning Architecture) framework.
            It combines state-of-the-art datasets, reasoning engines, and extensible tools to enable intelligent system development.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Advanced chain-of-thought reasoning capabilities</li>
            <li>100K+ reasoning examples across multiple domains</li>
            <li>Extensible architecture with 50+ built-in tools</li>
            <li>Multi-modal support (text, images, 3D, audio)</li>
            <li>Production-ready APIs and SDKs</li>
            <li>Comprehensive documentation and examples</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Quick Start</h2>
          <p className="text-gray-700 mb-4">
            To get started with Paperweb, explore the following sections:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Datasets</strong> - Learn about the AURA dataset collection</li>
            <li><strong>Extensions</strong> - Discover available tools and integrations</li>
            <li><strong>Engines</strong> - Understand the reasoning pipeline</li>
            <li><strong>Integration</strong> - Connect Paperweb to your applications</li>
            <li><strong>Advanced</strong> - Explore advanced topics and optimization</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Installation</h2>
          <p className="text-gray-700 mb-4">
            Install the Paperweb SDK for your preferred language:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Python
pip install paperweb-sdk

# JavaScript/TypeScript
npm install paperweb-sdk`}</pre>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
          <p className="text-gray-700">
            Explore the documentation sections in the sidebar to learn more about Paperweb's capabilities and how to build intelligent applications.
          </p>
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-lg font-bold mb-2">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            Check out our community resources or reach out to the team.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/Web4application"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 font-semibold text-sm"
            >
              Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
