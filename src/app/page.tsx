

import Layout from "@/components/layouts/Layout";
import Footer from "@/components/ui-components/Footer";
import Counter from "@/components/ui-components/Home/Counter";
import Deals from "@/components/ui-components/Home/Deals";
import Newsletter from "@/components/ui-components/Home/Newsletter";
import {Hero,FeatureJobs, Navbar} from "@/components/ui-components/Home/page";
import Pricing from "@/components/ui-components/Home/Pricing";
import SocialApps from "@/components/ui-components/Home/SocialApps";
import Testimonial from "@/components/ui-components/Home/Testimonial";
import TestimonialTwo from "@/components/ui-components/Home/TestimonialTwo";
import TrendingJobs from "@/components/ui-components/Home/TrendingJobs";

export default function Home() {
  return (
    <main>
      <Layout>
      <Hero/>
      <TrendingJobs/>
      <FeatureJobs/>
      <Counter/>
      <Deals/>
      <Testimonial/>
      <TestimonialTwo/>
      <Pricing/>
      <SocialApps/>
      <Newsletter/>
      </Layout>
    </main>
  );
}
