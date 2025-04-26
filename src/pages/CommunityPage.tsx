
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, MessageSquare, ThumbsUp, Eye, Users, Calendar, Globe, Award, Star } from "lucide-react";

const CommunityPage = () => {
  // Placeholder community posts data
  const posts = [
    {
      id: 1,
      title: "How to optimize React performance with useMemo?",
      author: {
        name: "Sarah Johnson",
        avatar: "https://via.placeholder.com/150",
        role: "Senior Developer",
      },
      category: "React",
      tags: ["react", "performance", "hooks"],
      publishedAt: "2 hours ago",
      views: 342,
      likes: 48,
      comments: 15,
      excerpt: "I've been working on a large React application and noticed some performance issues. I've heard useMemo can help but I'm not sure how to implement it effectively..."
    },
    {
      id: 2,
      title: "Building a CI/CD pipeline with GitHub Actions - My experience",
      author: {
        name: "Mark Wilson",
        avatar: "https://via.placeholder.com/150",
        role: "DevOps Engineer",
      },
      category: "DevOps",
      tags: ["ci/cd", "github-actions", "automation"],
      publishedAt: "5 hours ago",
      views: 256,
      likes: 37,
      comments: 8,
      excerpt: "I recently set up a CI/CD pipeline for our project using GitHub Actions and wanted to share my experience and best practices I've learned along the way..."
    },
    {
      id: 3,
      title: "Migrating from REST to GraphQL - Lessons Learned",
      author: {
        name: "Emily Chen",
        avatar: "https://via.placeholder.com/150",
        role: "Backend Developer",
      },
      category: "API Development",
      tags: ["graphql", "rest", "api"],
      publishedAt: "1 day ago",
      views: 521,
      likes: 76,
      comments: 23,
      excerpt: "Our team recently migrated a large REST API to GraphQL. Here are some challenges we faced and how we overcame them..."
    },
    {
      id: 4,
      title: "Implementing authentication with JWT in Node.js",
      author: {
        name: "Alex Rodriguez",
        avatar: "https://via.placeholder.com/150",
        role: "Full Stack Developer",
      },
      category: "Security",
      tags: ["authentication", "jwt", "nodejs"],
      publishedAt: "2 days ago",
      views: 412,
      likes: 52,
      comments: 18,
      excerpt: "I want to share a secure approach to implementing JWT authentication in a Node.js application with best practices for token handling and security..."
    },
    {
      id: 5,
      title: "My journey from junior to senior developer in 3 years",
      author: {
        name: "Jessica Park",
        avatar: "https://via.placeholder.com/150",
        role: "Senior Developer",
      },
      category: "Career",
      tags: ["career", "growth", "learning"],
      publishedAt: "3 days ago",
      views: 876,
      likes: 143,
      comments: 45,
      excerpt: "I wanted to share my journey from a junior developer to a senior role in just 3 years, including challenges faced and strategies that worked for me..."
    }
  ];

  // Placeholder community members data
  const topMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://via.placeholder.com/150",
      role: "Community Leader",
      contributions: 256,
      joined: "Feb 2021"
    },
    {
      id: 2,
      name: "Maya Patel",
      avatar: "https://via.placeholder.com/150",
      role: "Moderator",
      contributions: 189,
      joined: "Apr 2021"
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      avatar: "https://via.placeholder.com/150",
      role: "Top Contributor",
      contributions: 145,
      joined: "Jul 2021"
    }
  ];

  // Placeholder events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "Aug 15, 2023",
      time: "2:00 PM EST",
      attendees: 78
    },
    {
      id: 2,
      title: "Introduction to Machine Learning",
      date: "Aug 22, 2023",
      time: "1:00 PM EST",
      attendees: 42
    },
    {
      id: 3,
      title: "React State Management Panel",
      date: "Aug 28, 2023",
      time: "3:00 PM EST",
      attendees: 56
    }
  ];

  return (
    <PageTemplate 
      title="Community" 
      subtitle="Connect with fellow developers, share knowledge, and grow together"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    className="pl-10 w-full md:w-72"
                    placeholder="Search discussions..."
                  />
                </div>
              </div>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Start New Discussion
              </Button>
            </div>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All Discussions</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="space-y-4">
                  {posts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 pb-0">
                        <div className="flex justify-between items-start">
                          <a href={`/community/post/${post.id}`} className="block">
                            <CardTitle className="text-xl hover:text-primary transition-colors">
                              {post.title}
                            </CardTitle>
                          </a>
                          <Badge variant="outline">{post.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-sm font-medium">{post.author.name}</span>
                            <span className="text-xs text-muted-foreground ml-2">{post.author.role}</span>
                          </div>
                          <span className="text-xs text-muted-foreground ml-auto">{post.publishedAt}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="popular" className="mt-4">
                <p className="text-center py-8 text-muted-foreground">
                  Popular discussions would appear here.
                </p>
              </TabsContent>
              <TabsContent value="recent" className="mt-4">
                <p className="text-center py-8 text-muted-foreground">
                  Recent discussions would appear here.
                </p>
              </TabsContent>
              <TabsContent value="unanswered" className="mt-4">
                <p className="text-center py-8 text-muted-foreground">
                  Unanswered discussions would appear here.
                </p>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline">
                Load More Discussions
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">12.5K</div>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">8.3K</div>
                    <div className="text-sm text-muted-foreground">Discussions</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">42.7K</div>
                    <div className="text-sm text-muted-foreground">Comments</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">356</div>
                    <div className="text-sm text-muted-foreground">Online Now</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topMembers.map((member) => (
                    <div key={member.id} className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <span>{member.role}</span>
                          <span className="mx-2">•</span>
                          <Star className="h-3 w-3 mr-1 text-yellow-500" />
                          <span>{member.contributions} contributions</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="group">
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex justify-between items-center mt-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Join Event
                        </Button>
                      </div>
                      {event.id !== upcomingEvents.length && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">
                  View All Events
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    javascript
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    react
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    python
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    nodejs
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    typescript
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    graphql
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    css
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    database
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    devops
                  </Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer">
                    career
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CommunityPage;
