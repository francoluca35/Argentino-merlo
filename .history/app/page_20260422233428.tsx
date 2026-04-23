import { NavPageAnchors } from "@/components/nav-page-anchors";
import { SiteNav } from "@/components/site-nav";
import { CalendarSection } from "@/components/sections/calendar-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InferioresSection } from "@/components/sections/inferiores-section";
import { NewsSection } from "@/components/sections/news-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SquadSection } from "@/components/sections/squad-section";
import { StatsSection } from "@/components/sections/stats-section";
import { StoreSection } from "@/components/sections/store-section";

export default function HomePage() {
	return (
		<>
			<SiteNav />
			<main>
				<HeroSection />
				<StatsSection />
				<NewsSection />
				<InferioresSection />
				<CalendarSection />
				<SquadSection />
				<StoreSection />
				<NavPageAnchors />
			</main>
			<SiteFooter />
		</>
	);
}
