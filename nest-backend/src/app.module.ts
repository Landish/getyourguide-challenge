import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesController } from './activities/activities.controller';

@Module({
  imports: [],
  controllers: [AppController, ActivitiesController],
  providers: [AppService],
})
export class AppModule {}
