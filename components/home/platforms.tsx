"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ESTABLISHED_YEAR, PLATFORMS } from "@/lib/constants";

export function Platforms() {
    const { t } = useTranslation();

    return (
        <section
            id="platforms"
            className="py-16 md:py-24 bg-background relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                            {t("platforms.badge")}
                        </span>
                    </div>
                    <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-4">
                        {t("platforms.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("platforms.description", { year: ESTABLISHED_YEAR })}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PLATFORMS.map((platform) => (
                        <div
                            key={platform.name}
                            className="group border-2 rounded-xl p-6 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-6">
                                <div className="shrink-0">
                                    {platform.name === "Tokopedia" ? (
                                        <div className="flex items-center gap-2">
                                            <div className="relative w-12 h-12">
                                                <Image
                                                    src={platform.mascot!}
                                                    alt={`${platform.name} mascot`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="relative w-20 h-12">
                                                <Image
                                                    src={platform.logo}
                                                    alt={`${platform.name} logo`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative w-24 h-16 flex items-center justify-center">
                                            <Image
                                                src={platform.logo}
                                                alt={`${platform.name} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0 flex flex-col">
                                    <h3 className="text-lg font-semibold mb-1">
                                        {platform.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {platform.name === "Shopee" &&
                                            t("platforms.shopee")}
                                        {platform.name === "Tokopedia" &&
                                            t("platforms.tokopedia")}
                                        {platform.name === "Lazada" &&
                                            t("platforms.lazada")}
                                        {platform.name === "TikTok Shop" &&
                                            t("platforms.tiktokShop")}
                                        {platform.name === "Blibli" &&
                                            t("platforms.blibli")}
                                    </p>
                                    {platform.notice ? (
                                        <p className="text-xs text-muted-foreground mb-3 italic">
                                            * {t("platforms.tiktokNotice")}
                                        </p>
                                    ) : (
                                        <div className="mb-3 h-5" />
                                    )}
                                    <Button
                                        asChild
                                        size="sm"
                                        className="w-full sm:w-auto mt-auto"
                                    >
                                        <a
                                            href={platform.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2"
                                        >
                                            {t("platforms.visitStore")}
                                            <ExternalLink className="size-3.5" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground">
                        {t("platforms.trustBadge", { year: ESTABLISHED_YEAR })}
                    </p>
                </div>
            </div>
        </section>
    );
}
