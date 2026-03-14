import Link from 'next/link';

export default function APIPage() {
  const endpoints = [
    {
      method: 'POST',
      path: '/reason',
      description: 'Execute a reasoning task with chain-of-thought processing.',
      status: '200 OK',
    },
    {
      method: 'GET',
      path: '/datasets',
      description: 'List available datasets and their metadata.',
      status: '200 OK',
    },
    {
      method: 'POST',
      path: '/search',
      description: 'Perform web search and retrieve ranked results.',
      status: '200 OK',
    },
    {
      method: 'GET',
      path: '/extensions',
      description: 'Discover available extensions and tools.',
      status: '200 OK',
    },
    {
      method: 'POST',
      path: '/execute-extension',
      description: 'Execute a specific extension with provided parameters.',
      status: '200 OK',
    },
    {
      method: 'GET',
      path: '/status',
      description: 'Check system health and performance metrics.',
      status: '200 OK',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">API Reference</h1>
          <p className="text-lg text-gray-600">
            Integrate Paperweb into your applications using our comprehensive REST API.
          </p>
        </div>

        {/* Authentication */}
        <div className="mb-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Authentication</h2>
          <p className="text-gray-600 mb-4">
            All API requests require authentication using your API key. Include it in the request header:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <code>Authorization: Bearer YOUR_API_KEY</code>
          </div>
        </div>

        {/* Endpoints */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded text-white ${
                      endpoint.method === 'GET'
                        ? 'bg-blue-500'
                        : endpoint.method === 'POST'
                        ? 'bg-green-500'
                        : 'bg-gray-500'
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="text-primary font-mono font-semibold">{endpoint.path}</code>
                  <span className="ml-auto px-3 py-1 text-xs bg-green-100 text-green-800 rounded font-semibold">
                    {endpoint.status}
                  </span>
                </div>
                <p className="text-gray-600">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Response Format */}
        <div className="mb-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Response Format</h2>
          <p className="text-gray-600 mb-4">All responses are returned in JSON format:</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`{
  "success": true,
  "data": { ... },
  "timestamp": "2024-03-14T10:30:00Z",
  "request_id": "req_abc123"
}`}</pre>
          </div>
        </div>

        {/* Error Handling */}
        <div className="mb-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
          <p className="text-gray-600 mb-4">
            Error responses include a status code and error message:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`{
  "success": false,
  "error": "Invalid API key",
  "error_code": "AUTH_ERROR",
  "status_code": 401
}`}</pre>
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Official SDKs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">Python SDK</h3>
              <p className="text-gray-600 mb-4">
                Official Python client library with full API support.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm mb-4 overflow-x-auto">
                <code>pip install paperweb-sdk</code>
              </div>
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                View Documentation →
              </a>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2">JavaScript SDK</h3>
              <p className="text-gray-600 mb-4">
                JavaScript/TypeScript client for browser and Node.js.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm mb-4 overflow-x-auto">
                <code>npm install paperweb-sdk</code>
              </div>
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                View Documentation →
              </a>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="text-center p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-6">
            Check our documentation or reach out to our support team.
          </p>
          <Link
            href="/docs"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold inline-block"
          >
            View Full Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
