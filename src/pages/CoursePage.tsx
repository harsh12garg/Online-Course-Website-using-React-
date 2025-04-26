
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle, Clock, FileText, Info, Users, Play, Download, Award, BarChart, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCurriculumAccordion from "@/components/CourseCurriculumAccordion";
import CourseDetailsHeader from "@/components/CourseDetailsHeader";
import { getCourseBySlug, getCourseCurriculum } from "@/lib/data";
import CourseRatingStars from "@/components/CourseRatingStars";

interface StatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  iconColor?: string;
}

const Stat = ({ icon: Icon, value, label, iconColor = "text-muted-foreground" }: StatProps) => (
  <div className="flex flex-col items-center">
    <Icon className={`h-5 w-5 mb-1 ${iconColor}`} />
    <div className="font-bold">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<any>(null);
  const [curriculum, setCurriculum] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (slug) {
      const courseData = getCourseBySlug(slug);
      if (courseData) {
        setCourse(courseData);
        const curriculumData = getCourseCurriculum(courseData.id);
        setCurriculum(curriculumData);
      }
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Course Not Found</h1>
            <p className="text-muted-foreground mb-4">The course you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/courses">Browse Courses</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const totalLessons = curriculum?.chapters.reduce(
    (total: number, chapter: any) => total + chapter.lessons.length, 
    0
  ) || 0;

  const previewLessons = curriculum?.chapters.reduce(
    (total: number, chapter: any) => total + chapter.lessons.filter((lesson: any) => lesson.isPreview).length,
    0
  ) || 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CourseDetailsHeader 
          title={course.title} 
          description={course.description}
          instructor={course.instructor}
          updatedAt={course.updatedAt}
          level={course.level}
          category={course.category}
        />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="curriculum">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="curriculum" className="mt-6">
                  <div className="mb-4 p-4 bg-muted rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">Course Content</h3>
                      <p className="text-sm text-muted-foreground">
                        {curriculum?.chapters.length} sections • {totalLessons} lessons • {course.duration} total
                      </p>
                    </div>
                    <Button variant="link" className="text-sm p-0 h-auto">Expand All Sections</Button>
                  </div>
                  
                  {curriculum && (
                    <CourseCurriculumAccordion curriculum={curriculum} />
                  )}
                </TabsContent>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>Build complex applications with React and modern JavaScript</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>Understand React Hooks, Context API, and state management patterns</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>Implement authentication and authorization in React applications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>Create reusable components and custom hooks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>Build responsive UIs with modern CSS techniques</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>Deploy your applications to various hosting environments</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Course Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none dark:prose-invert">
                        <p>
                          This comprehensive course will take you from the fundamentals of React all the way to building complex, production-ready applications. Whether you're a beginner with some JavaScript knowledge or an experienced developer looking to expand your skillset, this course has something for everyone.
                        </p>
                        <p>
                          We'll start with the basics of React components, props, and state, then dive deeper into more advanced concepts like hooks, context API, and performance optimization. Along the way, you'll build several practical projects that you can add to your portfolio.
                        </p>
                        <h3>Course Structure</h3>
                        <p>
                          The course is divided into several modules, each building upon the previous one:
                        </p>
                        <ul>
                          <li>Introduction to React and Modern JavaScript</li>
                          <li>Building Your First React Application</li>
                          <li>React Hooks and Functional Components</li>
                          <li>State Management with Context API and Redux</li>
                          <li>Routing with React Router</li>
                          <li>Working with APIs and Data Fetching</li>
                          <li>Authentication and Authorization</li>
                          <li>Testing React Applications</li>
                          <li>Deployment and Production Optimization</li>
                        </ul>
                        <p>
                          By the end of this course, you'll have the skills and confidence to build your own React applications from scratch and tackle real-world development challenges.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Info className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                          <span>Basic knowledge of HTML, CSS, and JavaScript</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                          <span>Understanding of ES6+ features (arrow functions, destructuring, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                          <span>A code editor and Node.js installed on your computer</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                          <span>No prior React experience needed</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>About the Instructor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start">
                        <img 
                          src={course.instructor.avatar} 
                          alt={course.instructor.name} 
                          className="w-20 h-20 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{course.instructor.name}</h3>
                          <p className="text-muted-foreground mb-2">Senior React Developer & Educator</p>
                          <div className="flex items-center mb-2">
                            <CourseRatingStars rating={4.8} />
                            <span className="ml-2 text-sm text-muted-foreground">4.8 Instructor Rating</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>15 Courses</span>
                            <Users className="h-4 w-4 ml-4 mr-1" />
                            <span>25,000+ Students</span>
                          </div>
                          <p className="mt-3 text-sm">
                            {course.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Reviews</CardTitle>
                      <CardDescription>Based on 356 reviews</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
                        <div className="text-center">
                          <div className="text-4xl font-bold mb-2">{course.rating}</div>
                          <div className="mb-2">
                            <CourseRatingStars rating={course.rating} size={20} />
                          </div>
                          <p className="text-sm text-muted-foreground">Course Rating</p>
                        </div>
                        
                        <div className="col-span-2 space-y-2">
                          <div className="flex items-center">
                            <div className="w-8 text-right mr-2">5 ★</div>
                            <Progress value={85} className="h-2 flex-1" />
                            <div className="w-8 text-left ml-2 text-sm text-muted-foreground">85%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 text-right mr-2">4 ★</div>
                            <Progress value={10} className="h-2 flex-1" />
                            <div className="w-8 text-left ml-2 text-sm text-muted-foreground">10%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 text-right mr-2">3 ★</div>
                            <Progress value={3} className="h-2 flex-1" />
                            <div className="w-8 text-left ml-2 text-sm text-muted-foreground">3%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 text-right mr-2">2 ★</div>
                            <Progress value={1} className="h-2 flex-1" />
                            <div className="w-8 text-left ml-2 text-sm text-muted-foreground">1%</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 text-right mr-2">1 ★</div>
                            <Progress value={1} className="h-2 flex-1" />
                            <div className="w-8 text-left ml-2 text-sm text-muted-foreground">1%</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="border-b pb-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">James Wilson</h4>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <CourseRatingStars rating={5} showNumber={false} size={14} />
                                <span className="ml-2">2 weeks ago</span>
                              </div>
                            </div>
                            <Badge variant="outline">Verified Student</Badge>
                          </div>
                          <p className="text-sm">
                            This is one of the best React courses I've taken. The instructor explains complex concepts in a way that's easy to understand, and the projects we built were practical and engaging. Highly recommend!
                          </p>
                        </div>
                        
                        <div className="border-b pb-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">Emily Chen</h4>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <CourseRatingStars rating={4} showNumber={false} size={14} />
                                <span className="ml-2">1 month ago</span>
                              </div>
                            </div>
                            <Badge variant="outline">Verified Student</Badge>
                          </div>
                          <p className="text-sm">
                            Great course overall. The content is comprehensive and well-structured. I would have given it 5 stars, but some sections feel a bit rushed. Still, I learned a lot and would recommend it to anyone looking to master React.
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">Michael Johnson</h4>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <CourseRatingStars rating={5} showNumber={false} size={14} />
                                <span className="ml-2">2 months ago</span>
                              </div>
                            </div>
                            <Badge variant="outline">Verified Student</Badge>
                          </div>
                          <p className="text-sm">
                            As someone who was struggling with React before, this course has been a game-changer. The instructor breaks down complex topics into manageable chunks, and the hands-on projects really help solidify the concepts. I feel much more confident in my React skills now!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Load More Reviews</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={course.imageUrl} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Button variant="outline" className="bg-white/20 text-white border-white/40 backdrop-blur-sm">
                        <Play className="mr-2 h-4 w-4" />
                        Preview Course
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-3xl font-bold">${course.price}</div>
                      <div className="flex items-center">
                        <CourseRatingStars rating={course.rating} />
                        <span className="ml-1 text-sm text-muted-foreground">({course.students})</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full">Enroll Now</Button>
                      <Button variant="outline" className="w-full">Add to Wishlist</Button>
                    </div>
                    
                    <div className="mt-6 text-sm">
                      <p className="font-medium text-center mb-4">This course includes:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Play className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{course.duration} of video content</span>
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{totalLessons} lessons</span>
                        </li>
                        <li className="flex items-center">
                          <Download className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Downloadable resources</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Certificate of completion</span>
                        </li>
                        <li className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Lifetime access</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t flex justify-center gap-6">
                      <div className="text-center">
                        <Stat 
                          icon={Users} 
                          value={course.students.toLocaleString()} 
                          label="Students" 
                        />
                      </div>
                      <div className="text-center">
                        <Stat 
                          icon={Play} 
                          value={`${previewLessons} Free`} 
                          label="Previews" 
                        />
                      </div>
                      <div className="text-center">
                        <Stat 
                          icon={BarChart} 
                          value={course.level} 
                          label="Level" 
                          iconColor="text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursePage;
