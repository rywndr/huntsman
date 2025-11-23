import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, BUSINESS_MOTTO } from "@/lib/constants";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://hunting-gear.net"),
    title: {
        default: `${BUSINESS_NAME} - ${BUSINESS_MOTTO}`,
        template: `%s | ${BUSINESS_NAME}`,
    },
    description:
        "Toko perlengkapan berburu dan outdoor terpercaya di Indonesia sejak 2009. Menyediakan peralatan berburu berkualitas premium, aksesoris outdoor, dan perlengkapan petualangan untuk berbagai kebutuhan.",
    keywords: [
        "perlengkapan berburu",
        "peralatan outdoor",
        "toko hunting gear Indonesia",
        "aksesoris berburu",
        "perlengkapan camping",
        "outdoor gear Indonesia",
        "hunting accessories",
        "hunting gear shopee",
        "hunting gear tokopedia",
        "hunting gear lazada",
    ],
    authors: [{ name: BUSINESS_NAME }],
    creator: BUSINESS_NAME,
    publisher: BUSINESS_NAME,
    alternates: {
        canonical: "/",
        languages: {
            "id-ID": "/",
            "en-US": "/",
        },
    },
    openGraph: {
        title: `${BUSINESS_NAME} - ${BUSINESS_MOTTO}`,
        description:
            "Toko perlengkapan berburu dan outdoor terpercaya di Indonesia sejak 2009. Peralatan berkualitas premium untuk petualangan Anda.",
        type: "website",
        locale: "id_ID",
        url: "https://hunting-gear.net",
        siteName: BUSINESS_NAME,
        images: [
            {
                url: "/about.jpg",
                width: 1920,
                height: 1080,
                alt: `${BUSINESS_NAME} - Perlengkapan berburu berkualitas`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${BUSINESS_NAME} - ${BUSINESS_MOTTO}`,
        description:
            "Toko perlengkapan berburu dan outdoor terpercaya di Indonesia sejak 2009.",
        images: ["/about.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <head>
                <StructuredData />
            </head>
            <body className={`${inter.variable} font-sans antialiased`}>
                <I18nProvider>{children}</I18nProvider>
            </body>
        </html>
    );
}
