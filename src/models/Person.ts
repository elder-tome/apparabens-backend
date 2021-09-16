import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import User from './User';
import Date from './Date'

@Entity()
class Person {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne(type => Date)
  @JoinColumn()
  date: Date;

  @Column({
    nullable: true
  })
  image_url: string;

  @ManyToOne(type => User, user => user.id)
  user: User

}

export default Person;