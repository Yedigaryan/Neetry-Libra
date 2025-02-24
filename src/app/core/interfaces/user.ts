import { IResponse } from './response';
import { BaseEntity } from './base-entity';

export interface User extends Omit<BaseEntity, 'firstname' | 'lastname'> {
  uuid: string;
  avatar: string;
  first_name: string;
  last_name: string;
}

export interface UsersResponse extends IResponse {
  data: User[];
}
