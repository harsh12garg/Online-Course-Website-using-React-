
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  language?: ProgrammingLanguage;
  tags: string[];
  duration: string;
  lessons: number;
  instructor: Instructor;
  rating: number;
  students: number;
  price: number;
  isFeatured: boolean;
  imageUrl: string;
  updatedAt: string;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  slug: string;
  description: string;
  popularity: number;
  imageUrl: string;
  tags: string[];
  useCases: string[];
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseCurriculum {
  courseId: string;
  chapters: Chapter[];
}

export interface UserProgress {
  courseId: string;
  progress: number;
  completedLessons: string[];
  lastViewed: string;
}
