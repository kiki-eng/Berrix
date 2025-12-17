"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Code2, Cloud } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About", href: "/#why-berrix" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      handleLinkClick();
      
      // If we're on the home page, just scroll
      if (pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // If we're on a different page, navigate to home with hash
        // The ScrollToHash component on the home page will handle scrolling
        router.push(`/#${id}`);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 shadow-lg shadow-primary/10">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group" onClick={handleLinkClick}>
          <div className="relative flex items-center gap-3">
            {/* Premium Logo Icon Container */}
            <div className="relative">
              {/* Outer animated glow ring with multi-green */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-primary/30 via-emerald-500/20 to-teal-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Border glow effect with multi-green */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/40 via-emerald-500/25 to-teal-400/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              {/* Main icon container with multiple layers and multi-green gradient */}
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-teal-400 flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:shadow-emerald-500/60 transition-all duration-500 group-hover:scale-110 overflow-hidden border border-primary/30 group-hover:border-emerald-500/50">
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.15)_50%,transparent_70%)] bg-[length:200%_200%] group-hover:animate-[shimmer_2s_infinite]" />
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%),linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%)] bg-[length:8px_8px] opacity-50" />
                
                {/* Dual icon effect for depth */}
                <Code2 className="w-7 h-7 text-primary-foreground relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                <Code2 className="w-7 h-7 text-primary-foreground/30 absolute inset-0 blur-md" strokeWidth={2.5} />
              </div>
              
              {/* Corner accent dots with different greens */}
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500/80 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-teal-400/60 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Premium Logo Text with multiple effects */}
            <div className="relative">
              {/* Main text with gradient */}
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary group-hover:to-primary/80 transition-all duration-500 relative z-10 drop-shadow-sm">
                Berrix
              </span>
              
              {/* Animated gradient underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary/50 group-hover:w-full transition-all duration-500 rounded-full shadow-sm shadow-primary/50" />
              
              {/* Text glow effect behind with multi-green */}
              <span className="absolute inset-0 text-xl font-bold tracking-tight bg-gradient-to-r from-primary/50 via-emerald-500/40 to-teal-400/50 bg-clip-text text-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Berrix
              </span>
              
              {/* Subtle text shadow with green */}
              <span className="absolute inset-0 text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-500/20 via-primary/20 to-teal-400/20 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                Berrix
              </span>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-400",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/book-consultation">Book Consultation</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleAnchorClick(e, item.href);
                    handleLinkClick();
                  }}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-primary py-2",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button asChild className="w-full" onClick={handleLinkClick}>
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

