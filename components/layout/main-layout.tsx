import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingButtons } from "@/components/ui/floating-buttons";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <FloatingButtons />

      <Footer />
    </div>
  );
}