import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Date {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  day: string;

  @Column()
  month: string;

  @Column()
  year: string;

}

export default Date;