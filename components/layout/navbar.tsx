"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
    BUSINESS_NAME,
    BUSINESS_MOTTO,
    NAVIGATION_LINKS,
} from "@/lib/constants";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <div className="relative size-10">
                            <Image
                                src="/main-logo.png"
                                alt={`${BUSINESS_NAME} logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight leading-tight">
                                {BUSINESS_NAME}
                            </span>
                            <span className="text-xs text-muted-foreground italic">
                                {BUSINESS_MOTTO}
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {NAVIGATION_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="p-2 rounded-md hover:bg-accent transition-colors"
                                    aria-label="Open menu"
                                >
                                    <Menu className="size-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-4 mt-8">
                                    {NAVIGATION_LINKS.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="px-4 py-3 text-lg font-medium rounded-md hover:bg-accent transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
