
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "I've taken many programming courses online, but this platform stands out. The quality of instruction and the hands-on projects gave me the confidence to land my first developer job after just 6 months of learning.",
    author: "Michael Thompson",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    company: "Tech Innovators"
  },
  {
    id: 2,
    content: "As someone switching careers from marketing to data science, I needed a structured learning path. The courses here provided exactly that, with clear explanations and practical examples that built my skills step by step.",
    author: "Emma Rodriguez",
    role: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    company: "Data Insights Inc."
  },
  {
    id: 3,
    content: "The React course was incredible. I went from struggling with basic concepts to confidently building complex applications. The instructor's attention to detail and real-world examples made all the difference.",
    author: "David Chen",
    role: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    company: "WebSolutions LLC"
  },
  {
    id: 4,
    content: "I appreciate how the courses focus on current industry practices. The DevOps curriculum taught me skills I use daily in my job, and the certification helped me negotiate a higher salary at my new position.",
    author: "Sophia Jackson",
    role: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    company: "Cloud Systems"
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex * itemsPerView,
    (activeIndex + 1) * itemsPerView
  );

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground">
            Success stories from students who transformed their careers through our platform.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
