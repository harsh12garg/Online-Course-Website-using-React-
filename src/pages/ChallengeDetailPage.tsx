
import { useParams } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Clock, Trophy, Users, CheckCircle, AlertCircle, Code, Play, Download, Share2, Bookmark, Heart } from "lucide-react";

const ChallengeDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // This would typically come from an API call based on the slug
  const challenge = {
    id: 1,
    title: "Build a React Todo App",
    slug: "react-todo-app",
    level: "beginner",
    participants: 1240,
    completionRate: 68,
    estimatedTime: "2-3 hours",
    tags: ["react", "frontend", "state management"],
    description: "Create a todo application with React that allows users to add, edit, delete, and mark tasks as complete.",
    instructions: `
      <h2>Challenge Description</h2>
      <p>In this challenge, you'll build a todo application using React. Your application should allow users to:</p>
      <ul>
        <li>Add new todo items</li>
        <li>Mark items as complete</li>
        <li>Edit existing items</li>
        <li>Delete items</li>
        <li>Filter items by status (all, active, completed)</li>
      </ul>
      
      <h2>Requirements</h2>
      <p>Your application must include the following features:</p>
      <ol>
        <li>A form to add new todo items</li>
        <li>A list of todo items, each with:</li>
        <ul>
          <li>A checkbox to toggle completion status</li>
          <li>The todo text, which should be editable</li>
          <li>A delete button</li>
        </ul>
        <li>Buttons to filter todos (All, Active, Completed)</li>
        <li>A counter showing the number of active todos</li>
        <li>The ability to persist todos (using localStorage)</li>
      </ol>
      
      <h2>Starter Code</h2>
      <p>Here's some starter code to help you get going:</p>
      
      <pre><code>
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = (e) => {
    e.preventDefault();
    // TODO: Implement add todo functionality
  };
  
  const toggleTodo = (id) => {
    // TODO: Implement toggle functionality
  };
  
  const editTodo = (id, newText) => {
    // TODO: Implement edit functionality
  };
  
  const deleteTodo = (id) => {
    // TODO: Implement delete functionality
  };
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {/* TODO: Render todos here */}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default App;
      </code></pre>
      
      <h2>Testing Criteria</h2>
      <p>Your solution will be tested against the following criteria:</p>
      <ol>
        <li>The app should correctly add, edit, delete, and toggle todos</li>
        <li>The filter functionality should work as expected</li>
        <li>Todos should persist when the page is refreshed</li>
        <li>The UI should be clean and user-friendly</li>
        <li>The code should be well-structured and maintainable</li>
      </ol>
      
      <h2>Bonus Points</h2>
      <p>For an extra challenge, try implementing one or more of these features:</p>
      <ul>
        <li>Drag and drop functionality to reorder todos</li>
        <li>A dark/light theme toggle</li>
        <li>Due dates for todos with notifications</li>
        <li>Categories or tags for todos</li>
        <li>A search function</li>
      </ul>
      
      <h2>Submission Guidelines</h2>
      <p>Submit your solution by:</p>
      <ol>
        <li>Creating a GitHub repository with your code</li>
        <li>Deploying your application to GitHub Pages, Vercel, or Netlify</li>
        <li>Sharing both URLs in your submission</li>
      </ol>
    `,
    hints: [
      "Start by implementing the basic CRUD operations before moving on to the filtering functionality.",
      "Consider using the 'useEffect' hook to handle localStorage persistence.",
      "Break down your application into smaller, reusable components for better organization.",
      "Remember to handle edge cases, such as empty inputs and duplicate todos."
    ],
    solutions: [
      {
        id: 1,
        username: "react_master",
        rating: 4.8,
        completed: true,
        solution_url: "https://github.com/react_master/todo-app",
        demo_url: "https://todo-app-demo.netlify.app/"
      },
      {
        id: 2,
        username: "code_ninja",
        rating: 4.5,
        completed: true,
        solution_url: "https://github.com/code_ninja/react-todo",
        demo_url: "https://react-todo-demo.vercel.app/"
      }
    ],
    related: [
      {
        id: 2,
        title: "Build a React Weather App",
        slug: "react-weather-app",
        level: "beginner"
      },
      {
        id: 3,
        title: "Create a React Calculator",
        slug: "react-calculator",
        level: "beginner"
      },
      {
        id: 4,
        title: "React State Management with Context API",
        slug: "react-context-api",
        level: "intermediate"
      }
    ]
  };

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
      title={challenge.title}
      showHeaderBanner={false}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-wrap gap-2 justify-between items-start mb-4">
                <h1 className="text-3xl font-bold">{challenge.title}</h1>
                <Badge className={getLevelColor(challenge.level)}>
                  {challenge.level.charAt(0).toUpperCase() + challenge.level.slice(1)}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{challenge.estimatedTime}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{challenge.participants.toLocaleString()} participants</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1" />
                  <span>{challenge.completionRate}% completion rate</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-6">
                {challenge.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6">
                {challenge.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Button className="gap-2">
                  <Play className="h-4 w-4" />
                  Start Challenge
                </Button>
                <Button variant="outline" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Like
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="instructions">
              <TabsList>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="hints">Hints</TabsTrigger>
                <TabsTrigger value="solutions">Solutions</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              <TabsContent value="instructions" className="bg-card rounded-lg shadow-sm p-6 mt-4">
                <div className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: challenge.instructions }}
                />
              </TabsContent>
              <TabsContent value="hints" className="bg-card rounded-lg shadow-sm p-6 mt-4">
                <h2 className="text-xl font-bold mb-4">Hints</h2>
                <div className="space-y-4">
                  {challenge.hints.map((hint, index) => (
                    <div key={index} className="bg-muted p-4 rounded-md">
                      <div className="flex">
                        <div className="mr-3 flex-shrink-0">
                          <AlertCircle className="h-5 w-5 text-primary" />
                        </div>
                        <p>{hint}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="solutions" className="bg-card rounded-lg shadow-sm p-6 mt-4">
                <h2 className="text-xl font-bold mb-4">Community Solutions</h2>
                {challenge.solutions.map((solution) => (
                  <Card key={solution.id} className="mb-4">
                    <CardHeader className="p-4 pb-0">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <CardTitle className="text-md">@{solution.username}</CardTitle>
                          {solution.completed && (
                            <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{solution.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" className="gap-2" asChild>
                          <a href={solution.solution_url} target="_blank" rel="noopener noreferrer">
                            <Code className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2" asChild>
                          <a href={solution.demo_url} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="discussion" className="bg-card rounded-lg shadow-sm p-6 mt-4">
                <div className="text-center py-8">
                  <h2 className="text-xl font-bold mb-2">Join the Discussion</h2>
                  <p className="text-muted-foreground mb-4">
                    Share your thoughts, ask questions, or help others with this challenge.
                  </p>
                  <Button>Login to Comment</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Current Status</span>
                      <span className="text-muted-foreground">Not Started</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-2">Challenge Resources</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        Download Starter Files
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Code className="h-4 w-4" />
                        API Documentation
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-2">Completion Stats</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Completion Rate</span>
                        <span className="font-medium">{challenge.completionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Participants</span>
                        <span className="font-medium">{challenge.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg. Completion Time</span>
                        <span className="font-medium">2.5 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Related Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {challenge.related.map((relatedChallenge) => (
                    <div key={relatedChallenge.id} className="group">
                      <a href={`/challenge/${relatedChallenge.slug}`} className="block hover:text-primary">
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {relatedChallenge.title}
                        </h3>
                        <div className="flex justify-between items-center mt-1">
                          <Badge className={getLevelColor(relatedChallenge.level)} variant="secondary">
                            {relatedChallenge.level.charAt(0).toUpperCase() + relatedChallenge.level.slice(1)}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            <ChevronRight className="h-4 w-4 inline" />
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ChallengeDetailPage;
