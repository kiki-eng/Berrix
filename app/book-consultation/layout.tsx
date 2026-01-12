import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Berrix Software Solutions",
  description: "Schedule a free consultation to discuss your custom software development, Azure cloud, or DevOps needs. Let's explore how Berrix can help your business thrive.",
  openGraph: {
    title: "Book a Free Consultation | Berrix Software Solutions",
    description: "Schedule a free consultation to discuss your software development needs.",
    url: "https://berrixsoftwaresolution.com/book-consultation",
  },
  alternates: {
    canonical: "https://berrixsoftwaresolution.com/book-consultation",
  },
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
