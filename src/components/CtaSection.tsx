
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our expert-led programming courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full">
              <Link to="/courses" className="flex items-center gap-2">
                Browse Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              <Link to="/category/web-development">
                Explore Popular Tracks
              </Link>
            </Button>
          </div>
          <div className="mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Expert Courses</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
