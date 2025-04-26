
import { Star, Clock, BookOpen, Award, Activity, Users } from "lucide-react";
import { Course } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseDetailsHeaderProps {
  course: Course;
}

export default function CourseDetailsHeader({ course }: CourseDetailsHeaderProps) {
  return (
    <div className="relative">
      <div className="h-96 bg-gradient-to-r from-slate-900 to-slate-700 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary">{course.category}</Badge>
                <Badge
                  className={
                    course.level === "beginner"
                      ? "bg-green-500"
                      : course.level === "intermediate"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }
                >
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </Badge>
                {course.isFeatured && <Badge variant="outline">Featured</Badge>}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{course.title}</h1>
              
              <p className="text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.students} students)</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span>{course.lessons} lessons</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Activity className="h-5 w-5 text-muted-foreground" />
                  <span>Last updated {course.updatedAt}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-medium">Created by</p>
                  <p className="text-primary">{course.instructor.name}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 p-6 bg-slate-50 dark:bg-gray-800 rounded-lg md:w-72">
              <div className="text-3xl font-bold">${course.price.toFixed(2)}</div>
              
              <div className="flex flex-col gap-3">
                <Button size="lg">Enroll Now</Button>
                <Button variant="outline" size="lg">Add to Cart</Button>
              </div>
              
              <div className="text-sm text-muted-foreground mt-2">
                <p className="flex items-center gap-1 mb-1">
                  <Award className="h-4 w-4" /> Full lifetime access
                </p>
                <p className="flex items-center gap-1 mb-1">
                  <Users className="h-4 w-4" /> {course.students.toLocaleString()} enrolled
                </p>
                <p className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" /> {course.lessons} downloadable resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
