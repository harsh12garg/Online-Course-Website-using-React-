
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLanguageBySlug, getCoursesByLanguage } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  BookOpen, 
  Code, 
  FileCode, 
  TrendingUp, 
  Star 
} from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export default function LanguageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const language = slug ? getLanguageBySlug(slug) : undefined;
  const courses = slug ? getCoursesByLanguage(slug) : [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!language) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Language Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The language you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={() => navigate("/languages")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Languages
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/10 p-8 rounded-full">
                  <img 
                    src={language.imageUrl} 
                    alt={language.name} 
                    className="h-32 w-32 md:h-40 md:w-40 object-contain"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <Button 
                  variant="ghost" 
                  className="mb-4 text-white hover:text-white hover:bg-white/10"
                  onClick={() => navigate("/languages")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> All Languages
                </Button>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{language.name}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  {language.tags.map(tag => (
                    <Badge key={tag} className="bg-white/15">{tag}</Badge>
                  ))}
                  <Badge className="bg-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" /> {language.popularity}% Popularity
                  </Badge>
                </div>
                
                <p className="text-lg opacity-90 mb-6">{language.description}</p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button size="lg">Start Learning</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                    <FileCode className="mr-2 h-4 w-4" /> View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Language Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">About {language.name}</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Overview</h3>
                  <p className="text-muted-foreground mb-4">
                    {language.description} It's designed to be {language.tags.join(', ').toLowerCase()} 
                    focused, making it an excellent choice for developers looking to build 
                    robust applications in these domains.
                  </p>
                  <p className="text-muted-foreground">
                    With a popularity score of {language.popularity}%, {language.name} ranks 
                    among the most widely used programming languages in the industry, with a 
                    vibrant community and extensive resources for learning.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Key Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {language.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border rounded-lg bg-white dark:bg-slate-800">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">{useCase}</h4>
                          <p className="text-sm text-muted-foreground">
                            {language.name} is widely used for {useCase.toLowerCase()} development.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Learning Path</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Level</TableHead>
                        <TableHead>Skills</TableHead>
                        <TableHead>Estimated Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Beginner</TableCell>
                        <TableCell>Syntax, Basic Concepts, Simple Programs</TableCell>
                        <TableCell>4-6 weeks</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Intermediate</TableCell>
                        <TableCell>Data Structures, Algorithms, Libraries/Frameworks</TableCell>
                        <TableCell>2-3 months</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Advanced</TableCell>
                        <TableCell>Design Patterns, Performance, Advanced Frameworks</TableCell>
                        <TableCell>3-6 months</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-slate-800 border rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Start Learning {language.name}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                        Available Courses
                      </span>
                      <Badge variant="outline">{courses.length}</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-muted-foreground" />
                        Difficulty
                      </span>
                      <Badge variant="outline">
                        {courses.length > 0 ? 
                          courses.every(c => c.level === 'beginner') ? 'Beginner' : 
                          courses.every(c => c.level === 'advanced') ? 'Advanced' : 
                          'Beginner to Advanced'
                        : 'All Levels'}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                        Industry Demand
                      </span>
                      <Badge variant={language.popularity > 80 ? "default" : language.popularity > 70 ? "secondary" : "outline"}>
                        {language.popularity > 80 ? 'High' : language.popularity > 70 ? 'Medium' : 'Growing'}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full mb-3">Enroll in {language.name} Track</Button>
                  <Button variant="outline" className="w-full">Download Syllabus</Button>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-2">Related Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {language.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        {courses.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {language.name} Courses and Tutorials
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map(course => (
                  <CourseCard key={course.id} course={course} featured={course.isFeatured} />
                ))}
              </div>
              
              {courses.length < 3 && (
                <div className="mt-12 text-center bg-slate-100 dark:bg-slate-800 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-2">More Courses Coming Soon!</h3>
                  <p className="text-muted-foreground mb-6">
                    We're working on additional {language.name} courses for all skill levels.
                  </p>
                  <Button variant="outline">Request a Course</Button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
