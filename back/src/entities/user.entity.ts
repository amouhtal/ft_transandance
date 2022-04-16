import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  
  
  @Column({nullable: true})
  userName: string;
  
  @Column({unique : true})
  email: string;
  
  @Column()
  picture : string

  @Column({ default: true })
  isActive: boolean;
}
