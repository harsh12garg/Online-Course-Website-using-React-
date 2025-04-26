
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import CoursePage from "./pages/CoursePage";
import CoursesPage from "./pages/CoursesPage";
import CategoryPage from "./pages/CategoryPage";
import DashboardPage from "./pages/DashboardPage";
import LanguagesPage from "./pages/LanguagesPage";
import LanguageDetailPage from "./pages/LanguageDetailPage";
import NotFound from "./pages/NotFound";
import TutorialsPage from "./pages/TutorialsPage";
import TutorialDetailPage from "./pages/TutorialDetailPage";
import ChallengesPage from "./pages/ChallengesPage";
import ChallengeDetailPage from "./pages/ChallengeDetailPage";
import CommunityPage from "./pages/CommunityPage";
import DocumentationPage from "./pages/DocumentationPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

// Pages that have been fully implemented
const implementedPages = [
  { path: "/", element: <Index /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/course/:slug", element: <CoursePage /> },
  { path: "/category/:slug", element: <CategoryPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/languages", element: <LanguagesPage /> },
  { path: "/language/:slug", element: <LanguageDetailPage /> },
  { path: "/tutorials", element: <TutorialsPage /> },
  { path: "/tutorial/:slug", element: <TutorialDetailPage /> },
  { path: "/challenges", element: <ChallengesPage /> },
  { path: "/challenge/:slug", element: <ChallengeDetailPage /> },
  { path: "/community", element: <CommunityPage /> },
  { path: "/documentation", element: <DocumentationPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/settings", element: <SettingsPage /> },
];

// Pages that use the placeholder component
const placeholderPaths = [
  "/api-reference",
  "/cheat-sheets",
  "/roadmaps",
  "/best-practices",
  "/playground",
  "/code-analyzer",
  "/project-generator",
  "/code-converter",
  "/snippets",
  "/help",
  "/contact",
  "/faq",
  "/blog",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Fully implemented pages */}
            {implementedPages.map((page) => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
            
            {/* Placeholder pages */}
            {placeholderPaths.map((path) => (
              <Route key={path} path={path} element={<PlaceholderPage />} />
            ))}
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
