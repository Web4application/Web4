import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Paperweb</h3>
            <p className="text-gray-600 text-sm">
              The Intelligence Web powered by AURA framework for advanced AI reasoning.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-primary">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/extensions" className="text-gray-600 hover:text-primary">
                  Extensions
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="text-gray-600 hover:text-primary">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About AURA
                </Link>
              </li>
              <li>
                <a
                  href="https://huggingface.co/datasets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  Datasets
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Web4application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} Paperweb. All rights reserved. Licensed under MIT.
          </p>
        </div>
      </div>
    </footer>
  );
}
