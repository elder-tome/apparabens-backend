import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Person from './Person';

@Entity()
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @OneToMany(type => Person, person => person.id)
  person: Person[];

}

export default User;