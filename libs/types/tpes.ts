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
  name: string;
  description: string;
  image: string;
  price: number;
  count: number;
  is_favorite: boolean;
}
