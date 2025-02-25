import { IBaseEntity } from './i-base-entity';
import { IResponse } from './IResponse';
import { IAddress } from './IAddress';

export interface IPerson extends IBaseEntity {
  phone: string;
  birthday: string;
  gender: string;
  address: IAddress;
  image: string;

}

export interface IPersonResponse extends IResponse {
  data: IPerson[];
}
