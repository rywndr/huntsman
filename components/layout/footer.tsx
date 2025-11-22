"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
    BUSINESS_NAME,
    BUSINESS_EMAIL,
    WHATSAPP_NUMBER,
    ESTABLISHED_YEAR,
    BUSINESS_HOURS,
} from "@/lib/constants";

export function Footer() {
    const { t } = useTranslation();

    const navigationLinks = [
        { name: t("nav.home"), href: "#home" },
        { name: t("nav.about"), href: "#about" },
        { name: t("nav.platforms"), href: "#platforms" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    const platforms = [
        { name: "Shopee", url: "#" },
        { name: "Tokopedia", url: "#" },
        { name: "Lazada", url: "#" },
        { name: "Bukalapak", url: "#" },
    ];

    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Business Logo and Name */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit"
                        >
                            <div className="relative size-10">
                                <Image
                                    src="/main-logo.png"
                                    alt={`${BUSINESS_NAME} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                {BUSINESS_NAME}
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {t("footer.description")}
                        </p>
                        <div className="pt-2">
                            <p className="text-sm font-medium text-foreground">
                                {t("footer.established")}{" "}
                                <span className="font-bold text-primary">
                                    {ESTABLISHED_YEAR}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">
                            {t("footer.quickLinks")}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-sm mb-3">
                                    {t("footer.navigation")}
                                </h4>
                                <ul className="space-y-2">
                                    {navigationLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-sm mb-3">
                                    {t("footer.platforms")}
                                </h4>
                                <ul className="space-y-2">
                                    {platforms.map((platform) => (
                                        <li key={platform.name}>
                                            <a
                                                href={platform.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {platform.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">
                            {t("footer.openingHours")}
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">
                                    {t("footer.everyday")}
                                </span>
                                <span className="font-medium">
                                    {BUSINESS_HOURS}
                                </span>
                            </div>
                        </div>
                        <div className="pt-4 space-y-2">
                            <p className="text-sm font-medium">
                                {t("footer.contactTitle")}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {BUSINESS_EMAIL}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {WHATSAPP_NUMBER}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {BUSINESS_NAME}.{" "}
                        {t("footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
