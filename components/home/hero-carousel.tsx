"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function HeroCarousel() {
    const { t } = useTranslation();

    const carouselSlides = [
        {
            src: "/hero-carousel/carousel-1.jpg",
            alt: t("hero.slide1.subtitle"),
            title: t("hero.slide1.title"),
            subtitle: t("hero.slide1.subtitle"),
        },
        {
            src: "/hero-carousel/carousel-2.jpg",
            alt: t("hero.slide2.subtitle"),
            title: t("hero.slide2.title"),
            subtitle: t("hero.slide2.subtitle"),
        },
        {
            src: "/hero-carousel/carousel-3.jpg",
            alt: t("hero.slide3.subtitle"),
            title: t("hero.slide3.title"),
            subtitle: t("hero.slide3.subtitle"),
        },
    ];

    return (
        <section id="home" className="w-full pt-16">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    }),
                ]}
                className="w-full relative group"
            >
                <CarouselContent className="ml-0">
                    {carouselSlides.map((image, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Text Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
                                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 text-center animate-fade-in">
                                        {image.title}
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-center max-w-2xl animate-fade-in-delay">
                                        {image.subtitle}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows */}
                <CarouselPrevious className="left-2 md:left-4 size-10 md:size-12 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CarouselNext className="right-2 md:right-4 size-10 md:size-12 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Carousel>
        </section>
    );
}
