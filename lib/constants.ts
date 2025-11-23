// Business info
export const BUSINESS_NAME = "Hunting Gear";
export const BUSINESS_MOTTO = "Art of Hunting";
export const ESTABLISHED_YEAR = 2009;

// Contact info
export const BUSINESS_EMAIL = "info@hunting-gear.net";
export const WHATSAPP_NUMBER = "+62 823 8519 9720";
export const WHATSAPP_LINK = "https://wa.me/6282385199720";

// Platforms
export const PLATFORMS = [
    {
        name: "Shopee",
        logo: "/platforms/shopee.png",
        url: "https://shopee.co.id/shop/644452519",
        notice: false,
    },
    {
        name: "Tokopedia",
        logo: "/platforms/tokopedia-logo.png",
        mascot: "/platforms/tokopedia-mascot.png",
        url: "https://www.tokopedia.com/hunting-gear",
        notice: false,
    },
    {
        name: "Lazada",
        logo: "/platforms/lazada.png",
        url: "https://www.lazada.co.id/shop/hunting-gr/",
        notice: false,
    },
    {
        name: "TikTok Shop",
        logo: "/platforms/tiktok-shop.png",
        url: "https://vt.tiktok.com/ZSfS6EAfJ/?page=Mall",
        notice: true,
    },
    {
        name: "Blibli",
        logo: "/platforms/blibli.png",
        url: "https://blibli.onelink.me/GNtk/vpfdqtuq",
        notice: false,
    },
] as const;

// Navigation Links (keys for i18n)
export const NAVIGATION_LINKS = [
    { href: "#home" },
    { href: "#about" },
    { href: "#platforms" },
    { href: "#contact" },
] as const;

// Business ops
export const BUSINESS_HOURS = "9:00 AM - 5:00 PM";
export const BUSINESS_DAYS = "Setiap Hari";

// Hero Carousel (text from i18n)
export const HERO_SLIDES = [
    {
        src: "/hero-carousel/carousel-1.jpg",
    },
    {
        src: "/hero-carousel/carousel-2.jpg",
    },
    {
        src: "/hero-carousel/carousel-3.jpg",
    },
] as const;
