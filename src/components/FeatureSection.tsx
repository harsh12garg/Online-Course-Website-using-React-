
import { CheckCircle, Book, Cpu, Clock, UserCheck, Award } from "lucide-react";

const features = [
  {
    icon: Book,
    title: "Expert-Crafted Curriculum",
    description: "Courses designed by industry professionals with years of real-world experience."
  },
  {
    icon: Cpu,
    title: "Hands-On Projects",
    description: "Build portfolio-worthy projects that showcase your skills to employers."
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access course content 24/7 and learn according to your schedule."
  },
  {
    icon: UserCheck,
    title: "Community Support",
    description: "Join a community of learners and get help when you need it."
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn certificates upon completion to validate your skills."
  },
  {
    icon: CheckCircle,
    title: "Job-Ready Skills",
    description: "Learn exactly what employers are looking for in today's tech landscape."
  }
];

export default function FeatureSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Learn With Us</h2>
          <p className="text-muted-foreground">
            Our platform offers a comprehensive learning experience designed to transform beginners into job-ready professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
