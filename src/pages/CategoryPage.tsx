
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Category, Course } from "@/lib/types";
import { getCategoryBySlug, getCoursesByCategory } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!slug) return;
    
    const categoryData = getCategoryBySlug(slug);
    
    if (!categoryData) {
      navigate("/not-found");
      return;
    }
    
    setCategory(categoryData);
    setCourses(getCoursesByCategory(categoryData.name));
  }, [slug, navigate]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <a href="/" className="hover:text-primary">Home</a>
                <ArrowRight className="h-3 w-3 mx-2" />
                <a href="/courses" className="hover:text-primary">Courses</a>
                <ArrowRight className="h-3 w-3 mx-2" />
                <span className="text-foreground">{category.name}</span>
              </div>
            
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name} Courses</h1>
              <p className="text-muted-foreground max-w-2xl">
                Master {category.name.toLowerCase()} with our expert-led courses. From fundamentals to advanced techniques, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Popular {category.name} Courses</h2>
              <p className="text-muted-foreground">
                Showing {courses.length} courses
              </p>
            </div>
            
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-50 dark:bg-gray-900 rounded-lg">
                <p className="text-lg font-medium mb-2">No courses found</p>
                <p className="text-muted-foreground mb-6">
                  We don't have any courses in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">About {category.name} Courses</h2>
            <p className="text-muted-foreground mb-6">
              Our {category.name} courses are designed to take you from beginner to expert. Learn from industry professionals and gain hands-on experience through practical projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">What You'll Learn</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Core {category.name} concepts and best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Practical, real-world projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Industry-standard tools and frameworks</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">Career Opportunities</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>{category.name} Developer/Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Technical Specialist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Consultant or Team Lead</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold mb-2">Prerequisites</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Beginner courses: No prior experience needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Intermediate: Basic programming knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Advanced: Solid fundamentals in the field</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
