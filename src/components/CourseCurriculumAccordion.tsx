
import { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  CheckCircle, 
  Clock, 
  Lock, 
  Play, 
  PlayCircle 
} from "lucide-react";
import { Chapter, CourseCurriculum } from "@/lib/types";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CourseCurriculumAccordionProps {
  curriculum: CourseCurriculum;
  userProgress?: {
    completedLessons: string[];
    progress: number;
  };
}

export default function CourseCurriculumAccordion({ 
  curriculum, 
  userProgress 
}: CourseCurriculumAccordionProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([curriculum.chapters[0].id]);

  const totalLessons = curriculum.chapters.reduce(
    (acc, chapter) => acc + chapter.lessons.length, 
    0
  );
  
  const completedCount = userProgress?.completedLessons.length || 0;
  const progressPercentage = userProgress 
    ? userProgress.progress 
    : 0;

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const isLessonCompleted = (lessonId: string) => {
    return userProgress?.completedLessons.includes(lessonId) || false;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-border p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold">Course Curriculum</h3>
          <p className="text-muted-foreground">
            {curriculum.chapters.length} chapters • {totalLessons} lessons
          </p>
        </div>
        
        {userProgress && (
          <div className="w-full md:w-48">
            <div className="flex justify-between text-sm mb-1">
              <span>Your progress</span>
              <span>{completedCount}/{totalLessons} lessons</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        )}
      </div>

      <Accordion
        type="multiple"
        value={expandedChapters}
        className="w-full"
      >
        {curriculum.chapters.map((chapter, chapterIndex) => (
          <AccordionItem 
            key={chapter.id} 
            value={chapter.id}
            className="border border-border rounded-md mb-4 overflow-hidden"
          >
            <AccordionTrigger 
              onClick={() => toggleChapter(chapter.id)}
              className="px-4 py-3 hover:no-underline"
            >
              <div className="flex items-start text-left">
                <span className="font-medium text-lg">
                  Chapter {chapterIndex + 1}: {chapter.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="divide-y divide-border">
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <div 
                    key={lesson.id} 
                    className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isLessonCompleted(lesson.id) ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : lesson.isPreview ? (
                        <PlayCircle className="h-5 w-5 text-primary" />
                      ) : (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                      
                      <div>
                        <p className="font-medium">
                          {chapterIndex + 1}.{lessonIndex + 1} {lesson.title}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {lesson.duration}
                          </span>
                          {lesson.isPreview && (
                            <span className="text-primary">Preview available</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {lesson.isPreview && (
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <Play className="h-4 w-4" />
                        <span>Preview</span>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
