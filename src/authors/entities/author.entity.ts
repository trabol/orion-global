import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Author {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  bookIds: ObjectId[];
}
