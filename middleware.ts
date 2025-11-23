import { NextResponse } from "next/server";

export function middleware() {
    const response = NextResponse.next();

    // Content Security Policy
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https:;
        font-src 'self' data:;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
        connect-src 'self' https://cdn.vercel-insights.com;
    `
        .replace(/\s{2,}/g, " ")
        .trim();

    // Set CSP header
    response.headers.set("Content-Security-Policy", cspHeader);

    // Additional security headers
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=()",
    );

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
            missing: [
                { type: "header", key: "next-router-prefetch" },
                { type: "header", key: "purpose", value: "prefetch" },
            ],
        },
    ],
};
