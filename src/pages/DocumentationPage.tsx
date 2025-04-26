
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, FileText, Book, Code, BookOpen } from "lucide-react";

const DocumentationPage = () => {
  return (
    <PageTemplate
      title="Documentation"
      subtitle="Comprehensive guides and reference documentation for all programming languages and tools"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              className="pl-10 py-6 text-lg"
              placeholder="Search documentation..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                New to programming? Start here with our beginner-friendly guides and tutorials.
              </p>
              <Button variant="link" className="px-0" asChild>
                <a href="#">Explore Guides</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>API Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Detailed API documentation for all programming languages, frameworks, and libraries.
              </p>
              <Button variant="link" className="px-0" asChild>
                <a href="#">Browse APIs</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Learn industry best practices for writing clean, efficient, and maintainable code.
              </p>
              <Button variant="link" className="px-0" asChild>
                <a href="#">Read Guidelines</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Popular Documentation</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our most frequently accessed documentation pages
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-6 flex flex-col">
              <BookOpen className="h-10 w-10 mb-2 text-primary" />
              <span className="font-bold">JavaScript</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col">
              <BookOpen className="h-10 w-10 mb-2 text-primary" />
              <span className="font-bold">Python</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col">
              <BookOpen className="h-10 w-10 mb-2 text-primary" />
              <span className="font-bold">React</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col">
              <BookOpen className="h-10 w-10 mb-2 text-primary" />
              <span className="font-bold">Node.js</span>
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DocumentationPage;
