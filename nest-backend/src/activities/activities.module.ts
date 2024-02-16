import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { SuppliersService } from '../suppliers/suppliers.service';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService, SuppliersService],
})
export class ActivitiesModule {}
