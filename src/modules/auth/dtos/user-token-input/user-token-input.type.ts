import { User } from '@/infra/database/entities/user/user.entity';

export type UserTokenInputType = {
  user: User;
  token: string;
};
