import { Report } from 'src/reports/report.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with ID : ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with ID : ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with ID : ', this.id);
  }
}
