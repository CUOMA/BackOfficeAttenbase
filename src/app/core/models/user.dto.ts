export interface UserDTO {
  activated: number;
  created_at: string;
  deleted_at: string | null;
  email: string;
  email_verified_at: string | null;
  first_name: string;
  id: number;
  last_login: string;
  last_name: string;
  permissions: any[];
  roles: any[];
  updated_at: string;
}
