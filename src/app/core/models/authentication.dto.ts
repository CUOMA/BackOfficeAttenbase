import { UserDTO } from './user.dto';

export interface Authentication {
  permissions: string[];
  token: string;
  user: UserDTO;
}
