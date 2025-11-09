export interface User {
  avatar: string;
  email: string;
  full_name: string;
  gender: string | null;
  id: number;
  phone: string;
  role: string;
}

export interface Books {
  id: number;
  name: string;
  author: string;
  subject: string;
  level: string;
  teacher: string;
  description: string;
  image: string;
  min_file: string;
  file: string;
  price: number;
  count: number;
  is_favorite: boolean;
}

export interface Courses {
  id: number;
  cour_no: string;
  title: string;
  description: string;
  meta_description: string;
  meta_keywords: string;
  image: string;
  cover: string;
  price: number | null;
  level: string;
  subject: string;
  teacher: string | null;
  teacher_id: number;
  is_favorite: boolean;
  is_purchased: boolean;
  modules: Array<{
    details: {
      course_id: number;
      course_name: string;
      created_at: string;
      description: string;
      has_quiz: boolean;
      id: number;
      quiz: Array<{
        created_at: string;
        id: number;
        questions: Array<{
          correct_answer: number;
          exam: string;
          id: number;
          options: Array<any>;
          question: string;
        }>;
        questions_count: number;
        thumbnail: string;
        title: string;
        type: string;
      }>;
    };
  }>;
  created_at: string;
}

export interface BlogTypes {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  meta_description: string | null;
  meta_keywords: string | null;
  created_at: string;
}

export interface Teachers {
  id: number;
  about: string | null;
  courses: Courses[];
  cover: string;
  created_at: string;
  description: string | null;
  levels: string;
  subject: string;
  tech_no: string;
  type: string;
  user: User;
}