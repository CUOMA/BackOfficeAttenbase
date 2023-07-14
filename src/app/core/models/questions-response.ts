export interface Pivot {
  question_id: number;
  category_id: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent_id?: number;
  order: number;
  hidden: number;
  icon: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
  pivot: Pivot;
}

export interface Datum {
  id: number;
  status_id: number;
  user_id: number;
  question: string;
  path: string;
  read_only: number;
  commercial_content: number;
  rate: number;
  views: number;
  sticky: number;
  sofia_id: number;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  due_at: string;
  publish_at: string;
  sofia_updated_at?: any;
  created_at?: any;
  updated_at?: Date;
  deleted_at: string;
  categories: Category[];
  total: number;
  name: string;
}

export interface Link {
  url: string;
  label: string;
  active: boolean;
}

export interface Questions {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

export interface QuestionsResponse {
  success: boolean;
  code: number;
  data: Questions;
}
