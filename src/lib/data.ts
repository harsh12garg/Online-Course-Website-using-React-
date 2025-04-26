import { Category, Course, CourseCurriculum, Instructor, ProgrammingLanguage } from './types';

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Senior full-stack developer with 8+ years of experience building scalable web applications.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Machine learning expert and former Google engineer with a passion for teaching complex concepts.',
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'UI/UX specialist and frontend developer with experience at multiple startups and enterprise companies.',
  },
  {
    id: '4',
    name: 'James Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    bio: 'Cloud architect and DevOps expert with a focus on AWS and containerization technologies.',
  },
];

export const categories: Category[] = [
  { id: '1', name: 'Web Development', slug: 'web-development', count: 24 },
  { id: '2', name: 'Data Science', slug: 'data-science', count: 18 },
  { id: '3', name: 'Mobile Development', slug: 'mobile-development', count: 12 },
  { id: '4', name: 'DevOps', slug: 'devops', count: 8 },
  { id: '5', name: 'Machine Learning', slug: 'machine-learning', count: 15 },
  { id: '6', name: 'UI/UX Design', slug: 'ui-ux-design', count: 10 },
];

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: '1',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'A versatile scripting language primarily used for web development, enabling interactive and dynamic content on websites.',
    popularity: 95,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    tags: ['Web', 'Frontend', 'Backend', 'Full-stack'],
    useCases: ['Web Applications', 'Mobile Apps (React Native)', 'Server-side (Node.js)', 'Game Development']
  },
  {
    id: '2',
    name: 'Python',
    slug: 'python',
    description: 'A high-level, general-purpose programming language known for its readability and versatility in various domains.',
    popularity: 92,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    tags: ['Data Science', 'AI', 'Web', 'Automation'],
    useCases: ['Data Analysis', 'Machine Learning', 'Web Development', 'Automation', 'Scientific Computing']
  },
  {
    id: '3',
    name: 'Java',
    slug: 'java',
    description: 'A widely-used, object-oriented programming language designed for portability and platform independence.',
    popularity: 85,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    tags: ['Enterprise', 'Android', 'Backend'],
    useCases: ['Enterprise Applications', 'Android Apps', 'Banking Systems', 'Big Data (Hadoop)']
  },
  {
    id: '4',
    name: 'C#',
    slug: 'csharp',
    description: 'A modern, object-oriented language developed by Microsoft as part of the .NET framework.',
    popularity: 82,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    tags: ['Windows', 'Game Dev', 'Enterprise'],
    useCases: ['Windows Applications', 'Game Development (Unity)', 'Enterprise Services', 'Web Applications (.NET)']
  },
  {
    id: '5',
    name: 'TypeScript',
    slug: 'typescript',
    description: 'A strongly typed programming language that builds on JavaScript, adding static type definitions.',
    popularity: 88,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tags: ['Web', 'Frontend', 'Backend'],
    useCases: ['Large-scale Applications', 'Frontend Frameworks (Angular, React)', 'Node.js Backend']
  },
  {
    id: '6',
    name: 'PHP',
    slug: 'php',
    description: 'A server-side scripting language designed primarily for web development.',
    popularity: 75,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    tags: ['Web', 'Backend', 'CMS'],
    useCases: ['Content Management Systems', 'Web Applications', 'E-commerce (Magento, WooCommerce)']
  },
  {
    id: '7',
    name: 'Swift',
    slug: 'swift',
    description: 'A powerful and intuitive programming language developed by Apple for iOS, macOS, and other Apple platforms.',
    popularity: 78,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    tags: ['iOS', 'macOS', 'Mobile'],
    useCases: ['iOS Applications', 'macOS Applications', 'Apple Watch Apps', 'Apple TV Apps']
  },
  {
    id: '8',
    name: 'Ruby',
    slug: 'ruby',
    description: 'A dynamic, object-oriented language known for its simplicity and productivity.',
    popularity: 70,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    tags: ['Web', 'Backend', 'Scripting'],
    useCases: ['Web Applications (Ruby on Rails)', 'Automation Scripts', 'DevOps Tools']
  },
  {
    id: '9',
    name: 'Go',
    slug: 'go',
    description: 'A statically typed, compiled language designed at Google for simplicity, efficiency, and reliability.',
    popularity: 80,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    tags: ['Backend', 'Systems', 'Cloud'],
    useCases: ['Cloud Services', 'Microservices', 'System Tools', 'Web Services']
  },
  {
    id: '10',
    name: 'Rust',
    slug: 'rust',
    description: 'A systems language focusing on safety, speed, and concurrency without a garbage collector.',
    popularity: 76,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    tags: ['Systems', 'Performance', 'Safety'],
    useCases: ['System Programming', 'WebAssembly', 'Game Engines', 'Blockchain']
  },
  {
    id: '11',
    name: 'Kotlin',
    slug: 'kotlin',
    description: 'A cross-platform, statically typed language designed to interoperate with Java.',
    popularity: 79,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    tags: ['Android', 'Backend', 'Cross-platform'],
    useCases: ['Android Development', 'Server-side Applications', 'Cross-platform Mobile Apps']
  },
  {
    id: '12',
    name: 'C++',
    slug: 'cpp',
    description: 'A powerful, high-performance language extending C with object-oriented features.',
    popularity: 83,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    tags: ['Systems', 'Game Dev', 'Performance'],
    useCases: ['Game Development', 'System/Application Software', 'Embedded Systems', 'High-performance Computing']
  },
  {
    id: '13',
    name: 'C',
    slug: 'c',
    description: 'A procedural language providing low-level access to memory and hardware, known for its efficiency.',
    popularity: 81,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    tags: ['Systems', 'Embedded', 'Performance'],
    useCases: ['Operating Systems', 'Embedded Systems', 'Hardware Drivers', 'System Tools']
  },
  {
    id: '14',
    name: 'R',
    slug: 'r',
    description: 'A language for statistical computing and graphics, widely used in data analysis.',
    popularity: 71,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    tags: ['Data Science', 'Statistics', 'Visualization'],
    useCases: ['Statistical Analysis', 'Data Visualization', 'Machine Learning', 'Bioinformatics']
  },
  {
    id: '15',
    name: 'Scala',
    slug: 'scala',
    description: 'A high-level language combining object-oriented and functional programming paradigms.',
    popularity: 68,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
    tags: ['Functional', 'Big Data', 'JVM'],
    useCases: ['Big Data Processing', 'Distributed Systems', 'Web Applications', 'Data Engineering']
  },
  {
    id: '16',
    name: 'Dart',
    slug: 'dart',
    description: 'A client-optimized language for fast apps on any platform, developed by Google.',
    popularity: 73,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    tags: ['Mobile', 'Web', 'Flutter'],
    useCases: ['Cross-platform Mobile Apps (Flutter)', 'Web Applications', 'IoT Applications']
  },
  {
    id: '17',
    name: 'Elixir',
    slug: 'elixir',
    description: 'A functional, concurrent language built on the Erlang VM, designed for scalability and maintainability.',
    popularity: 65,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg',
    tags: ['Functional', 'Concurrent', 'Scalable'],
    useCases: ['Real-time Applications', 'Distributed Systems', 'Web Applications (Phoenix)']
  },
  {
    id: '18',
    name: 'Haskell',
    slug: 'haskell',
    description: 'A purely functional language with strong static typing and lazy evaluation.',
    popularity: 60,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg',
    tags: ['Functional', 'Academic', 'Type Theory'],
    useCases: ['Financial Analysis', 'Compilers', 'Academic Research', 'Parallel Programming']
  },
  {
    id: '19',
    name: 'Julia',
    slug: 'julia',
    description: 'A high-level, high-performance language for technical computing with syntax familiar to MATLAB users.',
    popularity: 62,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg',
    tags: ['Scientific', 'Data Science', 'Performance'],
    useCases: ['Scientific Computing', 'Data Analysis', 'Numerical Analysis', 'Machine Learning']
  },
  {
    id: '20',
    name: 'Assembly',
    slug: 'assembly',
    description: 'A low-level programming language that provides direct hardware access with minimal abstraction.',
    popularity: 55,
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
    tags: ['Low-level', 'Hardware', 'Performance'],
    useCases: ['Device Drivers', 'Real-time Systems', 'Operating System Kernels', 'Firmware']
  },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'React Masterclass: Build Modern Web Applications',
    slug: 'react-masterclass',
    description: 'Learn to build professional, high-performance React applications from the ground up. This comprehensive course covers everything from React fundamentals to advanced patterns and performance optimization.',
    level: 'intermediate',
    category: 'Web Development',
    language: programmingLanguages.find(lang => lang.slug === 'javascript'),
    tags: ['React', 'JavaScript', 'Frontend'],
    duration: '24h 30m',
    lessons: 78,
    instructor: instructors[0],
    rating: 4.8,
    students: 3456,
    price: 89.99,
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop',
    updatedAt: '2023-11-15',
  },
  {
    id: '2',
    title: 'Python for Data Science and Machine Learning',
    slug: 'python-data-science',
    description: 'Master data analysis, visualization, and machine learning using Python. From numpy and pandas to scikit-learn and TensorFlow, learn everything you need to become a data scientist.',
    level: 'beginner',
    category: 'Data Science',
    language: programmingLanguages.find(lang => lang.slug === 'python'),
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    duration: '28h 45m',
    lessons: 92,
    instructor: instructors[1],
    rating: 4.9,
    students: 5237,
    price: 94.99,
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2074&auto=format&fit=crop',
    updatedAt: '2023-12-01',
  },
  {
    id: '3',
    title: 'Full-Stack JavaScript: Node.js, Express, and MongoDB',
    slug: 'fullstack-javascript',
    description: 'Build complete web applications with JavaScript on both the frontend and backend. Learn Node.js, Express, MongoDB, and how to connect them with your frontend React applications.',
    level: 'intermediate',
    category: 'Web Development',
    language: programmingLanguages.find(lang => lang.slug === 'javascript'),
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    duration: '21h 15m',
    lessons: 65,
    instructor: instructors[0],
    rating: 4.7,
    students: 2789,
    price: 79.99,
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop',
    updatedAt: '2023-10-20',
  },
  {
    id: '4',
    title: 'Cloud DevOps Engineering on AWS',
    slug: 'cloud-devops-aws',
    description: 'Master DevOps practices on the AWS cloud platform. Learn CI/CD, infrastructure as code, containerization, and everything you need to become a DevOps engineer.',
    level: 'advanced',
    category: 'DevOps',
    language: programmingLanguages.find(lang => lang.slug === 'go'),
    tags: ['AWS', 'DevOps', 'CI/CD', 'Docker'],
    duration: '18h 30m',
    lessons: 56,
    instructor: instructors[3],
    rating: 4.6,
    students: 1845,
    price: 99.99,
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop',
    updatedAt: '2023-09-10',
  },
  {
    id: '5',
    title: 'UI/UX Design: From Wireframe to Prototype',
    slug: 'ui-ux-design-fundamentals',
    description: 'Learn to design beautiful, functional interfaces that users love. This course covers design principles, wireframing, prototyping, and user testing with Figma and Adobe XD.',
    level: 'beginner',
    category: 'UI/UX Design',
    language: programmingLanguages.find(lang => lang.slug === 'javascript'),
    tags: ['UI Design', 'UX Design', 'Figma', 'Adobe XD'],
    duration: '16h 20m',
    lessons: 48,
    instructor: instructors[2],
    rating: 4.8,
    students: 2156,
    price: 74.99,
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop',
    updatedAt: '2023-11-05',
  },
  {
    id: '6',
    title: 'Flutter: Build Native Mobile Apps',
    slug: 'flutter-mobile-apps',
    description: 'Build beautiful native mobile applications for both iOS and Android with Flutter. Learn Dart programming and Flutter widgets to create responsive, attractive UIs.',
    level: 'intermediate',
    category: 'Mobile Development',
    language: programmingLanguages.find(lang => lang.slug === 'dart'),
    tags: ['Flutter', 'Dart', 'Mobile', 'iOS', 'Android'],
    duration: '20h 10m',
    lessons: 62,
    instructor: instructors[2],
    rating: 4.7,
    students: 1923,
    price: 84.99,
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop',
    updatedAt: '2023-10-15',
  },
  {
    id: '7',
    title: 'Deep Learning Specialization',
    slug: 'deep-learning-specialization',
    description: 'Master the fundamentals of deep learning and neural networks. Build and train models for computer vision, natural language processing, and more with TensorFlow and PyTorch.',
    level: 'advanced',
    category: 'Machine Learning',
    language: programmingLanguages.find(lang => lang.slug === 'python'),
    tags: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'PyTorch'],
    duration: '32h 45m',
    lessons: 105,
    instructor: instructors[1],
    rating: 4.9,
    students: 3278,
    price: 109.99,
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    updatedAt: '2023-12-10',
  },
  {
    id: '8',
    title: 'TypeScript: Advanced Concepts',
    slug: 'typescript-advanced',
    description: 'Take your TypeScript skills to the next level with advanced types, decorators, generics, and more. Learn how to build robust, type-safe applications with confidence.',
    level: 'advanced',
    category: 'Web Development',
    language: programmingLanguages.find(lang => lang.slug === 'typescript'),
    tags: ['TypeScript', 'JavaScript', 'Frontend', 'Backend'],
    duration: '14h 30m',
    lessons: 42,
    instructor: instructors[0],
    rating: 4.8,
    students: 1556,
    price: 79.99,
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop',
    updatedAt: '2023-11-25',
  },
  {
    id: '9',
    title: 'C# Fundamentals for .NET Development',
    slug: 'csharp-fundamentals',
    description: 'Learn the fundamentals of C# programming and the .NET framework to build robust applications for Windows and the web.',
    level: 'beginner',
    category: 'Web Development',
    language: programmingLanguages.find(lang => lang.slug === 'csharp'),
    tags: ['.NET', 'C#', 'Backend', 'Windows'],
    duration: '18h 15m',
    lessons: 54,
    instructor: instructors[3],
    rating: 4.7,
    students: 2104,
    price: 84.99,
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2074&auto=format&fit=crop',
    updatedAt: '2023-10-05',
  },
  {
    id: '10',
    title: 'Java for Enterprise Applications',
    slug: 'java-enterprise',
    description: 'Master Java for building enterprise-grade applications. Learn Spring Boot, Hibernate, and modern Java features for robust backend systems.',
    level: 'intermediate',
    category: 'Web Development',
    language: programmingLanguages.find(lang => lang.slug === 'java'),
    tags: ['Java', 'Spring', 'Enterprise', 'Backend'],
    duration: '26h 40m',
    lessons: 78,
    instructor: instructors[3],
    rating: 4.6,
    students: 1823,
    price: 94.99,
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    updatedAt: '2023-09-20',
  },
];

