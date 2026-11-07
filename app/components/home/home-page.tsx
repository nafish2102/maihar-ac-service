import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { StickyContactBar } from "../sticky-contact-bar";
import { ApproachSection } from "./approach-section";
import { BrandsSection } from "./brands-section";
import { ContactSection } from "./contact-section";
import { FaqSection } from "./faq-section";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { HowItWorksSection } from "./how-it-works-section";
import { ReviewsSection } from "./reviews-section";
import { ServicesSection } from "./services-section";

export default function HomePage() {
  return (
    <div id="home" className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
        <ApproachSection />
        <HowItWorksSection />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <StickyContactBar />
    </div>
  );
}
