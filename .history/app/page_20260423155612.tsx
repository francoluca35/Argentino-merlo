import { NavPageAnchors } from "@/components/nav-page-anchors";
import { SiteNav } from "@/components/site-nav";
import { ClubSection } from "@/components/sections/calendar-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InferioresSection } from "@/components/sections/inferiores-section";
import { NewsSection } from "@/components/sections/news-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SponsorSection } from "@/components/sections/SponsorSection";
import { StoreSection } from "@/components/sections/store-section";

export default function HomePage() {
	return (
		<>
			<SiteNav />
			<main>
				<HeroSection />
				<NewsSection />
				<InferioresSection />
				<ClubSection />
				<SponsorsSection />
				<StoreSection />
				<NavPageAnchors />
			</main>
			<SiteFooter />
		</>
	);
}
