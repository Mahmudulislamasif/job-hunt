import {Hero,FeatureJobs, Navbar} from "@/components/ui-components/Home/page";
import TrendingJobs from "@/components/ui-components/Home/TrendingJobs";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <TrendingJobs/>
      <FeatureJobs/>
    </main>
  );
}
