import Hero from '@/components/hero';
import Features from '@/components/features';
import Overview from '@/components/overview';
import Stats from '@/components/stats';
import DatasetExplorer from '@/components/dataset-explorer';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <DatasetExplorer />
      <Overview />
    </>
  );
}
