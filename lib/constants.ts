// Business info
export const BUSINESS_NAME = "Hunting Gear";
export const BUSINESS_MOTTO = "Art of Hunting";
export const ESTABLISHED_YEAR = 2009;

// Contact info
export const BUSINESS_EMAIL = "info@huntinggear.com";
export const WHATSAPP_NUMBER = "+62 823 8519 9720";
export const WHATSAPP_LINK = "https://wa.me/6282385199720";

// Platforms
export const PLATFORMS = [
    {
        name: "Shopee",
        logo: "/platforms/shopee.png",
        description: "Belanja produk kami di Shopee",
        url: "https://shopee.co.id/shop/644452519",
    },
    {
        name: "Tokopedia",
        logo: "/platforms/tokopedia-logo.png",
        mascot: "/platforms/tokopedia-mascot.png",
        description: "Temukan kami di Tokopedia",
        url: "https://www.tokopedia.com/hunting-gear",
    },
    {
        name: "Lazada",
        logo: "/platforms/lazada.png",
        description: "Kunjungi toko kami di Lazada",
        url: "https://www.lazada.co.id/shop/hunting-gr/",
    },
    {
        name: "Bukalapak",
        logo: "/platforms/bukalapak.png",
        description: "Belanja di Bukalapak",
        url: "#",
    },
    {
        name: "TikTok Shop",
        logo: "/platforms/tiktok-shop.png",
        description: "Jelajahi TikTok Shop kami",
        url: "#",
    },
    {
        name: "Blibli",
        logo: "/platforms/blibli.png",
        description: "Temukan produk kami di Blibli",
        url: "#",
    },
] as const;

// Nav
export const NAVIGATION_LINKS = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Platform", href: "#platforms" },
    { name: "Kontak", href: "#contact" },
] as const;

// Business ops
export const BUSINESS_HOURS = "9:00 AM - 5:00 PM";
export const BUSINESS_DAYS = "Setiap Hari";

// Hero Carousel
export const HERO_SLIDES = [
    {
        src: "/hero-carousel/carousel-1.jpg",
        alt: "Peralatan berburu berkualitas premium",
        title: "Peralatan Berburu Premium",
        subtitle: "Perlengkapan berkualitas untuk setiap petualangan",
    },
    {
        src: "/hero-carousel/carousel-2.jpg",
        alt: "Perlengkapan outdoor essentials",
        title: "Perlengkapan Outdoor",
        subtitle: "Tahan lama untuk segala kondisi",
    },
    {
        src: "/hero-carousel/carousel-3.jpg",
        alt: "Berburu sejak 2009",
        title: "Sejak 2009",
        subtitle: "Lebih dari 15 tahun melayani komunitas berburu",
    },
] as const;
