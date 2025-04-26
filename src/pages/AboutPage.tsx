
import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BadgeCheck, BriefcaseBusiness, BookOpen, Trophy, Users, Globe, Heart } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      avatar: "https://via.placeholder.com/150",
      bio: "Former senior engineer at Google with 10+ years of experience in education technology."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Chief Content Officer",
      avatar: "https://via.placeholder.com/150",
      bio: "Computer Science professor with a passion for making complex topics accessible to everyone."
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      role: "Head of Engineering",
      avatar: "https://via.placeholder.com/150",
      bio: "Full-stack developer with expertise in building scalable educational platforms."
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Lead Instructor",
      avatar: "https://via.placeholder.com/150",
      bio: "Software architect with 8+ years of experience teaching programming at all levels."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "CodeMaster Founded",
      description: "Started with just 5 courses and a mission to make programming education accessible to everyone."
    },
    {
      year: "2019",
      title: "First 10,000 Students",
      description: "Reached our first major milestone with 10,000 students enrolled in our courses."
    },
    {
      year: "2020",
      title: "Community Platform Launch",
      description: "Expanded our platform to include community features, allowing students to connect and learn together."
    },
    {
      year: "2021",
      title: "Interactive Coding Environment",
      description: "Launched our interactive coding environment, enabling students to practice coding directly in the browser."
    },
    {
      year: "2022",
      title: "Mobile App Release",
      description: "Released our mobile app for iOS and Android, allowing students to learn on the go."
    },
    {
      year: "2023",
      title: "1 Million Students",
      description: "Reached the incredible milestone of helping 1 million students learn programming skills."
    }
  ];

  const stats = [
    {
      value: "1M+",
      label: "Students",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      value: "200+",
      label: "Courses",
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      value: "50+",
      label: "Countries",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      value: "95%",
      label: "Satisfaction",
      icon: <Heart className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <PageTemplate 
      title="About Us" 
      subtitle="Learn about our mission, team, and the story behind CodeMaster"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At CodeMaster, we believe that programming education should be accessible, engaging, and effective for everyone. Our mission is to empower the next generation of developers with the skills they need to succeed in the digital world.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We're committed to creating high-quality learning experiences that combine theoretical knowledge with practical application, all delivered in an interactive and supportive environment.
              </p>
              <div className="flex space-x-4">
                <Button>Join Our Community</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://via.placeholder.com/800x450" 
                  alt="Team working together" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">Founded in 2018</p>
                <p>With a passion for education</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="mb-16 py-12 bg-muted rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              We're proud of the difference we're making in the world of programming education
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {stat.icon}
                  <span className="text-3xl font-bold mt-2">{stat.value}</span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts is passionate about education and technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Team Members</Button>
          </div>
        </section>
        
        {/* Values & History Section */}
        <section className="mb-16">
          <Tabs defaultValue="values">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger value="values">Our Values</TabsTrigger>
              <TabsTrigger value="history">Our History</TabsTrigger>
            </TabsList>
            <TabsContent value="values" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                      <BadgeCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quality First</h3>
                    <p className="text-muted-foreground">
                      We're committed to providing the highest quality educational content and experiences for our students.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of community to enhance learning and foster collaboration among students.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                    <p className="text-muted-foreground">
                      We strive to make programming education accessible to everyone, regardless of background or location.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="history" className="mt-8">
              <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-10">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <div className="bg-card rounded-lg p-6 shadow-sm">
                      <span className="text-primary font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Partners & Recognition Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Partners & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with leading organizations and be recognized for our contributions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-8">
            <img src="https://via.placeholder.com/150x80" alt="Partner 1" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/150x80" alt="Partner 2" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/150x80" alt="Partner 3" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/150x80" alt="Partner 4" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-muted p-3 rounded-lg flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              <span>Best Educational Platform 2022</span>
            </div>
            <div className="bg-muted p-3 rounded-lg flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              <span>EdTech Innovation Award 2023</span>
            </div>
            <div className="bg-muted p-3 rounded-lg flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              <span>Top E-Learning Platform</span>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-primary/90 to-primary p-8 md:p-12 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Whether you're looking to learn programming, teach others, or partner with us, we'd love to have you as part of our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" className="bg-white text-primary hover:bg-white/90">
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                Career Opportunities
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <BookOpen className="mr-2 h-4 w-4" />
                Become an Instructor
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default AboutPage;
