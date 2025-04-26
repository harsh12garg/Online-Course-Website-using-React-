
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageTemplateProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showHeaderBanner?: boolean;
}

export default function PageTemplate({ 
  children, 
  title, 
  subtitle,
  showHeaderBanner = true
}: PageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {showHeaderBanner && (
          <div className="bg-gradient-to-r from-primary/90 to-primary py-12 px-4">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
              {subtitle && (
                <p className="mt-2 text-white/80 max-w-2xl">{subtitle}</p>
              )}
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
