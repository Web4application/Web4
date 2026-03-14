'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubscribed(true);
    setEmail('');
    setLoading(false);

    // Reset after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg text-gray-600 mb-8">
          Get the latest news, updates, and releases from the Paperweb project.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
              subscribed
                ? 'bg-green-500 text-white'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            } ${loading ? 'opacity-70' : ''}`}
          >
            {loading ? 'Subscribing...' : subscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
