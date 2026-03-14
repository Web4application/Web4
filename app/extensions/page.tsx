import Link from 'next/link';

export default function ExtensionsPage() {
  const extensions = [
    {
      name: 'Web Search Integration',
      category: 'Search & Retrieval',
      description: 'Search the web and integrate results into reasoning chains. Enables agents to fetch real-time information.',
      status: 'stable',
      icon: '🔍',
    },
    {
      name: 'Code Execution Engine',
      category: 'Development',
      description: 'Execute and validate code (Python, JavaScript, etc.) as part of reasoning tasks. Full sandbox support.',
      status: 'stable',
      icon: '⚙️',
    },
    {
      name: 'Document Processing',
      category: 'Data Processing',
      description: 'Extract and process information from PDFs, Word, Excel, and text documents. OCR support included.',
      status: 'stable',
      icon: '📄',
    },
    {
      name: 'Mathematical Solver',
      category: 'Reasoning',
      description: 'Advanced mathematical reasoning, symbolic computation, and scientific calculations with step-by-step solutions.',
      status: 'stable',
      icon: '∑',
    },
    {
      name: 'Image Analysis & Vision',
      category: 'Multimodal',
      description: 'Analyze images, perform OCR, object detection, and integrate visual understanding into reasoning.',
      status: 'stable',
      icon: '🖼️',
    },
    {
      name: '3D Model Processing',
      category: 'Multimodal',
      description: 'Process and analyze 3D models, point clouds, and geometric data. GLB/GLTF format support.',
      status: 'stable',
      icon: '📦',
    },
    {
      name: 'Audio Processing',
      category: 'Multimodal',
      description: 'Speech-to-text, audio analysis, and sound processing with multiple language support.',
      status: 'stable',
      icon: '🔊',
    },
    {
      name: 'Video Analysis',
      category: 'Multimodal',
      description: 'Frame extraction, video processing, and temporal reasoning from video content.',
      status: 'beta',
      icon: '🎥',
    },
    {
      name: 'Knowledge Graph Builder',
      category: 'Knowledge Management',
      description: 'Build, query, and traverse knowledge graphs from text. Semantic relationship extraction.',
      status: 'stable',
      icon: '🧬',
    },
    {
      name: 'RAG Pipeline',
      category: 'Search & Retrieval',
      description: 'Retrieval-Augmented Generation pipeline with vector search and semantic ranking.',
      status: 'stable',
      icon: '🔗',
    },
    {
      name: 'Software Engineering Tools',
      category: 'Development',
      description: 'Code analysis, debugging, refactoring, and software architecture understanding.',
      status: 'stable',
      icon: '💻',
    },
    {
      name: 'Legal Document Analyzer',
      category: 'Domain-Specific',
      description: 'Analyze contracts, legal documents, and compliance requirements with specialized reasoning.',
      status: 'stable',
      icon: '⚖️',
    },
    {
      name: 'Medical & Healthcare AI',
      category: 'Domain-Specific',
      description: 'Medical literature analysis, clinical reasoning, and healthcare document processing.',
      status: 'beta',
      icon: '⚕️',
    },
    {
      name: 'Scientific Research Tools',
      category: 'Domain-Specific',
      description: 'Chemistry, biology, physics, and climate science specialized reasoning and calculations.',
      status: 'stable',
      icon: '🔬',
    },
    {
      name: 'Financial Analysis Engine',
      category: 'Domain-Specific',
      description: 'Financial data analysis, market research, and investment reasoning capabilities.',
      status: 'stable',
      icon: '📈',
    },
    {
      name: 'Creative Content Tools',
      category: 'Content Creation',
      description: 'Art, design, music, and creative content generation with style understanding.',
      status: 'beta',
      icon: '🎨',
    },
    {
      name: 'Chain-of-Thought Reasoning',
      category: 'Reasoning',
      description: 'System-2 thinking with step-by-step problem deconstruction and reasoning traces.',
      status: 'stable',
      icon: '🧠',
    },
    {
      name: 'Tool Use & Composition',
      category: 'Orchestration',
      description: 'Dynamic tool selection, chaining, and composition for complex multi-step tasks.',
      status: 'stable',
      icon: '🔧',
    },
    {
      name: 'Edge AI Deployment',
      category: 'Infrastructure',
      description: 'Optimize and deploy models for edge devices with reduced latency and offline support.',
      status: 'stable',
      icon: '📡',
    },
    {
      name: 'Agentic Framework',
      category: 'Orchestration',
      description: 'Complete agent orchestration with planning, tool use, and self-reflection capabilities.',
      status: 'stable',
      icon: '🤖',
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
          {['All', 'Search & Retrieval', 'Development', 'Reasoning', 'Multimodal', 'Domain-Specific', 'Orchestration'].map((tag) => (
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
