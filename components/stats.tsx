'use client';

import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export default function Stats() {
  const [stats] = useState<Stat[]>([
    { label: 'Reasoning Examples', value: '100', suffix: 'K+' },
    { label: 'Active Extensions', value: '50', suffix: '+' },
    { label: 'Supported Domains', value: '10', suffix: '+' },
    { label: 'Global Users', value: '10', suffix: 'K+' },
  ]);

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xl md:text-2xl text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