export const courseCurricula: CourseCurriculum[] = [
  {
    courseId: '1',
    chapters: [
      {
        id: '1-1',
        title: 'Getting Started with React',
        lessons: [
          { id: '1-1-1', title: 'Introduction to React', duration: '10m', isPreview: true },
          { id: '1-1-2', title: 'Setting Up Your Development Environment', duration: '15m', isPreview: true },
          { id: '1-1-3', title: 'Your First React Component', duration: '20m', isPreview: false },
          { id: '1-1-4', title: 'JSX Syntax Deep Dive', duration: '25m', isPreview: false },
        ],
      },
      {
        id: '1-2',
        title: 'React Hooks',
        lessons: [
          { id: '1-2-1', title: 'Introduction to Hooks', duration: '15m', isPreview: false },
          { id: '1-2-2', title: 'useState Hook', duration: '25m', isPreview: false },
          { id: '1-2-3', title: 'useEffect Hook', duration: '30m', isPreview: false },
          { id: '1-2-4', title: 'Custom Hooks', duration: '35m', isPreview: false },
        ],
      },
      {
        id: '1-3',
        title: 'State Management',
        lessons: [
          { id: '1-3-1', title: 'Props vs State', duration: '20m', isPreview: false },
          { id: '1-3-2', title: 'Context API', duration: '30m', isPreview: false },
          { id: '1-3-3', title: 'Introduction to Redux', duration: '35m', isPreview: false },
          { id: '1-3-4', title: 'Redux Toolkit', duration: '40m', isPreview: false },
        ],
      },
    ],
  },
  {
    courseId: '2',
    chapters: [
      {
        id: '2-1',
        title: 'Python Fundamentals for Data Science',
        lessons: [
          { id: '2-1-1', title: 'Python Basics Review', duration: '20m', isPreview: true },
          { id: '2-1-2', title: 'NumPy Introduction', duration: '30m', isPreview: true },
          { id: '2-1-3', title: 'Pandas Fundamentals', duration: '45m', isPreview: false },
          { id: '2-1-4', title: 'Data Visualization with Matplotlib', duration: '35m', isPreview: false },
        ],
      },
      {
        id: '2-2',
        title: 'Machine Learning Basics',
        lessons: [
          { id: '2-2-1', title: 'Introduction to Machine Learning', duration: '25m', isPreview: false },
          { id: '2-2-2', title: 'Supervised vs Unsupervised Learning', duration: '30m', isPreview: false },
          { id: '2-2-3', title: 'Scikit-Learn Introduction', duration: '40m', isPreview: false },
          { id: '2-2-4', title: 'Building Your First ML Model', duration: '50m', isPreview: false },
        ],
      },
    ],
  },
];

export const getFeaturedCourses = (): Course[] => {
  return courses.filter(course => course.isFeatured);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
};

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};

export const getCourseCurriculum = (courseId: string): CourseCurriculum | undefined => {
  return courseCurricula.find(curriculum => curriculum.courseId === courseId);
};

export const getInstructorById = (id: string): Instructor | undefined => {
  return instructors.find(instructor => instructor.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const searchCourses = (query: string): Course[] => {
  const lowercaseQuery = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(lowercaseQuery) ||
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getAllLanguages = (): ProgrammingLanguage[] => {
  return programmingLanguages;
};

export const getLanguageBySlug = (slug: string): ProgrammingLanguage | undefined => {
  return programmingLanguages.find(lang => lang.slug === slug);
};

export const getCoursesByLanguage = (languageSlug: string): Course[] => {
  return courses.filter(course => course.language?.slug === languageSlug);
};

export const getTopLanguages = (count: number = 5): ProgrammingLanguage[] => {
  return [...programmingLanguages].sort((a, b) => b.popularity - a.popularity).slice(0, count);
};
