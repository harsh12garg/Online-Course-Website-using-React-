
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master <span className="gradient-text">Programming</span> with Expert-Led Courses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              From web development to AI, learn the skills that will advance your career with our comprehensive, interactive courses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Link to="/category/web-development">Popular Categories</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>Join <span className="font-bold text-foreground">10,000+</span> students</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-video bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                alt="Programming on a laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-soft"></div>
                    <span className="text-sm font-medium">Live Now</span>
                  </div>
                  <h3 className="text-lg font-bold">Web Development Masterclass</h3>
                  <p className="text-sm opacity-80">Join us for a free introductory session</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-primary/20 backdrop-blur-sm rounded-lg -z-10"></div>
            <div className="absolute -left-6 -top-6 w-32 h-32 bg-secondary/20 backdrop-blur-sm rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
