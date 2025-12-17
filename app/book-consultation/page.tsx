"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";
import { CheckCircle2, ArrowRight, ArrowLeft, Calendar, Clock, FileText, Briefcase, User, Phone, Mail } from "lucide-react";
import { serviceIcons } from "@/lib/service-icons";

const stepFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  challenge: z.string().min(10, "Please describe your challenge in at least 10 characters"),
});

const quickFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide a message with at least 10 characters"),
});

type StepFormData = z.infer<typeof stepFormSchema>;
type QuickFormData = z.infer<typeof quickFormSchema>;

type Step = "service" | "time" | "form" | "confirmation";
type FormType = "step" | "quick";

const timeSlots = [
  { value: "monday-9am", label: "Monday, 9:00 AM - 10:00 AM" },
  { value: "monday-2pm", label: "Monday, 2:00 PM - 3:00 PM" },
  { value: "tuesday-9am", label: "Tuesday, 9:00 AM - 10:00 AM" },
  { value: "tuesday-2pm", label: "Tuesday, 2:00 PM - 3:00 PM" },
  { value: "wednesday-9am", label: "Wednesday, 9:00 AM - 10:00 AM" },
  { value: "wednesday-2pm", label: "Wednesday, 2:00 PM - 3:00 PM" },
  { value: "thursday-9am", label: "Thursday, 9:00 AM - 10:00 AM" },
  { value: "thursday-2pm", label: "Thursday, 2:00 PM - 3:00 PM" },
  { value: "friday-9am", label: "Friday, 9:00 AM - 10:00 AM" },
  { value: "friday-2pm", label: "Friday, 2:00 PM - 3:00 PM" },
];

export default function BookConsultationPage() {
  const [formType, setFormType] = useState<FormType>("step");
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stepForm = useForm<StepFormData>({
    resolver: zodResolver(stepFormSchema),
  });

  const quickForm = useForm<QuickFormData>({
    resolver: zodResolver(quickFormSchema),
  });

  const onStepSubmit = async (data: StepFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep("confirmation");
  };

  const onQuickSubmit = async (data: QuickFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
  };

  if (step === "confirmation" || isSubmitted) {
    return (
      <div className="container py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {step === "confirmation" ? "Consultation Booked" : "Request Received"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {step === "confirmation" 
                ? "We've received your consultation request. Our team will reach out to confirm the details shortly."
                : "We've received your consultation request. Our team will reach out to you shortly to schedule your free consultation."}
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-card/50 backdrop-blur-md px-4 py-1.5 text-sm mb-6">
            <Calendar className="w-4 h-4 text-primary mr-2" />
            <span className="text-foreground font-medium">Get started</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Book a Consultation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose how you&apos;d like to book your consultation.
          </p>
        </div>

        {/* Form Type Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card 
            className={`cursor-pointer transition-all border-2 ${
              formType === "step" 
                ? "border-emerald-500 bg-emerald-500/10" 
                : "border-primary/20 hover:border-emerald-500/30"
            }`}
            onClick={() => setFormType("step")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-emerald-500" />
                Step-by-Step Booking
              </CardTitle>
              <CardDescription>
                Select a service and time slot, then provide your details.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card 
            className={`cursor-pointer transition-all border-2 ${
              formType === "quick" 
                ? "border-emerald-500 bg-emerald-500/10" 
                : "border-primary/20 hover:border-emerald-500/30"
            }`}
            onClick={() => setFormType("quick")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                Quick Consultation
              </CardTitle>
              <CardDescription>
                Fast and simple - just fill out the form and we&apos;ll get back to you.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Step-by-Step Form */}
        {formType === "step" && (
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12 flex items-center justify-between">
              {[
                { key: "service", label: "Service", icon: Briefcase },
                { key: "time", label: "Time", icon: Clock },
                { key: "form", label: "Details", icon: FileText },
              ].map((s, index) => {
                const StepIcon = s.icon;
                const stepKeys: Step[] = ["service", "time", "form"];
                const currentStepIndex = stepKeys.indexOf(step);
                const isActive = step === s.key;
                const isCompleted = currentStepIndex > index;

                return (
                  <div key={s.key} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground scale-110"
                            : isCompleted
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-6 w-6" />
                        ) : (
                          <StepIcon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : ""}`} />
                        )}
                      </div>
                      <span
                        className={`mt-2 text-sm ${
                          isActive ? "font-medium text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                    {index < 2 && (
                      <div
                        className={`h-0.5 flex-1 mx-2 ${
                          currentStepIndex > index ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step 1: Select Service */}
            {step === "service" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Select a service</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {services.map((service) => {
                    const ServiceIcon = serviceIcons[service.id];
                    return (
                      <Card
                        key={service.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedService === service.id
                            ? "ring-2 ring-primary border-primary bg-primary/5"
                            : ""
                        }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            {ServiceIcon && (
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                selectedService === service.id ? "bg-primary/20" : "bg-primary/10"
                              }`}>
                                <ServiceIcon className="w-5 h-5 text-primary" />
                              </div>
                            )}
                            <div className="flex-1">
                              <CardTitle className="text-lg">{service.title}</CardTitle>
                              <CardDescription>{service.shortDescription}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => setStep("time")}
                    disabled={!selectedService}
                    size="lg"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Select Time */}
            {step === "time" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Select a time</h2>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {timeSlots.map((slot) => (
                    <Card
                      key={slot.value}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedTime === slot.value
                          ? "ring-2 ring-primary border-primary"
                          : ""
                      }`}
                      onClick={() => setSelectedTime(slot.value)}
                    >
                      <CardContent className="p-4">
                        <p className="font-medium">{slot.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep("service")}
                    size="lg"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep("form")}
                    disabled={!selectedTime}
                    size="lg"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Form */}
            {step === "form" && (
              <form onSubmit={stepForm.handleSubmit(onStepSubmit)} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Tell us about your challenge</h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="step-name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Name *
                    </Label>
                    <Input
                      id="step-name"
                      {...stepForm.register("name")}
                      placeholder="John Doe"
                    />
                    {stepForm.formState.errors.name && (
                      <p className="text-sm text-destructive">{stepForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="step-company" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      Company *
                    </Label>
                    <Input
                      id="step-company"
                      {...stepForm.register("company")}
                      placeholder="Acme Inc."
                    />
                    {stepForm.formState.errors.company && (
                      <p className="text-sm text-destructive">{stepForm.formState.errors.company.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="step-challenge" className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      What challenge are you looking to solve? *
                    </Label>
                    <Textarea
                      id="step-challenge"
                      {...stepForm.register("challenge")}
                      placeholder="Tell us about your business challenge..."
                      rows={5}
                    />
                    {stepForm.formState.errors.challenge && (
                      <p className="text-sm text-destructive">{stepForm.formState.errors.challenge.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep("time")}
                    size="lg"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button type="submit" disabled={stepForm.formState.isSubmitting} size="lg">
                    {stepForm.formState.isSubmitting ? "Submitting..." : "Book Consultation"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Quick Form */}
        {formType === "quick" && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 bg-card border-2 border-primary/20">
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Free Consultations</h2>
                <p className="text-muted-foreground">
                  Tell us about your business needs and we&apos;ll get back to you.
                </p>
              </div>
              <form onSubmit={quickForm.handleSubmit(onQuickSubmit)} className="space-y-6">
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
        )}
      </div>
    </div>
  );
}

