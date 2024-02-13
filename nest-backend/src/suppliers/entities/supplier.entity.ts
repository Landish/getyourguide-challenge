import { Activity } from '../../activities/entities/activity.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('suppliers')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  zip: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @OneToMany(() => Activity, (activity) => activity.supplier)
  activities?: Activity[];
}
