import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import { serviceIcons } from "@/lib/service-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Custom Software Development & Cloud Solutions",
  description: "Comprehensive software solutions including custom development, Azure cloud consulting, DevOps services, AI solutions, and automation. Explore all Berrix services.",
  openGraph: {
    title: "Our Services | Berrix Software Solutions",
    description: "Comprehensive solutions to help your business grow and scale with modern technology.",
    url: "https://berrixsoftwaresolution.com/services",
  },
  alternates: {
    canonical: "https://berrixsoftwaresolution.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="container py-24">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border bg-muted/50 px-4 py-1.5 text-sm mb-6">
          <span className="text-muted-foreground">Our offerings</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Services</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Comprehensive solutions to help your business grow and scale. Each service is designed to solve real business problems with modern, scalable technology.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.id];
          return (
            <Link key={service.id} href={`/services/${service.slug}`} className="block group">
              <Card className="group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:border-primary/20 transition-all duration-300 flex flex-col cursor-pointer h-full border-2 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

