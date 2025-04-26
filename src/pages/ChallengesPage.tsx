
import { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Search, Code, Clock, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ChallengesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Placeholder challenge data
  const challenges = [
    {
      id: 1,
      title: "Build a React Todo App",
      slug: "react-todo-app",
      level: "beginner",
      participants: 1240,
      completionRate: "68%",
      estimatedTime: "2-3 hours",
      tags: ["react", "frontend", "state management"],
      description: "Create a todo application with React that allows users to add, edit, delete, and mark tasks as complete."
    },
    {
      id: 2,
      title: "Binary Search Algorithm Challenge",
      slug: "binary-search-algorithm",
      level: "intermediate",
      participants: 890,
      completionRate: "45%",
      estimatedTime: "1-2 hours",
      tags: ["algorithms", "binary search", "javascript"],
      description: "Implement a binary search algorithm in JavaScript and optimize it for large data sets."
    },
    {
      id: 3,
      title: "Build a RESTful API with Express",
      slug: "restful-api-express",
      level: "intermediate",
      participants: 760,
      completionRate: "62%",
      estimatedTime: "4-5 hours",
      tags: ["nodejs", "express", "api", "backend"],
      description: "Create a RESTful API with Express.js that includes authentication, CRUD operations, and proper error handling."
    },
    {
      id: 4,
      title: "Create a CSS Grid Layout System",
      slug: "css-grid-layout-system",
      level: "beginner",
      participants: 1150,
      completionRate: "75%",
      estimatedTime: "2-3 hours",
      tags: ["css", "grid", "responsive", "frontend"],
      description: "Build a responsive layout system using CSS Grid that can adapt to different screen sizes."
    },
    {
      id: 5,
      title: "Implement a Sudoku Solver",
      slug: "sudoku-solver",
      level: "advanced",
      participants: 580,
      completionRate: "38%",
      estimatedTime: "5-6 hours",
      tags: ["algorithms", "backtracking", "python"],
      description: "Create a program that can solve any valid Sudoku puzzle using backtracking algorithm."
    },
    {
      id: 6,
      title: "Build a GraphQL API with Apollo Server",
      slug: "graphql-apollo-server",
      level: "intermediate",
      participants: 620,
      completionRate: "55%",
      estimatedTime: "4-5 hours",
      tags: ["graphql", "apollo", "api", "backend"],
      description: "Create a GraphQL API using Apollo Server that includes queries, mutations, and proper resolvers."
    }
  ];

  const difficultyLevels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  const tags = [
    "All",
    "Frontend",
    "Backend",
    "Algorithms",
    "Data Structures",
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "API"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <PageTemplate 
      title="Coding Challenges" 
      subtitle="Test your skills with our programming challenges and improve your problem-solving abilities"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="w-full md:w-96">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-10"
                placeholder="Search challenges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            {difficultyLevels.map((level) => (
              <Button 
                key={level} 
                variant="outline" 
                className="whitespace-nowrap"
                size="sm"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Challenges</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getLevelColor(challenge.level)}>
                        {challenge.level.charAt(0).toUpperCase() + challenge.level.slice(1)}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Trophy className="h-3 w-3 mr-1" />
                        <span>{challenge.completionRate} completion</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      <Link to={`/challenge/${challenge.slug}`} className="hover:text-primary transition-colors">
                        {challenge.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <p className="text-muted-foreground text-sm mb-4">
                      {challenge.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {challenge.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-0">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{challenge.estimatedTime}</span>
                      <Users className="h-3 w-3 ml-3 mr-1" />
                      <span>{challenge.participants.toLocaleString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Start Challenge
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Would render popular challenges here using the same card component */}
              <p className="col-span-full text-center py-8 text-muted-foreground">
                Popular challenges would appear here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="new" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Would render new challenges here using the same card component */}
              <p className="col-span-full text-center py-8 text-muted-foreground">
                New challenges would appear here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Would render trending challenges here using the same card component */}
              <p className="col-span-full text-center py-8 text-muted-foreground">
                Trending challenges would appear here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline">
            Load More Challenges
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ChallengesPage;
