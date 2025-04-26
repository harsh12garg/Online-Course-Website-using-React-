
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-primary">CodeMaster</h2>
            </Link>
            <p className="text-muted-foreground mb-6">
              Empowering developers with expert-led courses and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Github">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/category/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/category/data-science" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/category/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/category/machine-learning" className="text-muted-foreground hover:text-primary transition-colors">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-muted-foreground hover:text-primary transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates and offers delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Your email" className="pl-10" />
              </div>
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CodeMaster. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
