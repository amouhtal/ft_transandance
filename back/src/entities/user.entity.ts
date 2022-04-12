import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('Users')
@Unique(["userName", "email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  
  
  @Column({unique : true})
  userName: string;
  
  @Column()
  email: string;
  
  @Column()
  picture : string

  @Column({ default: true })
  isActive: boolean;
}
