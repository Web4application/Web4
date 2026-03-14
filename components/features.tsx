export default function Features() {
  const features = [
    {
      title: 'Advanced Reasoning',
      description: 'Chain-of-thought reasoning with system-2 intelligence for complex problem solving.',
      icon: '🧠',
    },
    {
      title: 'Rich Datasets',
      description: 'Comprehensive datasets spanning text, images, 3D models, and multimodal content.',
      icon: '📊',
    },
    {
      title: 'Extensible Architecture',
      description: 'Plug-and-play extensions for custom logic, tools, and domain-specific knowledge.',
      icon: '🔧',
    },
    {
      title: 'RAG & Search',
      description: 'Integrated retrieval-augmented generation with web search capabilities.',
      icon: '🔍',
    },
    {
      title: 'Multi-Domain',
      description: 'Support for legal, medical, finance, science, engineering, and creative domains.',
      icon: '🌐',
    },
    {
      title: 'Production Ready',
      description: 'Scalable, well-tested components designed for enterprise applications.',
      icon: '⚡',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build intelligent systems with advanced reasoning capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
