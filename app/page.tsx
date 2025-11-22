import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactsCTA } from "@/components/layout/contacts-cta";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { About } from "@/components/home/about";
import { Platforms } from "@/components/home/platforms";
import { Contacts } from "@/components/home/contacts";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <HeroCarousel />
                <About />
                <Platforms />
                <Contacts />
            </main>
            <Footer />
            <ContactsCTA />
        </div>
    );
}
