import Image from "next/image";
import { BUSINESS_NAME, ESTABLISHED_YEAR } from "@/lib/constants";

export function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
                            Tentang {BUSINESS_NAME}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Selamat datang di {BUSINESS_NAME}. Sejak tahun{" "}
                            <span className="font-semibold text-foreground">
                                {ESTABLISHED_YEAR}
                            </span>
                            , kami telah berkomitmen peralatan bagi para pemburu
                            dan petualang di seluruh Nusantara.
                        </p>
                        <p className="leading-7 text-muted-foreground">
                            Dengan pengalaman lebih dari satu dekade di industri
                            , kami memahami kebutuhan para pemburu dan petualang
                            Indonesia. Dengan koleksi produk kami Anda
                            mendapatkan peralatan yang berkualitas, dan durable
                            untuk menghadapi situasi.
                        </p>
                        <p className="leading-7 text-muted-foreground">
                            Baik Anda seorang pemburu berpengalaman atau baru
                            memulai perjalanan petualangan Anda, {BUSINESS_NAME}{" "}
                            siap melengkapi Anda dengan peralatan yang tepat.
                        </p>
                    </div>

                    <div className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="/about.jpg"
                            alt="Hunting Gear"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
