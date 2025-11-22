"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    BUSINESS_EMAIL,
    WHATSAPP_NUMBER,
    WHATSAPP_LINK,
} from "@/lib/constants";

export function ContactsCTA() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    size="icon-lg"
                    className="fixed bottom-6 right-6 z-40 size-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    aria-label="Hubungi kami"
                >
                    <MessageCircle className="size-6" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Hubungi Kami</DialogTitle>
                    <DialogDescription>
                        Pilih cara yang Anda inginkan untuk menghubungi kami
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {/* Email Option */}
                    <a
                        href={`mailto:${BUSINESS_EMAIL}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors group"
                    >
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Mail className="size-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-1">Email</h4>
                            <p className="text-sm text-muted-foreground">
                                {BUSINESS_EMAIL}
                            </p>
                        </div>
                    </a>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors group"
                    >
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Image
                                src="/whatsapp.png"
                                alt="WhatsApp"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-1">WhatsApp</h4>
                            <p className="text-sm text-muted-foreground">
                                {WHATSAPP_NUMBER}
                            </p>
                        </div>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}
