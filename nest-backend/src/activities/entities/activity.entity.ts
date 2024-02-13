import { Supplier } from '../../suppliers/entities/supplier.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  currency: string;

  @Column({ type: 'double' })
  rating: number;

  @Column()
  specialOffer: boolean;

  @Column()
  supplierId: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.activities)
  supplier?: Supplier;
}
