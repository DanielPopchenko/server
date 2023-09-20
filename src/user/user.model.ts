import { prop } from '@typegoose/typegoose';
// Base, TimeStamps - оттуда будем доставать _id, createdAt, updatedAt
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  @prop({ unique: true })
  email: string;

  @prop()
  password: string;
}
