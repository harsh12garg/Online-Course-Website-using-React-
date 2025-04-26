
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/lib/types";
import { Clock, BookOpen, Star, Users } from "lucide-react";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  return (
    <Link to={`/course/${course.slug}`}>
      <Card className={`h-full overflow-hidden card-hover ${featured ? 'border-2 border-primary' : ''}`}>
        <div className="relative">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {course.isFeatured && (
              <Badge className="bg-primary hover:bg-primary">Featured</Badge>
            )}
            <Badge
              className={
                course.level === "beginner"
                  ? "bg-green-500 hover:bg-green-600"
                  : course.level === "intermediate"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-red-500 hover:bg-red-600"
              }
            >
              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
            </Badge>
          </div>
        </div>
        <CardHeader className="p-4 pb-0">
          <h3 className="text-lg font-bold line-clamp-2">{course.title}</h3>
          <p className="text-sm text-muted-foreground">
            {course.instructor.name}
          </p>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-sm flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-border w-full">
            <p className="font-bold text-lg text-primary">${course.price.toFixed(2)}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
