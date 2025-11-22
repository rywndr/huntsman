"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BUSINESS_NAME, ESTABLISHED_YEAR } from "@/lib/constants";

export function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
                            {t("about.title", { businessName: BUSINESS_NAME })}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t("about.intro", {
                                businessName: BUSINESS_NAME,
                                year: ESTABLISHED_YEAR,
                            })}
                        </p>
                        <p className="leading-7 text-muted-foreground">
                            {t("about.paragraph1")}
                        </p>
                        <p className="leading-7 text-muted-foreground">
                            {t("about.paragraph2", {
                                businessName: BUSINESS_NAME,
                            })}
                        </p>
                        <div className="pt-4">
                            <h3 className="text-xl font-semibold mb-3">
                                {t("about.whyTitle")}
                            </h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>{t("about.reason1")}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>{t("about.reason2")}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>{t("about.reason3")}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>{t("about.reason4")}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="/about.jpg"
                            alt="Hunting Gear - Perlengkapan berburu berkualitas"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
