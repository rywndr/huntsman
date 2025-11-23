import {
    BUSINESS_NAME,
    BUSINESS_EMAIL,
    WHATSAPP_NUMBER,
    ESTABLISHED_YEAR,
    PLATFORMS,
} from "@/lib/constants";

export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: BUSINESS_NAME,
        alternateName: "Hunting Gear Indonesia",
        url: "https://hunting-gear.net",
        logo: "https://hunting-gear.net/main-logo.png",
        description:
            "Toko perlengkapan berburu dan outdoor terpercaya di Indonesia sejak 2009. Menyediakan peralatan berburu berkualitas premium, aksesoris outdoor, dan perlengkapan petualangan.",
        foundingDate: ESTABLISHED_YEAR.toString(),
        email: BUSINESS_EMAIL,
        telephone: WHATSAPP_NUMBER,
        address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
            addressLocality: "Indonesia",
        },
        areaServed: {
            "@type": "Country",
            name: "Indonesia",
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: WHATSAPP_NUMBER,
                contactType: "Customer Service",
                availableLanguage: ["Indonesian", "English"],
            },
            {
                "@type": "ContactPoint",
                email: BUSINESS_EMAIL,
                contactType: "Customer Support",
                availableLanguage: ["Indonesian", "English"],
            },
        ],
        sameAs: PLATFORMS.map((platform) => platform.url),
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Store",
        name: BUSINESS_NAME,
        description:
            "Toko perlengkapan berburu dan outdoor terpercaya di Indonesia sejak 2009",
        url: "https://hunting-gear.net",
        telephone: WHATSAPP_NUMBER,
        email: BUSINESS_EMAIL,
        priceRange: "$$",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "09:00",
            closes: "17:00",
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: BUSINESS_NAME,
        url: "https://hunting-gear.net",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate:
                    "https://hunting-gear.net/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
        inLanguage: ["id-ID", "en-US"],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
