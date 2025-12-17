import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";
import { ArrowRight, CheckCircle2, Code, Cloud, Zap, Shield, Calendar, Target, Rocket, TrendingUp, Users, Lock, ArrowUp, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import ScrollToHash from "@/components/ScrollToHash";
import { serviceIcons } from "@/lib/service-icons";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      {/* Hero Section - Dark Theme */}
      <section className="relative container py-24 md:py-32 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-b from-background via-background to-background">
        {/* Advanced animated background with technical patterns - Green theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Multi-green gradient orbs */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-primary/15 via-emerald-500/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 via-emerald-500/8 to-teal-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-primary/8 via-emerald-500/6 via-teal-400/4 to-primary/8 rounded-full blur-3xl" />
          
          {/* Technical grid pattern with green tint */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(34,197,94,0.03)_50%,transparent_100%),linear-gradient(to_bottom,transparent_0%,rgba(34,197,94,0.03)_50%,transparent_100%)] bg-[length:60px_60px] opacity-50" />
          
          {/* More sophisticated circuit-like lines */}
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34,197,94,0.2)" />
                <stop offset="50%" stopColor="rgba(34,197,94,0.5)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0.2)" />
              </linearGradient>
            </defs>
            <path d="M0,200 Q300,150 600,200 T1200,200" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
            <path d="M0,400 Q300,350 600,400 T1200,400" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
            <path d="M0,600 Q300,550 600,600 T1200,600" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
            <path d="M200,0 Q200,200 200,400 T200,800" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
            <path d="M600,0 Q600,200 600,400 T600,800" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
            <path d="M1000,0 Q1000,200 1000,400 T1000,800" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
            {/* Connecting nodes */}
            <circle cx="200" cy="200" r="3" fill="rgba(34,197,94,0.3)" />
            <circle cx="600" cy="400" r="3" fill="rgba(34,197,94,0.3)" />
            <circle cx="1000" cy="600" r="3" fill="rgba(34,197,94,0.3)" />
          </svg>
        </div>
        
        <div className="relative grid lg:grid-cols-2 gap-16 items-center z-10">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-card/50 backdrop-blur-md px-4 py-1.5 text-sm mb-8 shadow-lg">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              <span className="text-foreground font-medium">Trusted by modern businesses</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Building scalable software
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                solutions for modern businesses
              </span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-xl leading-relaxed mb-10">
              Custom applications, <span className="text-emerald-400 font-medium">Azure cloud</span>, <span className="text-teal-400 font-medium">automation</span>, <span className="text-primary font-medium">AI</span>, and <span className="text-emerald-400 font-semibold">enterprise-grade security</span> designed to solve real business problems with <span className="text-teal-400 font-semibold">complete data protection</span>.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all hover:scale-105 bg-gradient-to-r from-primary via-emerald-500 to-primary hover:from-primary hover:via-emerald-500 hover:to-teal-400">
                <Link href="/book-consultation">Book a consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all backdrop-blur-sm">
                <Link href="/services">View services</Link>
              </Button>
            </div>
          </FadeIn>
          
          {/* Advanced Technical Visual Element */}
          <FadeIn delay={0.2} className="hidden lg:block relative">
            <div className="relative">
              {/* Main technical container - Dark theme with green accents */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-muted/30 border-2 border-primary/30 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Green technical grid */}
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,transparent_0%,rgba(34,197,94,0.08)_50%,transparent_100%),linear-gradient(to_bottom,transparent_0%,rgba(34,197,94,0.08)_50%,transparent_100%)] bg-[length:25px_25px] opacity-60" />
                
                {/* Multi-green corner gradients */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/15 via-emerald-500/10 to-transparent rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-400/15 via-primary/10 to-transparent rounded-br-3xl" />
                
                {/* Code terminal-like interface */}
                <div className="relative space-y-3 z-10">
                  {/* Enhanced terminal header */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-primary/25">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-sm" />
                      </div>
                      <span className="text-xs text-muted-foreground ml-2 font-mono font-semibold">berrix@azure:~</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">v2.4.1</div>
                  </div>
                  
                  {/* Enhanced code blocks */}
                  <div className="space-y-2.5 font-mono text-sm">
                    <div className="flex items-start gap-3 p-3.5 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-sm hover:bg-primary/15 transition-colors">
                      <span className="text-primary/70 font-bold">$</span>
                      <code className="text-foreground/95 flex-1">az deployment create --template app-service</code>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm ml-8 shadow-sm hover:bg-primary/15 transition-colors">
                      <span className="text-green-500 font-bold">✓</span>
                      <code className="text-foreground/95 flex-1">Deployment successful: app-berrix-prod</code>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm ml-16 shadow-sm hover:bg-primary/15 transition-colors">
                      <span className="text-blue-500 font-bold">→</span>
                      <code className="text-foreground/95 flex-1">Scaling to 10 instances...</code>
                    </div>
                  </div>
                  
                  {/* Enhanced status indicators - Multi-green theme */}
                  <div className="flex items-center gap-6 pt-3 border-t border-primary/30">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
                      <span className="text-xs text-muted-foreground font-mono font-semibold">Production</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-sm shadow-primary/50" />
                      <span className="text-xs text-muted-foreground font-mono font-semibold">Azure</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse shadow-sm shadow-teal-400/50" />
                      <span className="text-xs text-muted-foreground font-mono font-semibold">Active</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating technical icons with multi-green gradients */}
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/25 via-emerald-500/20 to-primary/15 backdrop-blur-md border-2 border-emerald-500/35 flex items-center justify-center shadow-2xl shadow-emerald-500/20 hover:scale-110 transition-transform z-20">
                  <Cloud className="w-10 h-10 text-primary group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/25 via-teal-400/20 to-primary/15 backdrop-blur-md border-2 border-teal-400/35 flex items-center justify-center shadow-2xl shadow-teal-400/20 hover:scale-110 transition-transform z-20">
                  <Code className="w-10 h-10 text-primary group-hover:text-teal-400 transition-colors" />
                </div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 via-emerald-500/15 to-primary/10 backdrop-blur-md border border-emerald-500/25 flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-20">
                  <Shield className="w-8 h-8 text-primary/90 group-hover:text-emerald-400 transition-colors" />
                </div>
              </div>
              
              {/* Green decorative glow effects */}
              <div className="absolute -z-10 -right-12 -bottom-12 w-80 h-80 rounded-full bg-primary/12 blur-3xl animate-pulse" />
              <div className="absolute -z-10 -left-12 -top-12 w-64 h-64 rounded-full bg-primary/8 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute -z-10 top-1/2 right-1/2 w-96 h-96 rounded-full bg-primary/6 blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid - Vitech Studio Style */}
      <section className="container py-24 relative overflow-hidden">
        {/* Background with diagonal green lines like Vitech Studio */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="diagonalLines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>
        
        <div className="relative">
          <FadeIn className="mb-20 text-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-card/50 backdrop-blur-md px-5 py-2 text-sm mb-8 shadow-lg">
              <span className="text-foreground font-semibold">What we <span className="text-emerald-400">offer</span></span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions with <span className="text-emerald-400 font-semibold">enterprise-grade security</span> to help your business grow and scale.
            </p>
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.id] || Code;
              return (
                <StaggerItem key={service.id}>
                  <Link href={`/services/${service.slug}`} className="block group">
                    <Card className="group-hover:shadow-2xl group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500 cursor-pointer h-full border-2 border-primary/20 group-hover:border-gradient-to-r group-hover:from-primary group-hover:via-emerald-500 group-hover:to-teal-400 bg-card relative overflow-hidden">
                      <CardHeader className="p-6">
                        {/* Circular green icon with two-tone green like Vitech Studio */}
                        <div className="w-16 h-16 rounded-full bg-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-emerald-400/30 group-hover:shadow-emerald-500/40 border-2 border-emerald-500/30">
                          <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
                        </div>
                        
                        <CardTitle className="text-xl mb-3 font-bold text-foreground group-hover:text-emerald-400 transition-colors">{service.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {service.shortDescription.split(' ').map((word, idx) => {
                            if (word.includes('Tailored') || word.includes('Azure') || word.includes('Streamline') || word.includes('Secure') || word.includes('Intelligent') || word.includes('Turn')) {
                              return <span key={idx} className="text-primary font-medium">{word} </span>;
                            } else if (word.includes('applications') || word.includes('architecture') || word.includes('workflows') || word.includes('access') || word.includes('automation') || word.includes('data')) {
                              return <span key={idx} className="text-emerald-400/90">{word} </span>;
                            } else if (word.includes('scale') || word.includes('secure') || word.includes('reliable') || word.includes('efficient') || word.includes('insights')) {
                              return <span key={idx} className="text-teal-400/90">{word} </span>;
                            }
                            return <span key={idx}>{word} </span>;
                          })}
                        </CardDescription>
                        <CardDescription className="text-sm text-muted-foreground/80 leading-relaxed">
                          {service.description.split(' ').slice(0, 15).map((word, idx) => {
                            if (word.includes('custom') || word.includes('Azure') || word.includes('Microsoft') || word.includes('modern') || word.includes('automation') || word.includes('data')) {
                              return <span key={idx} className="text-emerald-400/70">{word} </span>;
                            } else if (word.includes('scalable') || word.includes('secure') || word.includes('reliable') || word.includes('efficient')) {
                              return <span key={idx} className="text-teal-400/70">{word} </span>;
                            }
                            return <span key={idx}>{word} </span>;
                          })}
                          <span className="text-muted-foreground/80">...</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-400 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all">
                          <span>Get Started</span>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats with Percentages - Vitech Studio Style */}
      <section className="container py-24 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-foreground">Building Scalable Solutions for</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Modern Businesses.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              At <span className="text-primary font-semibold">Berrix</span>, we combine <span className="text-emerald-400 font-medium">senior-level engineering expertise</span> with <span className="text-teal-400 font-medium">Azure-first architecture</span> and <span className="text-emerald-400 font-semibold">security-first design</span> to deliver custom software solutions that solve real business problems. We&apos;re not just developers, we&apos;re your <span className="text-primary font-medium">long-term technology partners</span>, committed to building systems that are <span className="text-emerald-400 font-semibold">secure by default</span>, <span className="text-teal-400 font-medium">scalable</span>, and support your growth.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
              <Link href="/#why-berrix">Learn more about us</Link>
            </Button>
          </FadeIn>

          {/* Right side - Stats Cards */}
          <div className="grid gap-6">
            <FadeIn delay={0.1}>
              <Card className="border-2 border-primary/20 bg-card p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-5xl font-bold text-foreground">+60%</div>
                  <ArrowUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Traffic Increase</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By optimizing your website for search engines and enhancing user experience.
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="border-2 border-primary/20 bg-card p-6 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-5xl font-bold bg-gradient-to-br from-emerald-500 to-emerald-400 bg-clip-text text-transparent">+30%</div>
                  <ArrowUp className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Revenue <span className="text-emerald-400">Increase</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rise in revenue as more <span className="text-primary/80">visitors convert</span> into <span className="text-emerald-400/80">paying customers</span>.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative container py-24 my-24 overflow-hidden">
        {/* Advanced technical background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-muted/40 to-primary/8 rounded-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.12),transparent_70%)] rounded-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(34,197,94,0.03)_50%,transparent_100%)] bg-[length:80px_80px] rounded-3xl opacity-60" />
        
        {/* Circuit-like decorative lines */}
        <svg className="absolute inset-0 w-full h-full rounded-3xl opacity-10" viewBox="0 0 800 600" preserveAspectRatio="none">
          <path d="M0,150 Q200,100 400,150 T800,150" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
          <path d="M0,300 Q200,250 400,300 T800,300" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
          <path d="M0,450 Q200,400 400,450 T800,450" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
        </svg>
        
        <div className="relative max-w-4xl mx-auto">
          <FadeIn className="mb-20 text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/70 backdrop-blur-md px-5 py-2 text-sm mb-8 shadow-lg">
              <span className="text-foreground font-semibold">Our process</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process from consultation to deployment.
            </p>
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-2">
            {[
              {
                step: "01",
                title: "Book a consultation",
                description: "Schedule a free consultation to discuss your needs and challenges.",
                icon: Calendar
              },
              {
                step: "02",
                title: "Define the solution",
                description: "We work with you to design a solution that fits your business goals.",
                icon: Target
              },
              {
                step: "03",
                title: "Build & deploy",
                description: "Our team builds and deploys your solution with regular updates and feedback.",
                icon: Rocket
              },
              {
                step: "04",
                title: "Support & scale",
                description: "Ongoing support and optimization to ensure your solution grows with you.",
                icon: TrendingUp
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.step}>
                  <Card className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium bg-gradient-to-r from-primary via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-1">{item.step}</div>
                          <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Berrix */}
      <section id="why-berrix" className="container py-24 relative overflow-hidden">
        {/* Advanced background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.10),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(34,197,94,0.02)_50%,transparent_100%)] bg-[length:100px_100px] pointer-events-none opacity-40" />
        
        <div className="relative max-w-4xl mx-auto">
          <FadeIn className="mb-20 text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/70 backdrop-blur-md px-5 py-2 text-sm mb-8 shadow-lg">
              <span className="text-foreground font-semibold">Why <span className="text-emerald-400">choose</span> <span className="text-teal-400">us</span></span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-foreground via-emerald-400 to-primary bg-clip-text text-transparent">
                Why Berrix
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in delivering <span className="text-emerald-400 font-medium">software solutions</span>.
            </p>
          </FadeIn>
          
          {/* Company Introduction */}
          <FadeIn delay={0.1} className="mb-16">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-background via-muted/10 to-background p-8 md:p-12 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground via-emerald-400 to-primary bg-clip-text text-transparent">
                    About Berrix
                  </h3>
                </div>
                <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <p>
                    <span className="text-foreground font-semibold">Berrix Consulting</span> is a <span className="text-emerald-400 font-medium">US-based software solution company</span> with over <span className="text-primary font-bold">a decade of experience</span> delivering <span className="text-teal-400 font-medium">reliable, custom-built technology solutions</span>. We partner with businesses to design and implement <span className="text-emerald-400 font-medium">scalable systems</span>, from <span className="text-primary font-medium">enterprise applications</span> and <span className="text-teal-400 font-medium">cloud infrastructure</span> to <span className="text-emerald-400 font-medium">automation platforms</span> and <span className="text-primary font-medium">AI-powered solutions</span>.
                  </p>
                  <p>
                    As a <span className="text-primary font-semibold">registered Limited Liability Company (LLC) in the United States</span>, Berrix operates with <span className="text-emerald-400 font-medium">full legal compliance</span>, <span className="text-teal-400 font-medium">professional accountability</span>, and <span className="text-primary font-medium">industry best practices</span>. Our clients work with a <span className="text-emerald-400 font-semibold">legitimate, established technology partner</span>, not a freelance brand or short-term operation.
                  </p>
                  <p>
                    Our team specializes in <span className="text-teal-400 font-medium">custom software solutions</span>, <span className="text-emerald-400 font-medium">Microsoft Azure cloud solutions</span>, <span className="text-primary font-medium">DevOps engineering</span>, <span className="text-teal-400 font-medium">identity and access management (IAM)</span>, <span className="text-emerald-400 font-medium">automation and AI</span>, <span className="text-primary font-medium">data & business intelligence</span>, and <span className="text-emerald-400 font-semibold">data governance & security</span>. Every solution we build is driven by <span className="text-emerald-400 font-medium">real business requirements</span>, engineered with <span className="text-teal-400 font-semibold">security-first architecture</span> and <span className="text-primary font-semibold">enterprise-grade protection</span>, and focused on delivering <span className="text-primary font-medium">measurable, long-term value</span>.
                  </p>
                  <p>
                    We take pride in <span className="text-emerald-400 font-medium">transparent communication</span>, <span className="text-teal-400 font-medium">dependable delivery</span>, and building <span className="text-primary font-semibold">lasting partnerships</span> with organizations across multiple industries.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
          
          <StaggerChildren className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Enterprise-grade security",
                description: "Security is built into every solution from day one. We implement comprehensive data protection, access controls, encryption, and compliance frameworks to keep your data safe.",
                icon: Shield
              },
              {
                title: "Senior-level engineering experience",
                description: "Our team brings years of experience building production systems at scale with security and reliability as core principles.",
                icon: Users
              },
              {
                title: "Azure-first architecture",
                description: "We leverage Microsoft Azure's full security capabilities for scalable, secure, and compliant solutions.",
                icon: Cloud
              },
              {
                title: "Data governance & compliance",
                description: "We help you meet regulatory requirements (GDPR, HIPAA, SOC 2) and implement robust data governance frameworks.",
                icon: Lock
              },
              {
                title: "Scalable, maintainable systems",
                description: "We build secure systems that grow with your business and are easy to maintain and monitor.",
                icon: Code
              },
              {
                title: "Long-term partnership mindset",
                description: "We're invested in your success for the long haul, providing ongoing security monitoring and support.",
                icon: Users
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
              <StaggerItem key={item.title}>
                <Card className="border-2 border-primary/15 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-background to-muted/20 group">
                  {/* Technical overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 via-emerald-500/20 to-teal-400/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:via-emerald-500/30 group-hover:to-teal-400/30 group-hover:scale-110 transition-all duration-500 border border-primary/20 group-hover:border-emerald-500/30 shadow-lg">
                        <Icon className="h-7 w-7 text-primary group-hover:text-teal-400 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 font-bold group-hover:text-primary transition-colors">
                          {item.title.split(' ').map((word, idx) => {
                            const cleanWord = word.replace(/[.,]/g, '');
                            if (cleanWord === 'Senior-level' || cleanWord === 'Azure-first' || cleanWord === 'Security' || cleanWord === 'Scalable' || cleanWord === 'Long-term') {
                              return <span key={idx} className="text-emerald-400">{word} </span>;
                            } else if (cleanWord === 'engineering' || cleanWord === 'architecture' || cleanWord === 'maintainable' || cleanWord === 'partnership') {
                              return <span key={idx} className="text-teal-400/90">{word} </span>;
                            }
                            return <span key={idx}>{word} </span>;
                          })}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                          {item.description.split(' ').map((word, idx) => {
                            const cleanWord = word.toLowerCase().replace(/[.,]/g, '');
                            if (cleanWord.includes('scalable') || cleanWord.includes('secure') || cleanWord.includes('production')) {
                              return <span key={idx} className="text-teal-400/80">{word} </span>;
                            } else if (cleanWord.includes('experience') || cleanWord.includes('azure') || cleanWord.includes('security')) {
                              return <span key={idx} className="text-emerald-400/80">{word} </span>;
                            } else if (cleanWord.includes('systems') || cleanWord.includes('solutions') || cleanWord.includes('partnership')) {
                              return <span key={idx} className="text-primary/80">{word} </span>;
                            }
                            return <span key={idx}>{word} </span>;
                          })}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials Section - Vitech Studio Style */}
      <section className="container py-24 relative overflow-hidden">
        {/* Wavy background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(34,197,94,0.1)" />
                <stop offset="50%" stopColor="rgba(34,197,94,0.2)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0.1)" />
              </linearGradient>
            </defs>
            <path d="M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z" fill="url(#waveGradient)" />
            <path d="M0,250 Q300,200 600,250 T1200,250 L1200,400 L0,400 Z" fill="url(#waveGradient)" opacity="0.5" />
            <path d="M0,300 Q300,250 600,300 T1200,300 L1200,400 L0,400 Z" fill="url(#waveGradient)" opacity="0.3" />
          </svg>
        </div>
        
        <div className="relative">
          <FadeIn className="mb-16 text-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-card/50 backdrop-blur-md px-4 py-1.5 text-sm mb-6">
              <span className="text-primary font-semibold">TESTIMONIAL</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-foreground">Client </span>
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Feedback & Reviews.
              </span>
            </h2>
          </FadeIn>
          
          <StaggerChildren className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "Berrix Software Solutions' Azure cloud architecture has significantly improved our system performance and scalability. Their expertise and strategic approach delivered real growth for our business.",
                name: "Benjamin Allen",
                title: "CTO"
              },
              {
                quote: "Berrix completely transformed our development workflow, giving us modern DevOps practices and enhanced automation. The entire implementation process was managed efficiently, and the results exceeded our expectations.",
                name: "Amanda Hurlburt",
                title: "Product Owner"
              },
              {
                quote: "The engineering team at Berrix created a robust, scalable solution that aligns perfectly with our business needs. Their creativity and attention to detail exceeded our expectations.",
                name: "Peter Hayes",
                title: "Marketing Director"
              }
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-6 h-full hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                  <blockquote className="text-base italic text-foreground/90 leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-foreground mb-1">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="container py-24">
        <FadeIn>
          <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 md:p-16 text-center text-primary-foreground overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-pulse" />
            <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Book a <span className="text-white font-semibold">free consultation</span> to discuss how we can help solve your <span className="text-emerald-200 font-medium">business challenges</span>.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105 bg-white text-primary hover:bg-white/90 border-2 border-emerald-500/20 hover:border-emerald-500/40">
                  <Link href="/book-consultation">Book a consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

