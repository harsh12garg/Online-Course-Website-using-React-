
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Clock,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  BarChart3,
  PlayCircle,
  BookMarked,
  Heart,
  Settings,
} from "lucide-react";
import { courses } from "@/lib/data";
import { Link } from "react-router-dom";

const mockEnrolledCourses = [
  {
    courseId: "1",
    progress: 65,
    lastAccessed: "2023-12-10T14:30:00Z",
    completedLessons: 12,
  },
  {
    courseId: "2",
    progress: 30,
    lastAccessed: "2023-12-08T10:15:00Z",
    completedLessons: 5,
  },
  {
    courseId: "7",
    progress: 15,
    lastAccessed: "2023-12-05T16:45:00Z",
    completedLessons: 2,
  },
];

const mockSavedCourses = ["3", "4", "8"];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("my-courses");

  const enrolledCourses = mockEnrolledCourses.map((enrollment) => ({
    ...enrollment,
    course: courses.find((course) => course.id === enrollment.courseId),
  }));

  const savedCourses = mockSavedCourses.map((id) =>
    courses.find((course) => course.id === id)
  );

  // Calculate total progress
  const totalLessons = enrolledCourses.reduce(
    (acc, item) => acc + (item.course?.lessons || 0),
    0
  );
  const completedLessons = enrolledCourses.reduce(
    (acc, item) => acc + item.completedLessons,
    0
  );
  const overallProgress =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">My Learning Dashboard</h1>
                <p className="text-muted-foreground">
                  Track your progress and continue learning
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
                <Button className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Browse Courses</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Overall Progress</CardTitle>
                <CardDescription>
                  Across all enrolled courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    {completedLessons} of {totalLessons} lessons completed
                  </span>
                  <span className="font-bold">{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-2 mb-4" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Last activity:{" "}
                    {new Date(
                      enrolledCourses[0]?.lastAccessed || new Date()
                    ).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Learning Stats</CardTitle>
                <CardDescription>
                  Your learning achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-gray-900 rounded-lg">
                    <div className="mb-1">
                      <BookMarked className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-bold text-xl">{enrolledCourses.length}</div>
                    <div className="text-xs text-muted-foreground">
                      Courses Enrolled
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-gray-900 rounded-lg">
                    <div className="mb-1">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="font-bold text-xl">{completedLessons}</div>
                    <div className="text-xs text-muted-foreground">
                      Lessons Completed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Certificates</CardTitle>
                <CardDescription>
                  Your earned credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <Award className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete a course to earn your first certificate
                  </p>
                  <Button variant="outline" size="sm">
                    View All Certificates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs
            defaultValue="my-courses"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="my-courses" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>My Courses</span>
              </TabsTrigger>
              <TabsTrigger value="saved" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Saved Courses</span>
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Achievements</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="my-courses">
              <div className="space-y-6">
                {enrolledCourses.map((enrollment) => (
                  <div
                    key={enrollment.courseId}
                    className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-900 p-4 rounded-lg border border-border"
                  >
                    <div className="md:w-40 lg:w-60">
                      <img
                        src={enrollment.course?.imageUrl}
                        alt={enrollment.course?.title}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">
                        {enrollment.course?.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{enrollment.course?.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>
                            {enrollment.completedLessons} of{" "}
                            {enrollment.course?.lessons} lessons
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">
                            Progress
                          </span>
                          <span className="font-medium">
                            {enrollment.progress}%
                          </span>
                        </div>
                        <Progress value={enrollment.progress} className="h-2" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button className="gap-2">
                          <PlayCircle className="h-4 w-4" />
                          <span>Continue Learning</span>
                        </Button>
                        <Button variant="outline">View Course</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saved">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedCourses.map(
                  (course) =>
                    course && (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="aspect-video relative">
                          <img
                            src={course.imageUrl}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-rose-500"
                            >
                              <Heart className="h-4 w-4 fill-rose-500" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg line-clamp-1">
                            {course.title}
                          </CardTitle>
                          <CardDescription>
                            {course.instructor.name}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-lg font-bold">
                              ${course.price.toFixed(2)}
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{course.duration}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button className="flex-1">Enroll Now</Button>
                            <Button variant="outline" className="flex-1">
                              <Link to={`/course/${course.slug}`}>Details</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                )}
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto rounded-full w-16 h-16 flex items-center justify-center bg-primary/10">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Course Completed</CardTitle>
                    <CardDescription>
                      Complete your first course
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" disabled className="w-full">
                      Locked
                    </Button>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto rounded-full w-16 h-16 flex items-center justify-center bg-primary/10">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-2">7-Day Streak</CardTitle>
                    <CardDescription>
                      Study for 7 days in a row
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" disabled className="w-full">
                      2/7 Days
                    </Button>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto rounded-full w-16 h-16 flex items-center justify-center bg-primary/10">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Quick Learner</CardTitle>
                    <CardDescription>
                      Complete 10 lessons in a day
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" disabled className="w-full">
                      3/10 Lessons
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
