import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, BUSINESS_MOTTO } from "@/lib/constants";
import { I18nProvider } from "@/components/providers/i18n-provider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: `${BUSINESS_NAME} - ${BUSINESS_MOTTO}`,
    description:
        "Toko perlengkapan berburu dan outdoor terpercaya sejak 2009. Menyediakan peralatan berburu berkualitas, aksesoris outdoor, dan perlengkapan petualangan untuk berbagai kebutuhan.",
    keywords: [
        "perlengkapan berburu",
        "peralatan outdoor",
        "toko hunting gear Indonesia",
        "aksesoris berburu",
        "perlengkapan camping",
        "outdoor gear Indonesia",
        "hunting accessories",
    ],
    authors: [{ name: BUSINESS_NAME }],
    openGraph: {
        title: `${BUSINESS_NAME} - ${BUSINESS_MOTTO}`,
        description:
            "Toko perlengkapan berburu dan outdoor terpercaya di Indonesia sejak 2009. Peralatan berkualitas premium untuk petualangan Anda.",
        type: "website",
        locale: "id_ID",
    },
    twitter: {
        card: "summary_large_image",
        title: `${BUSINESS_NAME} - ${BUSINESS_MOTTO}`,
        description:
            "Toko perlengkapan berburu dan outdoor terpercaya di Indonesia sejak 2009.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased`}>
                <I18nProvider>{children}</I18nProvider>
            </body>
        </html>
    );
}
