
import { useState } from "react";
import CourseCard from "./CourseCard";
import { Course } from "@/lib/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CoursesSectionProps {
  title: string;
  courses: Course[];
  showTabs?: boolean;
  showAllButton?: boolean;
}

export default function CoursesSection({
  title,
  courses,
  showTabs = false,
  showAllButton = false,
}: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
  const navigate = useNavigate();

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === "all"
    ? courses
    : courses.filter(course => 
        course.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  // Only show the top 5 categories in the tabs
  const topCategories = categories.slice(0, 5);

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          
          {showTabs && (
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="mb-4 flex flex-wrap h-auto">
                <TabsTrigger 
                  value="all"
                  className="rounded-full mb-2"
                  onClick={() => setSelectedCategory("all")}
                >
                  All
                </TabsTrigger>
                {topCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.slug}
                    className="rounded-full mb-2"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} featured={course.isFeatured} />
          ))}
        </div>

        {showAllButton && (
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              onClick={() => navigate("/courses")}
            >
              View All Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
