
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import InstructorSection from "@/components/InstructorSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getFeaturedCourses, getTopLanguages } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredCourses = getFeaturedCourses();
  const topLanguages = getTopLanguages(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Top Programming Languages Section */}
        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold">Trending Languages</h2>
                <p className="text-muted-foreground mt-2">
                  Most in-demand programming languages in the industry
                </p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link to="/languages">
                  View All Languages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topLanguages.map(language => (
                <Link to={`/language/${language.slug}`} key={language.id}>
                  <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                    <div className="h-24 bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center relative">
                      <img 
                        src={language.imageUrl} 
                        alt={language.name} 
                        className="h-16 w-16 object-contain"
                      />
                      <Badge className="absolute top-2 right-2 flex items-center gap-1 bg-white/20">
                        <TrendingUp className="h-3 w-3" /> {language.popularity}%
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">{language.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {language.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {language.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <CoursesSection 
          title="Featured Courses" 
          courses={featuredCourses}
          showTabs={false}
          showAllButton={true}
        />
        <FeatureSection />
        <CoursesSection 
          title="Explore Our Courses" 
          courses={featuredCourses}
          showTabs={true}
          showAllButton={true}
        />
        <TestimonialSection />
        <InstructorSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
