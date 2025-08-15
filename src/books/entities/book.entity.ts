import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Book {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  chapters: number;

  @Column()
  pages: number;

  @Column()
  authorIds: ObjectId[];
}
