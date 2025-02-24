import { BaseEntity } from './base-entity';
import { IResponse } from './response';
import { Address } from './address';

export interface Person extends BaseEntity {
  phone: string;
  birthday: string;
  gender: string;
  address: Address;
  image: string;

}

export interface PersonResponse extends IResponse {
  data: Person[];
}
