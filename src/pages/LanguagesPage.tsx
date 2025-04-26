
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllLanguages } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  ArrowRight, 
  Star, 
  TrendingUp 
} from "lucide-react";

export default function LanguagesPage() {
  const navigate = useNavigate();
  const languages = getAllLanguages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Master <span className="text-primary">20+ Programming Languages</span>
              </h1>
              <p className="text-xl opacity-90 mb-10">
                Comprehensive tutorials and courses for every programming language you want to learn.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {languages.slice(0, 8).map(lang => (
                  <Badge 
                    key={lang.id} 
                    onClick={() => navigate(`/language/${lang.slug}`)}
                    className="text-md py-2 px-4 cursor-pointer bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {lang.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Browse All Programming Languages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languages.map(language => (
                <Card key={language.id} className="overflow-hidden h-full hover:shadow-lg transition-shadow card-hover">
                  <div className="h-40 bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center">
                    <img 
                      src={language.imageUrl} 
                      alt={language.name} 
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{language.name}</h3>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="font-medium">{language.popularity}%</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {language.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {language.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold mb-2">Common Use Cases:</h4>
                    <ul className="mb-6 text-sm space-y-1">
                      {language.useCases.slice(0, 3).map((useCase, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-auto"
                      onClick={() => navigate(`/language/${language.slug}`)}
                    >
                      Explore Tutorials <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Learn Programming */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Learn Programming?</h2>
              <p className="text-lg text-muted-foreground">
                Programming skills open doors to countless opportunities in today's digital world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-blue-500">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">High Demand</h3>
                  <p className="text-muted-foreground">
                    Software developers are among the most sought-after professionals worldwide, with excellent job prospects.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-green-500">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Creativity</h3>
                  <p className="text-muted-foreground">
                    Programming allows you to create anything you can imagine, from websites and apps to games and AI.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-purple-500">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lifelong Learning</h3>
                  <p className="text-muted-foreground">
                    The tech field is constantly evolving, offering endless opportunities to learn and grow professionally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
