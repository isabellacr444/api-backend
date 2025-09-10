import { Role } from '../../common/enum/role.enum';
export interface UserPayload {
  userId: number;
  email: string;
  role: Role;
}