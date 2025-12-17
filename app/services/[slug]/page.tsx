import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceBySlug } from "@/lib/services";
import { CheckCircle2, AlertCircle, Package, Wrench } from "lucide-react";
import { serviceIcons } from "@/lib/service-icons";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center rounded-full border bg-muted/50 px-4 py-1.5 text-sm mb-6">
            <span className="text-muted-foreground">Service</span>
          </div>
          <div className="flex justify-center mb-6">
            {(() => {
              const Icon = serviceIcons[service.id];
              return Icon ? (
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
              ) : null;
            })()}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* What this service is */}
        <section className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = serviceIcons[service.id];
                  return Icon ? (
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  ) : null;
                })()}
                <CardTitle className="text-2xl">What this service is</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Problems it solves */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Problems it solves</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {service.problems.map((problem, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{problem}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What we deliver */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">What we deliver</h2>
          </div>
          <div className="grid gap-4">
            {service.deliverables.map((deliverable, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    {deliverable}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools & technologies */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Tools & technologies used</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {service.tools.map((tool, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 rounded-lg border-2 bg-card px-4 py-2 text-sm font-medium hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Wrench className="w-4 h-4 text-primary/60" />
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 md:p-12 text-center text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          <div className="relative">
            <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Ready to get started?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation to discuss how {service.title} can help solve your business challenges.
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-shadow">
              <Link href="/book-consultation">Book a consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

