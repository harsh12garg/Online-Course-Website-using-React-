
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Course } from "@/lib/types";
import { categories, courses, searchCourses } from "@/lib/data";
import { Check, Filter, Search, X } from "lucide-react";
import CtaSection from "@/components/CtaSection";

const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number[]>([0, 150]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Initialize states from URL params
  useEffect(() => {
    const query = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const level = searchParams.get("level") || "";
    const minPrice = searchParams.get("minPrice") || "0";
    const maxPrice = searchParams.get("maxPrice") || "150";

    setSearchQuery(query);
    setSelectedCategory(category);
    setSelectedLevel(level);
    setSelectedPrice([parseInt(minPrice), parseInt(maxPrice)]);
  }, [searchParams]);

  // Apply filters
  useEffect(() => {
    let result = courses;

    if (searchQuery) {
      result = searchCourses(searchQuery);
    }

    if (selectedCategory) {
      result = result.filter(
        (course) => course.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedLevel) {
      result = result.filter(
        (course) => course.level === selectedLevel
      );
    }

    result = result.filter(
      (course) => course.price >= selectedPrice[0] && course.price <= selectedPrice[1]
    );

    setFilteredCourses(result);
  }, [searchQuery, selectedCategory, selectedLevel, selectedPrice]);

  // Update URL with filters
  const applyFilters = () => {
    const params: Record<string, string> = {};
    
    if (searchQuery) params.search = searchQuery;
    if (selectedCategory) params.category = selectedCategory;
    if (selectedLevel) params.level = selectedLevel;
    params.minPrice = selectedPrice[0].toString();
    params.maxPrice = selectedPrice[1].toString();
    
    setSearchParams(params);
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedLevel("");
    setSelectedPrice([0, 150]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover our comprehensive library of programming courses, designed to help you master the skills needed for your career.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter toggle */}
            <div className="lg:hidden w-full mb-4">
              <Button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            {/* Filters sidebar */}
            <div className={`${isFilterOpen ? "block" : "hidden"} lg:block lg:w-1/4 space-y-8`}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="text-primary text-sm hover:text-primary/90"
                  >
                    Reset All
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <Label htmlFor="search" className="text-base font-medium">
                      Search
                    </Label>
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <X className="h-4 w-4 text-muted-foreground" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <Label htmlFor="category" className="text-base font-medium">
                      Category
                    </Label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger id="category" className="mt-2">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Level */}
                  <div>
                    <Label className="text-base font-medium">Level</Label>
                    <div className="space-y-2 mt-2">
                      {["beginner", "intermediate", "advanced"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox
                            id={level}
                            checked={selectedLevel === level}
                            onCheckedChange={() =>
                              setSelectedLevel(
                                selectedLevel === level ? "" : level
                              )
                            }
                          />
                          <label
                            htmlFor={level}
                            className="text-sm font-medium capitalize cursor-pointer"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium">Price</Label>
                      <span className="text-sm text-muted-foreground">
                        ${selectedPrice[0]} - ${selectedPrice[1]}
                      </span>
                    </div>
                    <Slider
                      defaultValue={[0, 150]}
                      value={selectedPrice}
                      onValueChange={setSelectedPrice}
                      min={0}
                      max={150}
                      step={5}
                      className="mt-6"
                    />
                  </div>

                  {/* Apply button */}
                  <Button className="w-full" onClick={applyFilters}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Course grid */}
            <div className="lg:w-3/4">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <p className="text-muted-foreground mb-4 sm:mb-0">
                  Showing <span className="font-medium">{filteredCourses.length}</span> courses
                </p>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-slate-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-lg font-medium mb-2">No courses found</p>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
