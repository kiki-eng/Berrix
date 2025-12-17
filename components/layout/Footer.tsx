import Link from "next/link";
import { Code, Briefcase, Users, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-primary/30 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] bg-[length:200%_200%] animate-[shimmer_3s_infinite]" />
                <Code className="w-6 h-6 text-primary-foreground relative z-10" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold tracking-tight bg-gradient-to-r from-foreground via-emerald-400 to-primary bg-clip-text text-transparent">Berrix</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Building scalable software solutions for modern businesses.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-semibold">Services</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                  All Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-semibold">Company</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#how-it-works" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#why-berrix" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                  Why Berrix
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-semibold">Get Started</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/book-consultation" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Berrix Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

