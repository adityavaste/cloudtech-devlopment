"use client";

import { useState } from "react";

interface LeadFormModalProps {
  planName: string;
  onClose: () => void;
}

export function LeadFormModal({ planName, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Gather form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      plan: planName, // Automatically attaches the plan they clicked!
    };

    try {
      // 2. Send data to your backend or automation service (e.g., Web3Forms, Formspree, or Next.js API route)
      // Example using a generic API endpoint:
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert(`Success! We will contact you shortly regarding the ${planName} plan.`);
      onClose(); // Close modal on success
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-background border border-border rounded-xl shadow-lg max-w-md w-full p-6 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-2">Almost there!</h3>
        <p className="text-muted-foreground mb-6">
          You selected the <strong className="text-foreground">{planName}</strong> plan. Leave your details below and we will get you set up.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input 
              name="name" 
              type="text" 
              required 
              className="w-full border border-border rounded-md px-3 py-2 bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full border border-border rounded-md px-3 py-2 bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input 
              name="phone" 
              type="tel" 
              required 
              className="w-full border border-border rounded-md px-3 py-2 bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+91 98765 43210"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-md hover:bg-primary/90 transition disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit & Get Started"}
          </button>
        </form>

      </div>
    </div>
  );
}