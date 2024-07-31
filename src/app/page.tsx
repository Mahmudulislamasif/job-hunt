

import Footer from "@/components/ui-components/Footer";
import Counter from "@/components/ui-components/Home/Counter";
import Deals from "@/components/ui-components/Home/Deals";
import Newsletter from "@/components/ui-components/Home/Newsletter";
import {Hero,FeatureJobs, Navbar} from "@/components/ui-components/Home/page";
import Pricing from "@/components/ui-components/Home/Pricing";
import SocialApps from "@/components/ui-components/Home/SocialApps";
import Testimonial from "@/components/ui-components/Home/Testimonial";
import TrendingJobs from "@/components/ui-components/Home/TrendingJobs";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <TrendingJobs/>
      <FeatureJobs/>
      <Counter/>
      <Deals/>
      <Testimonial/>
      <Pricing/>
      <SocialApps/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}
