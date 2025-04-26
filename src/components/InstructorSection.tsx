
import { instructors } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InstructorSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Learn from Industry Experts</h2>
          <p className="text-muted-foreground">
            Our instructors are passionate professionals with years of experience in their fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="overflow-hidden card-hover">
              <div className="aspect-square">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {instructor.bio}
                </p>
                <Button variant="outline" size="sm" className="w-full">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
