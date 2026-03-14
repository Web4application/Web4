import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
              The <span className="text-primary">Intelligence Web</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-pretty">
              Paperweb is a comprehensive framework for advanced AI reasoning, powered by AURA. 
              Explore state-of-the-art datasets, extensions, and intelligent systems designed for 
              next-generation AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="space-y-4">
                  <div className="h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center px-4">
                    <span className="text-accent font-bold">◆</span>
                    <span className="ml-2 text-gray-700 font-semibold">AURA Framework</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/6"></div>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="h-2 bg-primary/10 rounded"></div>
                    <div className="h-2 bg-primary/20 rounded w-5/6"></div>
                    <div className="h-2 bg-primary/30 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
