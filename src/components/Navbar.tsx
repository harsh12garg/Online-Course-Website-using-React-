
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, Search, X, Sun, Moon, BookOpen, Code, Zap, Award, Users, Info, FileText, PhoneCall, Settings, HelpCircle, BookMarked, Globe, Layers, Database, Terminal, GitBranch, GitPullRequest, Coffee, Upload, Download, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/data";
import { useTheme } from "@/hooks/use-theme";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  const mainMenuItems = [
    { name: "Home", path: "/", icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { name: "Courses", path: "/courses", icon: <BookMarked className="w-4 h-4 mr-2" /> },
    { name: "Languages", path: "/languages", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Tutorials", path: "/tutorials", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "Challenges", path: "/challenges", icon: <Zap className="w-4 h-4 mr-2" /> },
    { name: "Community", path: "/community", icon: <Users className="w-4 h-4 mr-2" /> },
  ];

  const resourceMenuItems = [
    { name: "Documentation", path: "/documentation", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "API Reference", path: "/api-reference", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Cheat Sheets", path: "/cheat-sheets", icon: <BookMarked className="w-4 h-4 mr-2" /> },
    { name: "Roadmaps", path: "/roadmaps", icon: <GitBranch className="w-4 h-4 mr-2" /> },
    { name: "Best Practices", path: "/best-practices", icon: <Award className="w-4 h-4 mr-2" /> },
  ];

  const toolsMenuItems = [
    { name: "Code Playground", path: "/playground", icon: <Terminal className="w-4 h-4 mr-2" /> },
    { name: "Code Analyzer", path: "/code-analyzer", icon: <Database className="w-4 h-4 mr-2" /> },
    { name: "Project Generator", path: "/project-generator", icon: <Layers className="w-4 h-4 mr-2" /> },
    { name: "Code Converter", path: "/code-converter", icon: <GitPullRequest className="w-4 h-4 mr-2" /> },
    { name: "Code Snippets", path: "/snippets", icon: <Code className="w-4 h-4 mr-2" /> },
  ];

  const supportMenuItems = [
    { name: "Help Center", path: "/help", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
    { name: "Contact Us", path: "/contact", icon: <PhoneCall className="w-4 h-4 mr-2" /> },
    { name: "About Us", path: "/about", icon: <Info className="w-4 h-4 mr-2" /> },
    { name: "FAQ", path: "/faq", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
    { name: "Blog", path: "/blog", icon: <FileText className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">CodeMaster</h1>
            </Link>
            <div className="hidden lg:block ml-10">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                        <div>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/courses"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium mb-1">
                                <BookMarked className="w-4 h-4 inline-block mr-2" />
                                All Courses
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Browse our full catalog of programming courses
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/dashboard"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium mb-1">
                                <Users className="w-4 h-4 inline-block mr-2" />
                                My Learning
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Access your enrolled courses and track progress
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="col-span-2">
                          <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Categories</div>
                          <div className="grid grid-cols-2 gap-2">
                            {categories.slice(0, 6).map((category) => (
                              <Link 
                                key={category.id}
                                to={`/category/${category.slug}`}
                                className="text-sm text-muted-foreground hover:text-foreground flex items-center py-1"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {resourceMenuItems.map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none flex items-center">
                                  {item.icon}
                                  {item.name}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {toolsMenuItems.map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none flex items-center">
                                  {item.icon}
                                  {item.name}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/languages">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Languages
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-64 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4 text-gray-500" />
              </button>
            </form>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src="/avatars/01.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex w-full items-center">
                    <BarChart2 className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/profile" className="flex w-full items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex w-full items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Coffee className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" size="sm" className="rounded-full lg:flex hidden">
              Log in
            </Button>
            <Button size="sm" className="rounded-full lg:flex hidden">
              Sign up
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="mr-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
            <form 
              onSubmit={(e) => {
                handleSearch(e);
                setIsMenuOpen(false);
              }}
              className="relative px-3 py-2"
            >
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-6 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4 text-gray-500" />
              </button>
            </form>

            <div className="px-3 py-1">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Main Menu</h3>
            </div>
            {mainMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium flex items-center",
                  pathname === item.path 
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-700 dark:text-gray-300 hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
                {item.name === "Courses" && <Badge className="ml-2 bg-primary/20 text-primary text-xs">New</Badge>}
              </Link>
            ))}
            
            <div className="px-3 py-1 pt-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Resources</h3>
            </div>
            {resourceMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:text-primary flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-1 pt-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Tools</h3>
            </div>
            {toolsMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:text-primary flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-1 pt-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Support</h3>
            </div>
            {supportMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:text-primary flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            <div className="flex space-x-4 px-3 py-4">
              <Button variant="outline" size="sm" className="w-1/2 rounded-full">
                Log in
              </Button>
              <Button size="sm" className="w-1/2 rounded-full">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
