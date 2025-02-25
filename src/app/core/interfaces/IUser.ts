import { IResponse } from './IResponse';
import { IBaseEntity } from './i-base-entity';

export interface IUser extends Omit<IBaseEntity, 'firstname' | 'lastname'> {
  uuid: string;
  avatar: string;
  first_name: string;
  last_name: string;
}

export interface IUsersResponse extends IResponse {
  data: IUser[];
}
