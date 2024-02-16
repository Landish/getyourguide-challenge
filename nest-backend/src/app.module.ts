import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { SuppliersModule } from './suppliers/suppliers.module';
@Module({
  imports: [ActivitiesModule, SuppliersModule],
})
export class AppModule {}
