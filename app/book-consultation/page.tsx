"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar } from "lucide-react";

const quickFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide a message with at least 10 characters"),
});

type QuickFormData = z.infer<typeof quickFormSchema>;

export default function BookConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quickForm = useForm<QuickFormData>({
    resolver: zodResolver(quickFormSchema),
  });

  const onQuickSubmit = async (data: QuickFormData) => {
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit consultation request");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again or contact us directly.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="container py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold tracking-tight mb-4">Request Received</h1>
            <p className="text-lg text-muted-foreground">
              We&apos;ve received your consultation request. Our team will reach out to you shortly to schedule your free consultation.
            </p>
          </div>
          <Button asChild className="bg-emerald-500 hover:bg-emerald-400">
            <a href="/">Return to home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-card/50 backdrop-blur-md px-4 py-1.5 text-sm mb-6 shadow-lg">
            <Calendar className="h-4 w-4 text-primary mr-2" />
            <span className="text-foreground font-medium">Book a Consultation</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Let&apos;s Discuss Your Project
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation to explore how Berrix can help your business thrive.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-2 border-primary/20">
          <form onSubmit={quickForm.handleSubmit(onQuickSubmit)} className="space-y-6">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Free Consultations</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Tell us about your business needs and we&apos;ll get back to you to schedule a free consultation.
              </p>
            </div>

            {/* Name and Company Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="quick-name" className="text-foreground font-medium">
                  Name
                </Label>
                <Input
                  id="quick-name"
                  {...quickForm.register("name")}
                  placeholder="Name"
                  className="bg-muted/50 border-muted-foreground/20"
                />
                {quickForm.formState.errors.name && (
                  <p className="text-sm text-destructive">{quickForm.formState.errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="quick-company" className="text-foreground font-medium">
                  Company
                </Label>
                <Input
                  id="quick-company"
                  {...quickForm.register("company")}
                  placeholder="Company"
                  className="bg-muted/50 border-muted-foreground/20"
                />
                {quickForm.formState.errors.company && (
                  <p className="text-sm text-destructive">{quickForm.formState.errors.company.message}</p>
                )}
              </div>
            </div>

            {/* Phone and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="quick-phone" className="text-foreground font-medium">
                  Phone
                </Label>
                <Input
                  id="quick-phone"
                  type="tel"
                  {...quickForm.register("phone")}
                  placeholder="Phone"
                  className="bg-muted/50 border-muted-foreground/20"
                />
                {quickForm.formState.errors.phone && (
                  <p className="text-sm text-destructive">{quickForm.formState.errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="quick-email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="quick-email"
                  type="email"
                  {...quickForm.register("email")}
                  placeholder="Email"
                  className="bg-muted/50 border-muted-foreground/20"
                />
                {quickForm.formState.errors.email && (
                  <p className="text-sm text-destructive">{quickForm.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="quick-message" className="text-foreground font-medium">
                Message
              </Label>
              <Textarea
                id="quick-message"
                {...quickForm.register("message")}
                placeholder="Message"
                rows={6}
                className="bg-muted/50 border-muted-foreground/20 resize-y"
              />
              {quickForm.formState.errors.message && (
                <p className="text-sm text-destructive">{quickForm.formState.errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                disabled={quickForm.formState.isSubmitting} 
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-primary-foreground shadow-lg hover:shadow-xl transition-all w-full md:w-auto px-12"
              >
                {quickForm.formState.isSubmitting ? "Submitting..." : "Get an Appointment"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
