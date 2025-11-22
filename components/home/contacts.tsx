"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
    BUSINESS_EMAIL,
    WHATSAPP_NUMBER,
    WHATSAPP_LINK,
} from "@/lib/constants";

export function Contacts() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-4">
                        {t("contact.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("contact.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Email Contact */}
                    <a
                        href={`mailto:${BUSINESS_EMAIL}`}
                        className="group flex flex-col items-center gap-4 p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                    >
                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Mail className="size-8 text-primary" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                {t("contact.email.title")}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3">
                                {t("contact.email.description")}
                            </p>
                            <p className="text-primary font-medium">
                                {BUSINESS_EMAIL}
                            </p>
                        </div>
                    </a>

                    {/* WhatsApp Contact */}
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                    >
                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Image
                                src="/whatsapp.png"
                                alt="WhatsApp"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                {t("contact.whatsapp.title")}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3">
                                {t("contact.whatsapp.description")}
                            </p>
                            <p className="text-primary font-medium">
                                {WHATSAPP_NUMBER}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
