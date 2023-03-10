export interface StatusesResponse {
  success: boolean;
  code: number;
  data: QuestionStatus[];
}

export interface QuestionStatus {
  id: number;
  name: string;
  class: string;
  created_at: string;
  updated_at: string;
}
