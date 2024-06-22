import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
	return (
		<main className="min-h-screen container mx-auto">
			<div className="flex items-center flex-col justify-between lg:p-6 p-3 pt-5 relative gap-20">
				<HeroSection />
				<AboutUs />
				<ServicesSection />
				<ContactForm />
			</div>
		</main>
	);
}
