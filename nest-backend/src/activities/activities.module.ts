import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { Activity } from './entities/activity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from '../suppliers/entities/supplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, Supplier])],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
